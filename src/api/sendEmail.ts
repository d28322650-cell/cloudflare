
interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const WORKER_URL = "https://react-vite.d28322650.workers.dev";

export async function sendContactEmail(
  data: ContactEmailData,
): Promise<void> {
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.error || "Failed to send contact email.",
    );
  }
}

