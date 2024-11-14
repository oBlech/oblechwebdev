interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

interface Env {
  SENDGRID: {
    send: (options: {
      to: string;
      from: string;
      subject: string;
      text: string;
    }) => Promise<void>;
  };
}

export const onRequestPost = async (context: { 
  request: Request; 
  env: Env;
}) => {
  try {
    const request = context.request;
    const payload = await request.json();

    const emailContent = `
      New Contact Form Submission
      
      Name: ${payload.name}
      Email: ${payload.email}
      Message: ${payload.message}
    `;

    await context.env.SENDGRID.send({
      to: "oblechdev@gmail.com",
      from: "contact@oblech.dev",
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
}; 