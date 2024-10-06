'use client';
import { FC } from "react";
import { Form } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { PrimaryBtn } from "@/components/CustomBtn";
import { registerFields } from "@/constants/registerFields";

import styles from "./index.module.scss"

export const RegisterForm: FC = () => {
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