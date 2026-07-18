import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Security Foundation Kit | Base segura para APIs",
  description: siteConfig.description,
  openGraph: {
    title: "Security Foundation Kit | Base segura para APIs",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Security Foundation Kit | Base segura para APIs",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
