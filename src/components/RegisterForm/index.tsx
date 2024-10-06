'use client';
import {Form, Button, Input} from "antd";
import {CustomInput} from "@/components/CustomInput";
import {MobileOutlined} from "@ant-design/icons";

export const RegisterForm = () => {
    return (
        <Form
            style={{
                width: '339px'
            }}
        >
            <CustomInput />

            <Button htmlType="submit" type="primary">
                Click
            </Button>
        </Form>
    )
}