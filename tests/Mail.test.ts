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
  beforeEach(() => {
    jest.clearAllMocks();
    BaseUrl.RECAPTCHA_SITE_KEY = "";
    BaseUrl.RECAPTCHA_ACTION = "send_mail";
    delete (global as any).window;
    delete (global as any).document;
    global.fetch = jest.fn(async () => createJsonResponse({ success: true })) as jest.Mock;
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
  });
});
