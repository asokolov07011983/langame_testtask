"use client";
import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";
import {useScreenWidth} from "@/hooks/useScreenWidth";

import "./globals.css";
import {getRealSize} from "@/utils/getRealSize";
export default function Home() {
  const screenWidth = useScreenWidth();
  return (
    <div className="contentWrap">
        <Image
            src="/logotypelogin.png"
            alt="logo"
            className="logo"
            width={getRealSize(125, screenWidth)}
            height={getRealSize(75, screenWidth)}
        />
        <LoginForm />
    </div>
  );
}
