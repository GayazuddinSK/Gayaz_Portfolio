/**
 * API utility for transmitting inquiries to the automation backend (n8n).
 * Transforms form data into a structured JSON payload.
 */

const WEBHOOK_URL = ""; // Placeholder for future n8n webhook URL

export async function transmitInquiry(formData) {
  const payload = {
    metadata: {
      timestamp: new Date().toISOString(),
      source: "portfolio_contact_portal",
      type: "inquiry"
    },
    sender: {
      fullName: formData.fullName,
      email: formData.email,
      organization: formData.organization || "Independent",
      preferredContact: formData.preferredContact
    },
    inquiry: {
      type: formData.inquiryType,
      message: formData.message
    }
  };

  console.log("Transmitting payload to automation backend:", payload);

  if (!WEBHOOK_URL) {
    // Mock simulation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Mock transmission successful" });
      }, 1500);
    });
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Transmission failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Webhook transmission error:", error);
    throw error;
  }
}
