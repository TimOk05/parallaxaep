import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Параллакс — монтаж и личный бренд",
  description:
    "Временная неофициальная демонстрационная концепция для Параллакса.",
  robots: { index: false, follow: false },
};

export default function Home() {
  redirect("/concept/index.html");
}
