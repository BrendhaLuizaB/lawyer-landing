import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/services/providers/app-provider";
import { FONT_FAMILY, FONT_WEIGHT } from "../../tailwind.config";
import {Lato, Roboto, Libre_Baskerville} from "next/font/google";
import { defaultConfig } from "tailwind-variants";
import classNames from "classnames";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-lato",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

defaultConfig.twMergeConfig = {
  classGroups: {
    "font-family": [{ font: Object.keys(FONT_FAMILY) }],
    "font-weight": [{ font: Object.keys(FONT_WEIGHT) }],
  },
};

export const metadata: Metadata = {
  title: "Laís Pontes | Advocacia com Empatia",
  description: "Consultoria jurídica com foco nas suas necessidades. Especializada em Direito Trabalhista, Cível e do Consumidor. Vamos conversar?",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body
        className={classNames(
          "flex min-h-screen flex-col",
          roboto.variable,
          lato.variable,
          libre.variable,
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
