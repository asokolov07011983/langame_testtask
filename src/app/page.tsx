import { LoginForm } from "@/components/LoginForm";
import { Logo } from "@/components/Logo";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Лангейм Программные Решения",
    description: "Страница ввода логина",
};
export default function Home() {

  return (
    <div className="contentWrap">
        <Logo />
        <LoginForm />
    </div>
  );
}
