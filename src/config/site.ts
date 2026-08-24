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
  whatsapp: "21652827067",

  /*
   * GitHub et LinkedIn ne figurent pas dans ton CV.
   * Ne mettons donc pas de faux liens.
   */
  social: {
    github: "https://github.com/zidane500",
    linkedin: "https://www.linkedin.com/in/zidane-haffar-637134403/",
  },

  cvPath: "/cv/cv-zidane.pdf",
} as const;
