export interface ContactEmailData {
  name: string;
  contact: string;
  email?: string;
  service?: string;
  goal: string;
}

/**
 * Limpia el número de teléfono para generar un enlace directo de WhatsApp válido
 */
function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
}

/**
 * Genera el cuerpo HTML del correo con la estética y colores de Kore Web Studio
 */
export function generateContactEmailHtml(data: ContactEmailData): string {
  const { name, contact, email, service, goal } = data;
  const cleanPhone = cleanPhoneNumber(contact);
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hola ${name}, recibimos tu solicitud en Kore Web Studio para tu proyecto web.`
  )}`;
  const mailtoUrl = email
    ? `mailto:${email}?subject=${encodeURIComponent(
        `Kore Web Studio - Respuesta a tu solicitud de proyecto`
      )}`
    : null;

  const currentDate = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Solicitud de Proyecto - Kore Web Studio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050811; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #050811; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #090f1d; border-radius: 20px; overflow: hidden; border: 1px solid #1a2845; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #0066ff 0%, #00d2ff 50%, #10b981 100%);"></td>
          </tr>

          <!-- Header Section with Site Icon -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; background: radial-gradient(circle at 80% 0%, rgba(0, 210, 255, 0.08), transparent 70%); border-bottom: 1px solid #142036;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td valign="middle" style="width: 56px;">
                    <!-- Kore Web Studio Embedded Icon -->
                    <img src="cid:kore-icon" alt="Kore Web Studio" width="48" height="48" style="display: block; border-radius: 12px; border: 1px solid rgba(0, 210, 255, 0.3); background-color: #0b1325;" />
                  </td>
                  <td valign="middle" style="padding-left: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #00d2ff; margin-bottom: 4px;">
                      Kore Web Studio
                    </div>
                    <div style="font-size: 20px; font-weight: 800; color: #ffffff; line-height: 1.2;">
                      Nueva Solicitud de Proyecto
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Badge -->
              <div style="margin-top: 20px; display: inline-block; padding: 6px 14px; background: rgba(0, 210, 255, 0.08); border: 1px solid rgba(0, 210, 255, 0.25); border-radius: 100px;">
                <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background-color: #10b981; margin-right: 8px; vertical-align: middle;"></span>
                <span style="font-size: 12px; font-weight: 600; color: #7dd3fc; vertical-align: middle;">
                  Lead recibido desde el sitio web
                </span>
              </div>
            </td>
          </tr>

          <!-- Body Content: Prospect Data -->
          <tr>
            <td style="padding: 28px 32px 20px 32px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                Has recibido una nueva solicitud de asesoría a través del formulario de contacto. A continuación se detallan los datos del solicitante:
              </p>

              <!-- Data Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0e172a; border: 1px solid #1a2a47; border-radius: 14px; margin-bottom: 24px;">
                
                <!-- Field: Nombre -->
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #152238;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;">
                      Nombre / Marca
                    </div>
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff;">
                      ${escapeHtml(name)}
                    </div>
                  </td>
                </tr>

                <!-- Field: WhatsApp / Teléfono -->
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #152238;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;">
                      WhatsApp / Teléfono
                    </div>
                    <div style="font-size: 15px; font-weight: 600;">
                      <a href="${waUrl}" target="_blank" style="color: #34d399; text-decoration: none;">
                        💬 ${escapeHtml(contact)} &rarr; (Abrir en WhatsApp)
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Field: Correo Electrónico -->
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #152238;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;">
                      Correo Electrónico
                    </div>
                    <div style="font-size: 15px; font-weight: 600;">
                      ${
                        email
                          ? `<a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none;">✉️ ${escapeHtml(email)}</a>`
                          : `<span style="color: #64748b; font-weight: normal; font-style: italic;">No especificado (solo WhatsApp)</span>`
                      }
                    </div>
                  </td>
                </tr>

                <!-- Field: Servicio Requerido -->
                ${
                  service
                    ? `
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #152238;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;">
                      Servicio Seleccionado
                    </div>
                    <div style="font-size: 15px; font-weight: 700; color: #00d2ff;">
                      ${escapeHtml(service)}
                    </div>
                  </td>
                </tr>
                `
                    : ""
                }

                <!-- Field: Objetivo del Proyecto -->
                <tr>
                  <td style="padding: 18px 20px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 8px;">
                      ¿Qué busca lograr con su sitio web?
                    </div>
                    <div style="background-color: #070c17; border-left: 3px solid #00d2ff; padding: 14px 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${escapeHtml(goal)}</div>
                  </td>
                </tr>
              </table>

              <!-- Action Buttons (CTAs) -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #94a3b8; margin-bottom: 12px;">
                  Acciones Rápidas:
                </div>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding-right: 8px; width: 50%;">
                      <a href="${waUrl}" target="_blank" style="display: block; padding: 12px 18px; background: #10b981; color: #ffffff; text-align: center; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 10px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
                        💬 Responder por WhatsApp
                      </a>
                    </td>
                    ${
                      mailtoUrl
                        ? `
                    <td style="padding-left: 8px; width: 50%;">
                      <a href="${mailtoUrl}" style="display: block; padding: 12px 18px; background: #0066ff; color: #ffffff; text-align: center; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);">
                        ✉️ Responder por Correo
                      </a>
                    </td>
                    `
                        : `
                    <td style="padding-left: 8px; width: 50%;">
                      <div style="display: block; padding: 12px 18px; background: #1e293b; color: #64748b; text-align: center; font-size: 12px; border-radius: 10px;">
                        Sin correo provisto
                      </div>
                    </td>
                    `
                    }
                  </tr>
                </table>
              </div>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding: 20px 32px 28px 32px; background-color: #060a14; border-top: 1px solid #142036; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #64748b;">
                Enviado automáticamente por el formulario web de <strong style="color: #94a3b8;">Kore Web Studio</strong>
              </p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                Recibido el ${currentDate} (Hora local) &bull; Conexión segura SSL
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Versión de texto plano alternativa
 */
export function generateContactEmailText(data: ContactEmailData): string {
  const { name, contact, email, service, goal } = data;
  return `
KORE WEB STUDIO - NUEVA SOLICITUD DE PROYECTO
==============================================

Has recibido un nuevo mensaje desde el formulario web de Kore Web Studio.

DATOS DEL SOLICITANTE:
- Nombre / Marca: ${name}
- WhatsApp / Teléfono: ${contact}
- Correo Electrónico: ${email || "No especificado"}
- Servicio: ${service || "No especificado"}

OBJETIVO DEL PROYECTO:
${goal}

ENLACE DIRECTO DE WHATSAPP:
https://wa.me/${cleanPhoneNumber(contact)}

==============================================
Enviado desde https://korews.com (Formulario de Contacto)
  `.trim();
}

/**
 * Evita inyección HTML en las cadenas proporcionadas por el usuario
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
