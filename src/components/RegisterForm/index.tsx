'use client';
import { Form } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { loginFields } from "@/constants/loginFields";
import { PrimaryBtn } from "@/components/CustomBtn";
import Link from "next/link";
import { RegisterBox } from "@/components/RegisterBox";
import { AppBox } from "@/components/AppBox";

import styles from "./index.module.scss"
import {registerFields} from "@/constants/registerFields";
export const RegisterForm = () => {
    return (
        <Form
            className={styles.formWrap}
        >
            {
                registerFields.map((elem, ind) => <CustomInput key={ind} {...elem} />)
            }
            <PrimaryBtn>
                Зарегистрироваться
            </PrimaryBtn>
        </Form>
    )
};