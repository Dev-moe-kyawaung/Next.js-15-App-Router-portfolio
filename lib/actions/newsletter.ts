"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email") || "");

  if (!email || !email.includes("@")) {
    return { ok: false, message: "Please enter a valid email." };
  }

  // In production, add to Mailchimp, ConvertKit, etc.
  console.log("Newsletter subscription:", email);

  return { ok: true, message: "Thanks for subscribing!" };
}
