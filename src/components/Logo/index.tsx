"use client";
import Image from "next/image";
import { getRealSize } from "@/utils/getRealSize";
import { useScreenWidth } from "@/hooks/useScreenWidth";

import styles from "./index.module.scss"
export const Logo = () => {
    const screenWidth = useScreenWidth();
    return (
        <Image
            src="/logotypelogin.png"
            alt="logo"
            className={styles.logo}
            width={getRealSize(125, screenWidth)}
            height={getRealSize(75, screenWidth)}
        />)
};