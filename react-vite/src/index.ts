
/**
 * Cloudflare Worker
 * Contact form -> Resend
 */

interface Env {
  RESEND_API_KEY: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(
  data: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
      ...extraHeaders,
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    // -----------------------------------------
    // 1. CORS preflight
    // -----------------------------------------
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // -----------------------------------------
    // 2. Only allow POST
    // -----------------------------------------
    if (request.method !== "POST") {
      return jsonResponse(
        { error: "Method not allowed" },
        405,
        {
          Allow: "POST, OPTIONS",
        },
      );
    }

    try {
      // -----------------------------------------
      // 3. Check Resend API key
      // -----------------------------------------
      if (!env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured.");

        return jsonResponse(
          { error: "Email service is not configured." },
          500,
        );
      }

      // -----------------------------------------
      // 4. Parse request body
      // -----------------------------------------
      const body = (await request.json()) as Partial<ContactForm>;

      const name = body.name?.trim();
      const email = body.email?.trim();
      const subject = body.subject?.trim();
      const message = body.message?.trim();

      // -----------------------------------------
      // 5. Validate form
      // -----------------------------------------
      if (!name || !email || !subject || !message) {
        return jsonResponse(
          {
            error: "All fields are required.",
          },
          400,
        );
      }

      if (!isValidEmail(email)) {
        return jsonResponse(
          {
            error: "Please provide a valid email address.",
          },
          400,
        );
      }

      // Optional protection against extremely large requests.
      if (
        name.length > 100 ||
        email.length > 254 ||
        subject.length > 200 ||
        message.length > 5000
      ) {
        return jsonResponse(
          {
            error: "One or more fields are too long.",
          },
          400,
        );
      }

      // -----------------------------------------
      // 6. Build the email
      // -----------------------------------------

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject);
      const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Contact Form Message</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f5eee6;
              font-family: Arial, Helvetica, sans-serif;
              color: #4f0a16;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #fffaf5;
                border: 1px solid #e4cfc4;
              "
            >
              <div
                style="
                  padding: 32px;
                  background: #520814;
                  color: #fff9f3;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    font-size: 12px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                  "
                >
                  ROMANA
                </p>

                <h1
                  style="
                    margin: 0;
                    font-family: Georgia, serif;
                    font-size: 30px;
                    font-weight: normal;
                  "
                >
                  New Contact Message
                </h1>
              </div>

              <div style="padding: 32px;">
                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 11px;
                      font-weight: bold;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #80091d;
                    "
                  >
                    Name
                  </p>

                  <p style="margin: 0; font-size: 16px;">
                    ${safeName}
                  </p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 11px;
                      font-weight: bold;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #80091d;
                    "
                  >
                    Email
                  </p>

                  <p style="margin: 0; font-size: 16px;">
                    <a
                      href="mailto:${safeEmail}"
                      style="color: #80091d;"
                    >
                      ${safeEmail}
                    </a>
                  </p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 11px;
                      font-weight: bold;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #80091d;
                    "
                  >
                    Subject
                  </p>

                  <p style="margin: 0; font-size: 16px;">
                    ${safeSubject}
                  </p>
                </div>

                <div>
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 11px;
                      font-weight: bold;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                      color: #80091d;
                    "
                  >
                    Message
                  </p>

                  <div
                    style="
                      padding: 18px;
                      background: #f5eee6;
                      border-left: 3px solid #80091d;
                      line-height: 1.7;
                      font-size: 15px;
                    "
                  >
                    ${safeMessage}
                  </div>
                </div>
              </div>

              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #e4cfc4;
                  color: #8b6d73;
                  font-size: 12px;
                "
              >
                This message was submitted through the Romana website
                contact form.
              </div>
            </div>
          </body>
        </html>
      `;

      // -----------------------------------------
      // 7. Send email through Resend
      // -----------------------------------------
      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            // IMPORTANT:
            // Replace this with an email address from
            // a domain verified in your Resend account.
            from: "Romana Website <d28322650@gmail.com>",

            // Where YOU receive contact form messages.
            to: ["d28322650@gmail.com"],

            // The visitor's email becomes the reply-to address.
            reply_to: email,

            subject: `Contact form: ${subject}`,

            html,
          }),
        },
      );

      const resendData = await resendResponse.json();

      // -----------------------------------------
      // 8. Handle Resend errors
      // -----------------------------------------
      if (!resendResponse.ok) {
        console.error("Resend error:", resendData);

        return jsonResponse(
          {
            error: "Unable to send email.",
          },
          502,
        );
      }

      // -----------------------------------------
      // 9. Success
      // -----------------------------------------
      console.log("Contact email sent:", resendData);

      return jsonResponse({
        success: true,
        message: "Email sent successfully.",
      });
    } catch (error) {
      console.error("Worker error:", error);

      return jsonResponse(
        {
          error: "Something went wrong while sending the email.",
        },
        500,
      );
    }
  },
} satisfies ExportedHandler<Env>;

