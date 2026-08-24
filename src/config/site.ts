/**
 * Source unique de vérité pour toutes les informations personnelles
 * affichées sur le site.
 */

export const siteConfig = {
  name: "Zidane Haffar",

  role: "Développeur Full Stack | Informatique de Gestion – E-Business",

  location: "Korba, Nabeul",

  email: "haffarzidane@gmail.com",

  phone: "52 827 067",

  /*
   * Le CV ne précise pas si ton numéro est aussi ton WhatsApp.
   * On le complétera seulement si tu me le confirmes.
   */
  whatsapp: "TODO",

  /*
   * GitHub et LinkedIn ne figurent pas dans ton CV.
   * Ne mettons donc pas de faux liens.
   */
  social: {
    github: "TODO",
    linkedin: "TODO",
  },

  cvPath: "/cv/cv-zidane.pdf",
} as const;
