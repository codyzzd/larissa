import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const AeonikTRIAL = localFont({
  src: [
    {
      path: "../public/fonts/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Larissa Godomski - Advogada Especializada em Direito Previdenciário",
  description:
    "Seja bem-vindo(a) ao escritório de advocacia de Larissa Godomski, dedicado a oferecer suporte jurídico especializado em direito previdenciário. Com anos de experiência e uma paixão inabalável pela justiça social, estamos aqui para proporcionar soluções eficazes e personalizadas para suas questões previdenciárias. Entre em contato conosco para uma consulta inicial e permita-nos guiar você pelos intricados caminhos do direito previdenciário, seja para aposentadoria por idade, invalidez, auxílio-doença, LOAS para deficientes e idosos, ou salário-maternidade. Atendimento presencial e online disponível para sua comodidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
