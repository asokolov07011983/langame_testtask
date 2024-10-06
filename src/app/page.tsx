import Image from "next/image";
import { RegisterForm } from "@/components/RegisterForm";

import "./globals.css";
import {Footer} from "@/components/Footer";

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
        <RegisterForm />
        <Footer />
    </div>
  );
}
