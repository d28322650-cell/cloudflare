export async function onRequest(context) {
  const { request, env } = context;

  // 1. Centralized CORS headers setup
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Allows requests from http://localhost:5173 or any origin
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };

  // 2. Handle Browser Preflight (OPTIONS Request)
  if (request.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  // 3. Reject methods that are not POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    // 4. Check if the environment variable secret exists
    if (!env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Server Configuration Error: RESEND_API_KEY is missing in Cloudflare Worker settings." }),
        { status: 500, headers: corsHeaders }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Send email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>", 
        to: ["d28322650@gmail.com"],
        subject: `[Website Inquiry] ${subject} - from ${name}`,
        replyTo: email,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    let resendData;
    const text = await resendResponse.text();
    try {
      resendData = text ? JSON.parse(text) : {};
    } catch (e) {
      resendData = { raw: text };
    }

    if (!resendResponse.ok) {
      console.error('Resend API error', resendResponse.status, resendData);
      // Forward a simplified error message to the client for clarity
      const errorMessage = (resendData && (resendData.error || resendData.message)) || 'Resend API error';
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: resendResponse.status || 502,
        headers: corsHeaders,
      });
    }

    console.log('Email sent via Resend', resendData);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!", details: resendData }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    // Catch any unexpected JavaScript errors and return them cleanly with CORS headers
    console.error('Submit handler error', err);
    return new Response(
      JSON.stringify({ error: "Server error", details: (err && err.message) || String(err) }),
      { status: 500, headers: corsHeaders }
    );
  }
}