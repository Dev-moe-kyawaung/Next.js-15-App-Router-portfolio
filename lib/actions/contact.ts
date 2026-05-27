"use server";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email || !message) {
    return { ok: false, message: "All fields are required." };
  }

  return { ok: true, message: "Message received." };
}
