interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function onRequestPost(context: any) {
  try {
    const { request } = context;
    const payload: EmailPayload = await request.json();

    const emailContent = `
      New Contact Form Submission
      
      Name: ${payload.name}
      Email: ${payload.email}
      Message: ${payload.message}
    `;

    await context.env.SENDGRID.send({
      to: "oblechdev@gmail.com",
      from: "noreply@oblech-aoe.pages.dev",
      subject: "New Contact Form Submission",
      text: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 