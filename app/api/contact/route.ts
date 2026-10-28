import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import {
  generateContactEmailHtml,
  generateContactEmailText,
} from "@/lib/email-template";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, email, service, goal } = body;

    // Validación de campos obligatorios
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "El nombre o marca es obligatorio." },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== "string" || !contact.trim()) {
      return NextResponse.json(
        { error: "El teléfono o WhatsApp de contacto es obligatorio." },
        { status: 400 }
      );
    }

    if (!goal || typeof goal !== "string" || !goal.trim()) {
      return NextResponse.json(
        { error: "Por favor cuéntanos brevemente qué buscas lograr con tu sitio web." },
        { status: 400 }
      );
    }

    // Comprobar variables de entorno
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.GMAIL_TO || gmailUser;

    if (!gmailUser || !gmailPass) {
      console.error(
        "[API /api/contact] Error: GMAIL_USER o GMAIL_APP_PASSWORD no están configurados en el archivo .env.local"
      );
      return NextResponse.json(
        {
          error:
            "El servicio de correo no está configurado aún. Por favor define GMAIL_USER y GMAIL_APP_PASSWORD en .env.local",
        },
        { status: 500 }
      );
    }

    // Configuración del transporte SMTP con Google
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL en puerto 465
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s+/g, ""), // Eliminar espacios accidentales de la contraseña de 16 caracteres
      },
    });

    // Verificar ruta del icono oficial para adjunto inline con Content-ID (cid:kore-icon)
    const iconPath = path.join(process.cwd(), "public", "kore-icon.png");
    const attachments = [];

    if (fs.existsSync(iconPath)) {
      attachments.push({
        filename: "kore-icon.png",
        path: iconPath,
        cid: "kore-icon",
      });
    }

    // Generar contenido HTML y versión de texto plano
    const htmlContent = generateContactEmailHtml({
      name: name.trim(),
      contact: contact.trim(),
      email: email?.trim(),
      service: typeof service === "string" ? service.trim() : undefined,
      goal: goal.trim(),
    });

    const textContent = generateContactEmailText({
      name: name.trim(),
      contact: contact.trim(),
      email: email?.trim(),
      service: typeof service === "string" ? service.trim() : undefined,
      goal: goal.trim(),
    });

    const serviceTag = service ? ` [${service.trim()}]` : "";

    // Enviar el correo a través de Google Gmail SMTP
    const info = await transporter.sendMail({
      from: `"Kore Web Studio" <${gmailUser}>`,
      to: recipientEmail,
      replyTo:
        email && email.trim().includes("@")
          ? email.trim()
          : gmailUser,
      subject: `🚀 Nueva Solicitud${serviceTag}: ${name.trim()}`,
      html: htmlContent,
      text: textContent,
      attachments,
    });

    console.log(`[API /api/contact] Correo enviado exitosamente (ID: ${info.messageId})`);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error: unknown) {
    console.error("[API /api/contact] Error al procesar y enviar el correo:", error);
    
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido al enviar el correo";

    return NextResponse.json(
      {
        error:
          "Ocurrió un problema al enviar tu solicitud. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
