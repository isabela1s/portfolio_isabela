import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  icons: {
    icon: "/window.svg", // ou .png, .svg, etc.
  },
  title: "Isabela | Portfólio",
  description: "Página Principal do Portfólio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}>
      <nav>
      <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
