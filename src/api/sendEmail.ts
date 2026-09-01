interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<any> {
  // Replace this URL with your deployed Cloudflare Worker URL
  const WORKER_URL = import.meta.env.VITE_WORKER_URL || 'http://localhost:8787';

  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message.');
  }

  return result;
}