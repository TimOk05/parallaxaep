import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Параллакс — монтаж и личный бренд",
  description:
    "Временная неофициальная демонстрационная концепция для Параллакса.",
  icons: {
    icon: "/concept/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
