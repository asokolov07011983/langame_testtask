import React from "react";
import { RegisterForm } from "@/components/RegisterForm";
import styles from "./index.module.scss"
import {Tabs} from "@/components/Tabs";
import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Лангейм Программные Решения",
    description: "Страница регистрации",
};
export default function Register() {
    return (
        <div className={styles.contentWrap}>
            <h1>Регистрация</h1>
            <Tabs />
            <RegisterForm />
            <Link href="/" className={styles.homeLink}>
                <div className={styles.homeLinkContent}>
                    <Image
                        src="/arrow_back.svg"
                        alt="arrow"
                        width={19}
                        height={15}
                    />
                    <p>Вернуться на главную</p>
                </div>
            </Link>
        </div>
    );
};