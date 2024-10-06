'use client';
import { Form, Button } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { registerFields } from "@/constants/registerFields";

export const RegisterForm = () => {
    return (
        <Form
            style={{
                width: '339px'
            }}
        >
            {
                registerFields.map((elem) => <CustomInput {...elem} />)
            }
            <Button htmlType="submit" type="primary">
                Click
            </Button>
        </Form>
    )
}