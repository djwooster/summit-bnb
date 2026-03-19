import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, property, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Summit BnB <onboarding@resend.dev>",
    to: "hello@summitbnb.co",
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Property Address: ${property || "—"}`,
      `Message: ${message || "—"}`,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
