/**
 * Central Contact Configuration for Vikas Pradeep Portfolio
 * Ensures consistent WhatsApp URLs, email links, telephone numbers, and resume paths across all components.
 */

export const CONTACT_CONFIG = {
  name: "Vikas Pradeep",
  title: "AI Engineer",
  whatsappNumber: "917418730914",
  displayPhone: "+91 74187 30914",
  rawPhone: "+917418730914",
  email: "vikaspradeep2006@gmail.com",
  location: "Bangalore, Karnataka, India",
  timezone: "IST (UTC+5:30)",
  resumePath: "/files/Vikas-Pradeep-Resume.pdf",
  resumeFilename: "Vikas-Pradeep-Resume.pdf",
  defaultWhatsAppMessage:
    "Hello Vikas, I visited your portfolio and would like to discuss a project or opportunity with you.",
  defaultEmailSubject: "Portfolio Inquiry — Vikas Pradeep",

  /**
   * Generates a safe WhatsApp click-to-chat URL with prefilled URL-encoded text.
   */
  getWhatsAppUrl(customMessage?: string): string {
    const message = customMessage || this.defaultWhatsAppMessage;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  /**
   * Generates a mailto URL with a prefilled subject and optional body.
   */
  getMailtoUrl(subject?: string, body?: string): string {
    const s = subject || this.defaultEmailSubject;
    const b = body ? `&body=${encodeURIComponent(body)}` : "";
    return `mailto:${this.email}?subject=${encodeURIComponent(s)}${b}`;
  },

  /**
   * Telephone link for direct dial.
   */
  getTelUrl(): string {
    return `tel:${this.rawPhone}`;
  },
};
