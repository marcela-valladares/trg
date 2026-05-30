import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcela-valladares.vercel.app"),
  title: "Marcela Valladares | Terapia TRG para maes atipicas",
  description:
    "Acolhimento emocional para maes atipicas atraves da Terapia TRG. Atendimento online com Marcela Valladares.",
  keywords: [
    "Terapia TRG",
    "maes atipicas",
    "Marcela Valladares",
    "acolhimento emocional",
    "TEA",
    "terapia online"
  ],
  openGraph: {
    title: "Marcela Valladares | Terapia TRG para maes atipicas",
    description:
      "Cuidado emocional para quem cuida. Atendimento online com acolhimento, seguranca e profundidade.",
    images: ["/images/marcela-green.png"],
    type: "website",
    locale: "pt_BR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
