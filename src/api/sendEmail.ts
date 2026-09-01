export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Use relative path '/api/submit' instead of workers.dev
  const response = await fetch('functions/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Handle empty or non-JSON responses gracefully
  const text = await response.text();
  let result;
  try {
    result = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`Server returned status ${response.status}: ${text}`);
  }

  if (!response.ok) {
    throw new Error(result.error ? JSON.stringify(result.error) : 'Failed to send message');
  }
}