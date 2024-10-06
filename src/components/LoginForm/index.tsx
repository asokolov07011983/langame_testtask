'use client';
import { Form } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { loginFields } from "@/constants/loginFields";
import { PrimaryBtn } from "@/components/CustomBtn";
import Link from "next/link";
import { RegisterBox } from "@/components/RegisterBox";
import { AppBox } from "@/components/AppBox";

import styles from "./index.module.scss"
export const LoginForm = () => {
    return (
        <Form
            className={styles.formWrap}
        >
            {
                loginFields.map((elem, ind) => <CustomInput key={ind} {...elem} />)
            }
            <Link className={styles.link} href={"/"}>Забыли пароль?</Link>
            <PrimaryBtn>
                ВОЙТИ
            </PrimaryBtn>
            <RegisterBox />
            <AppBox />
        </Form>
    )
};