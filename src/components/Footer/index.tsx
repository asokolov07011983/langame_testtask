import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerMenu } from "@/constants/footerMenu";

import styles from "./index.module.scss";
export const Footer: FC = () => {
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
                width={256}
                height={24}
            />
        </div>
    )
};