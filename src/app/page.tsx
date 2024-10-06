import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";

import "./globals.css";
export default function Home() {
  return (
    <div className="contentWrap">
        <Image
            src="/logotypelogin.png"
            alt="logo"
            className="logo"
            width={125}
            height={75}
        />
        <LoginForm />
    </div>
  );
}
