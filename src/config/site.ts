/**
 * Source unique de vérité pour toutes les informations personnelles
 * affichées sur le site (Sidebar, Hero, Contact, Metadata...).
 *
 * ⚠️ À COMPLÉTER : remplace les valeurs ci-dessous par tes vraies infos.
 * Plus aucune donnée de contact ne doit être écrite en dur ailleurs
 * dans les composants — importe toujours depuis ce fichier.
 */

export const siteConfig = {
  name: "Zidane",
  role: "Développeur Full Stack & Créatif Numérique",
  location: "TODO: Ville, Pays",

  email: "TODO@example.com",
  phone: "TODO", // format international, ex: "+216 XX XXX XXX"
  whatsapp: "TODO", // ex: "21600000000" (sans le +, sans espaces)

  social: {
    github: "https://github.com/TODO",
    linkedin: "https://linkedin.com/in/TODO",
  },

  cvPath: "/cv-zidane.pdf", // ⚠️ ajoute le vrai fichier dans /public
} as const;
