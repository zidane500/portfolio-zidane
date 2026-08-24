"use server";

import { Resend } from "resend";

import { siteConfig } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGE_MAX_LENGTH = 5000;

/**
 * Empêche l'injection CRLF dans les valeurs utilisées
 * dans les headers / subject des emails.
 */
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").slice(0, 200);
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const email = String(formData.get("email") ?? "").trim();

  const message = String(formData.get("message") ?? "").trim();

  /*
   * Honeypot anti-spam.
   * Ce champ sera invisible dans le formulaire.
   */
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return {
      success: true,
      message: "Message envoyé !",
    };
  }

  /*
   * Vérification des champs obligatoires.
   */
  if (!email || !message) {
    return {
      success: false,
      message: "Merci de remplir tous les champs.",
    };
  }

  /*
   * Vérification de l'adresse email.
   */
  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "Adresse email invalide.",
    };
  }

  /*
   * Limitation du message.
   */
  if (message.length > MESSAGE_MAX_LENGTH) {
    return {
      success: false,
      message: `Message trop long (${MESSAGE_MAX_LENGTH} caractères max).`,
    };
  }

  try {
    const { error } = await resend.emails.send({
      /*
       * Pour commencer avec Resend.
       */
      from: "Portfolio Zidane <onboarding@resend.dev>",

      /*
       * Ton vrai email défini dans siteConfig.
       */
      to: siteConfig.email,

      /*
       * Lorsque tu cliqueras sur "Répondre",
       * la réponse ira directement à la personne
       * qui a rempli le formulaire.
       */
      replyTo: sanitizeHeaderValue(email),

      subject: "Nouveau message depuis mon portfolio",

      text: `Nouveau message depuis le portfolio

Email : ${email}

Message :
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        message: "Une erreur est survenue. Réessaie un peu plus tard.",
      };
    }

    return {
      success: true,
      message: "Message envoyé, merci ! Je vous répondrai rapidement.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message: "Une erreur est survenue. Réessaie un peu plus tard.",
    };
  }
}
