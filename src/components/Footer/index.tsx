"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerMenu } from "@/constants/footerMenu";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { getRealSize } from "@/utils/getRealSize";

import styles from "./index.module.scss";

export const Footer: FC = () => {
    const screenWidth = useScreenWidth();
    return (
        <div className={styles.footerWrap}>
            <ul>
                {
                    footerMenu.map(({label, path}) => <li><Link key={label} href={path}>{label}</Link></li>)
                }
            </ul>
            <Image
                src="/LGSoftware.svg"
                alt="logo"
                width={getRealSize(256, screenWidth)}
                height={getRealSize(24, screenWidth)}
            />
        </div>
    )
};