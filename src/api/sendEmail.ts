import emailjs from '@emailjs/browser';

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.');
  }

  const templateParams = {
    from_name: payload.name,
    from_email: payload.email,
    reply_to: payload.email,
    subject: `${payload.subject} — from ${payload.name} <${payload.email}>`,
    message: payload.message,
    to_email: 'play4store7@gmail.com',
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
