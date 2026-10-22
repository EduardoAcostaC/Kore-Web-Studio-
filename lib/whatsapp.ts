/**
 * Configuración centralizada y generador de enlaces de WhatsApp para Kore Web Studio
 */

export function cleanWhatsAppNumber(phone: string): string {
  // Elimina espacios, guiones, paréntesis y símbolos más (+)
  const digits = phone.replace(/[^\d]/g, "");

  // Si el usuario ingresó un número mexicano de 10 dígitos sin lada internacional
  if (digits.length === 10) {
    return `52${digits}`;
  }

  return digits;
}

// Número de WhatsApp configurado por variable de entorno o fallback editable
export const DEFAULT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5215500000000";

/**
 * Mensajes predefinidos para los distintos llamados a la acción (CTA)
 */
export const WHATSAPP_MESSAGES = {
  navbar: "Hola Kore Web Studio, quiero iniciar un proyecto web con ustedes.",
  hero: "Hola Kore Web Studio, quiero información sobre el desarrollo de un proyecto web.",
  contactCard: "Hola Kore Web Studio, quiero solicitar asesoría gratuita para mi proyecto.",
  contactFallback: "Hola Kore Web Studio, intenté enviar el formulario pero prefiero contactarlos por aquí.",
  footer: "Hola Kore Web Studio, quiero iniciar un proyecto web y transformar mi marca.",
  floating: "Hola Kore Web Studio, me gustaría recibir más información sobre sus servicios web.",
} as const;

/**
 * Genera un enlace directo wa.me con el número y mensaje codificado
 */
export function getWhatsAppUrl(
  message: string = WHATSAPP_MESSAGES.navbar,
  phoneNumber: string = DEFAULT_WHATSAPP_NUMBER
): string {
  const cleanPhone = cleanWhatsAppNumber(phoneNumber);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
