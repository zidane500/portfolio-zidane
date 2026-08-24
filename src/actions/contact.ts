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
 * Empêche l'injection d'en-têtes email (CRLF) via un champ contrôlé
 * par l'utilisateur (ex: "name" injecté dans le subject).
 */
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").slice(0, 200);
}

/**
 * Server Action appelée par le formulaire de contact (via useActionState).
 * Signature (prevState, formData) => imposée par React 19 pour les actions
 * branchées sur un <form action={...}>.
 */
export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot anti-spam : champ caché visuellement, seuls les bots le remplissent.
  // Le champ correspondant sera ajouté au formulaire à l'étape suivante (name="company").
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    // On répond "succès" sans rien envoyer, pour ne pas indiquer au bot qu'il a été repéré.
    return { success: true, message: "Message envoyé !" };
  }

  if (!name || !email || !message) {
    return { success: false, message: "Merci de remplir tous les champs." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Adresse email invalide." };
  }

  if (message.length > MESSAGE_MAX_LENGTH) {
    return {
      success: false,
      message: `Message trop long (${MESSAGE_MAX_LENGTH} caractères max).`,
    };
  }

  try {
    const { error } = await resend.emails.send({
      // Domaine de test Resend : fonctionne sans vérification DNS tant que
      // "to" est l'adresse email du compte Resend (siteConfig.email).
      // Une fois un domaine vérifié sur resend.com/domains, remplacer par
      // ex. "Portfolio Zidane <contact@tondomaine.com>".
      from: "Portfolio Zidane <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `Nouveau message de ${sanitizeHeaderValue(name)}`,
      text: `De : ${name} (${email})\n\n${message}`,
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
      message: "Message envoyé, merci ! Je réponds rapidement.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Une erreur est survenue. Réessaie un peu plus tard.",
    };
  }
}
