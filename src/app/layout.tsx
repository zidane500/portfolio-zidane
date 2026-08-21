import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zidane — Creative Developer",
  description:
    "Portfolio de développeur créatif spécialisé dans les expériences web modernes et interactives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
