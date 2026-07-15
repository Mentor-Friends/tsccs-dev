import { sendEmail, sendPersonalEmail } from "../src/Services/Mail";
import { BaseUrl } from "../src/app";

jest.mock("../src/app", () => ({
  BaseUrl: {
    RECAPTCHA_SITE_KEY: "",
    RECAPTCHA_ACTION: "send_mail",
    sendMail: jest.fn(() => "https://api.boomconsole.com/api/sendmail"),
    sendBulkMail: jest.fn(() => "https://api.boomconsole.com/api/sendmail/bulk"),
    sendPersonalMail: jest.fn(() => "https://api.boomconsole.com/api/sendmail/personal"),
  },
}));

const createJsonResponse = (body: unknown) => ({
  ok: true,
  status: 200,
  headers: {
    get: jest.fn(() => "application/json"),
  },
  json: jest.fn(async () => body),
  text: jest.fn(async () => JSON.stringify(body)),
});

describe("mail services", () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => undefined);
    BaseUrl.RECAPTCHA_SITE_KEY = "";
    BaseUrl.RECAPTCHA_ACTION = "send_mail";
    delete (global as any).window;
    delete (global as any).document;
    global.fetch = jest.fn(async () => createJsonResponse({ success: true })) as jest.Mock;
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  test("adds recaptcha token to standard sendmail request", async () => {
    await sendEmail(
      {
        toAddress: "niscalbhandari12@gmail.com",
        heading: "Hello",
        body: "Message",
      },
      "auth-token",
      {
        recaptcha: {
          token: "recaptcha-token",
          action: "send_mail",
        },
      },
    );

    expect(BaseUrl.sendMail).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          toAddress: "niscalbhandari12@gmail.com",
          heading: "Hello",
          body: "Message",
          CaptchaToken: "recaptcha-token",
          recaptchaAction: "send_mail",
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer auth-token",
          "X-Recaptcha-Token": "recaptcha-token",
        },
      }),
    );

    expect(warnSpy).not.toHaveBeenCalled();
  });

  test("generates recaptcha token automatically when site key is configured", async () => {
    const execute = jest.fn(async () => "auto-recaptcha-token");
    BaseUrl.RECAPTCHA_SITE_KEY = "site-key";
    BaseUrl.RECAPTCHA_ACTION = "send_mail";
    (global as any).window = {
      grecaptcha: {
        ready: jest.fn((callback: () => void) => callback()),
        execute,
      },
    };

    await sendEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello",
      },
      "auth-token",
    );

    expect(execute).toHaveBeenCalledWith("site-key", { action: "send_mail" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail",
      expect.objectContaining({
        body: JSON.stringify({
          toAddress: "user@example.com",
          heading: "Hello",
          CaptchaToken: "auto-recaptcha-token",
          recaptchaAction: "send_mail",
        }),
        headers: expect.objectContaining({
          "X-Recaptcha-Token": "auto-recaptcha-token",
        }),
      }),
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  test("keeps legacy bulk argument while accepting recaptcha token", async () => {
    await sendEmail(
      {
        heading: "Hello",
        ccAddresses: ["a@example.com"],
      },
      "auth-token",
      true,
      "recaptcha-token",
    );

    expect(BaseUrl.sendBulkMail).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail/bulk",
      expect.objectContaining({
        body: JSON.stringify({
          heading: "Hello",
          ccAddresses: ["a@example.com"],
          CaptchaToken: "recaptcha-token",
        }),
      }),
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  test("sends personal mail through personal endpoint", async () => {
    await sendPersonalEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello",
      },
      "auth-token",
      {
        recaptcha: "personal-recaptcha-token",
      },
    );

    expect(BaseUrl.sendPersonalMail).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail/personal",
      expect.objectContaining({
        body: JSON.stringify({
          toAddress: "user@example.com",
          heading: "Hello",
          CaptchaToken: "personal-recaptcha-token",
        }),
      }),
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  test("warns when sending mail without a recaptcha token", async () => {
    await sendEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello",
      },
      "auth-token",
    );

    expect(warnSpy).toHaveBeenCalledWith(
      "Sending email without a reCAPTCHA token. Ensure the backend rejects unverified mail requests.",
    );
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail",
      expect.objectContaining({
        body: JSON.stringify({
          toAddress: "user@example.com",
          heading: "Hello",
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer auth-token",
        },
      }),
    );
  });

  test("does not send an authorization header when token is missing", async () => {
    await sendEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello",
      },
      undefined as unknown as string,
      {
        recaptcha: "recaptcha-token",
      },
    );

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail",
      expect.objectContaining({
        headers: {
          "Content-Type": "application/json",
          "X-Recaptcha-Token": "recaptcha-token",
        },
      }),
    );
  });

  test("retries loading recaptcha script after a load failure", async () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);
    const execute = jest.fn(async () => "retry-recaptcha-token");
    const scripts: Array<{
      src?: string;
      async?: boolean;
      defer?: boolean;
      onload?: () => void;
      onerror?: () => void;
    }> = [];

    BaseUrl.RECAPTCHA_SITE_KEY = "site-key";
    (global as any).window = {};
    (global as any).document = {
      createElement: jest.fn(() => ({})),
      head: {
        appendChild: jest.fn((script) => {
          scripts.push(script);
          if (scripts.length === 1) {
            script.onerror();
          } else {
            (global as any).window.grecaptcha = {
              ready: jest.fn((callback: () => void) => callback()),
              execute,
            };
            script.onload();
          }
        }),
      },
    };

    const first = await sendEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello",
      },
      "auth-token",
    );

    expect(first).toBeNull();
    expect(global.fetch).not.toHaveBeenCalled();

    await sendEmail(
      {
        toAddress: "user@example.com",
        heading: "Hello again",
      },
      "auth-token",
    );

    expect((global as any).document.createElement).toHaveBeenCalledTimes(2);
    expect((global as any).document.head.appendChild).toHaveBeenCalledTimes(2);
    expect(execute).toHaveBeenCalledWith("site-key", { action: "send_mail" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.boomconsole.com/api/sendmail",
      expect.objectContaining({
        body: JSON.stringify({
          toAddress: "user@example.com",
          heading: "Hello again",
          CaptchaToken: "retry-recaptcha-token",
          recaptchaAction: "send_mail",
        }),
      }),
    );

    errorSpy.mockRestore();
  });
});
