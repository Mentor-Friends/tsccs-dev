import { BaseUrl } from "../app"

export interface EmailBody {
    toAddress: string
    heading: string
    body?: string
    attachments?: Array<string>
    CaptchaToken?: string
    recaptchaAction?: string
}
  
export interface BulkEmailBody extends Omit<EmailBody, 'toAddress'> {
    toAddress?: string
    ccAddresses: Array<string>
}

export interface RecaptchaOptions {
    token: string
    action?: string
    fieldName?: string
    actionFieldName?: string
    headerName?: string
}

export interface SendEmailOptions {
    bulk?: boolean
    personal?: boolean
    recaptcha?: string | RecaptchaOptions
}

type Grecaptcha = {
    ready: (callback: () => void) => void
    execute: (siteKey: string, options: { action: string }) => Promise<string>
}

const DEFAULT_RECAPTCHA_FIELD_NAME = 'CaptchaToken'
const DEFAULT_RECAPTCHA_ACTION_FIELD_NAME = 'recaptchaAction'
const DEFAULT_RECAPTCHA_HEADER_NAME = 'X-Recaptcha-Token'
let recaptchaScriptPromise: Promise<void> | null = null

function normalizeSendEmailOptions(
    bulkOrOptions: boolean | SendEmailOptions = false,
    recaptchaToken?: string,
): SendEmailOptions {
    if (typeof bulkOrOptions === 'boolean') {
        return {
            bulk: bulkOrOptions,
            recaptcha: recaptchaToken,
        }
    }

    return {
        ...bulkOrOptions,
        recaptcha: bulkOrOptions.recaptcha ?? recaptchaToken,
    }
}

function normalizeRecaptchaOptions(
    recaptcha?: string | RecaptchaOptions,
): RecaptchaOptions | null {
    if (!recaptcha) return null

    if (typeof recaptcha === 'string') {
        return { token: recaptcha }
    }

    return recaptcha
}

function getBrowserGrecaptcha(): Grecaptcha | undefined {
    if (typeof window === 'undefined') return undefined
    return (window as typeof window & { grecaptcha?: Grecaptcha }).grecaptcha
}

function loadRecaptchaScript(siteKey: string) {
    if (getBrowserGrecaptcha()) return Promise.resolve()
    if (typeof document === 'undefined') {
        return Promise.reject(new Error('reCAPTCHA requires a browser document'))
    }

    if (!recaptchaScriptPromise) {
        const loadPromise = new Promise<void>((resolve, reject) => {
            const script = document.createElement('script')
            script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
            script.async = true
            script.defer = true
            script.onload = () => resolve()
            script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'))
            document.head.appendChild(script)
        })

        recaptchaScriptPromise = loadPromise.catch((error) => {
            recaptchaScriptPromise = null
            throw error
        })
    }

    return recaptchaScriptPromise
}

async function executeRecaptcha(siteKey: string, action: string) {
    await loadRecaptchaScript(siteKey)

    const grecaptcha = getBrowserGrecaptcha()
    if (!grecaptcha) throw new Error('reCAPTCHA is not available')

    await new Promise<void>((resolve) => {
        grecaptcha.ready(resolve)
    })

    return grecaptcha.execute(siteKey, { action })
}

async function resolveRecaptchaOptions(
    recaptcha: RecaptchaOptions | null,
): Promise<RecaptchaOptions | null> {
    if (recaptcha?.token) return recaptcha

    if (!BaseUrl.RECAPTCHA_SITE_KEY) return recaptcha

    const action = recaptcha?.action ?? BaseUrl.RECAPTCHA_ACTION
    const token = await executeRecaptcha(BaseUrl.RECAPTCHA_SITE_KEY, action)

    return {
        ...recaptcha,
        token,
        action,
    }
}

function getMailUrl(options: SendEmailOptions) {
    if (options.personal) return BaseUrl.sendPersonalMail()
    if (options.bulk) return BaseUrl.sendBulkMail()
    return BaseUrl.sendMail()
}

function withRecaptchaBody(
    body: FormData | EmailBody | BulkEmailBody,
    recaptcha: RecaptchaOptions | null,
) {
    if (body instanceof FormData) {
        if (!recaptcha?.token) return body

        const tokenFieldName = recaptcha.fieldName ?? DEFAULT_RECAPTCHA_FIELD_NAME
        const actionFieldName = recaptcha.actionFieldName ?? DEFAULT_RECAPTCHA_ACTION_FIELD_NAME

        if (!body.has(tokenFieldName)) body.append(tokenFieldName, recaptcha.token)
        if (recaptcha.action && !body.has(actionFieldName)) body.append(actionFieldName, recaptcha.action)

        return body
    }

    const payload: Record<string, unknown> = { ...body }

    if (recaptcha?.token) {
        const tokenFieldName = recaptcha.fieldName ?? DEFAULT_RECAPTCHA_FIELD_NAME
        const actionFieldName = recaptcha.actionFieldName ?? DEFAULT_RECAPTCHA_ACTION_FIELD_NAME

        if (payload[tokenFieldName] === undefined) payload[tokenFieldName] = recaptcha.token
        if (recaptcha.action && payload[actionFieldName] === undefined) {
            payload[actionFieldName] = recaptcha.action
        }
    }

    return JSON.stringify(payload)
}

function getHeaders(isFormData: boolean, token: string, recaptcha: RecaptchaOptions | null) {
    const headers: Record<string, string> = {}

    if (token) headers.Authorization = `Bearer ${token}`

    if (!isFormData) headers['Content-Type'] = 'application/json'

    if (recaptcha?.token) {
        headers[recaptcha.headerName ?? DEFAULT_RECAPTCHA_HEADER_NAME] = recaptcha.token
    }

    return headers
}

function warnIfRecaptchaMissing(recaptcha: RecaptchaOptions | null) {
    if (recaptcha?.token) return

    console.warn('Sending email without a reCAPTCHA token. Ensure the backend rejects unverified mail requests.')
}

/**
 * Method to send Email to user
 * @param body FormData | EmailBody
 * @param token string
 * @param bulkOrOptions boolean | SendEmailOptions
 * @param recaptchaToken string
 * @returns JSON | string | null
 */
export const sendEmail = async (
    body: FormData | EmailBody | BulkEmailBody,
    token: string,
    bulkOrOptions: boolean | SendEmailOptions = false,
    recaptchaToken?: string,
  ) => {
    try {
      const options = normalizeSendEmailOptions(bulkOrOptions, recaptchaToken)
      const recaptcha = await resolveRecaptchaOptions(normalizeRecaptchaOptions(options.recaptcha))
      const isFormData = body instanceof FormData
      const url = getMailUrl(options)
      warnIfRecaptchaMissing(recaptcha)

      const response = await fetch(url, {
        method: 'POST',
        body: withRecaptchaBody(body, recaptcha),
        headers: getHeaders(isFormData, token, recaptcha),
      })
      const contentType = response.headers.get('content-type') ?? ''
      if (!response.ok) {
        const errorData = contentType.includes('application/json')
          ? await response.json()
          : await response.text()
        console.info(`${response.status} ${errorData}`)
        return null
      }
  
      if (contentType.includes('text/plain')) {
        return await response.text()
      }
      return await response.json()
    } catch (err) {
      console.error(err)
      return null
    }
  }

/**
 * Method to send a personal Email to user.
 * @param body FormData | EmailBody
 * @param token string
 * @param options SendEmailOptions
 * @returns JSON | string | null
 */
export const sendPersonalEmail = async (
    body: FormData | EmailBody,
    token: string,
    options: Omit<SendEmailOptions, 'personal' | 'bulk'> = {},
  ) => {
    return sendEmail(body, token, {
      ...options,
      personal: true,
    })
  }
