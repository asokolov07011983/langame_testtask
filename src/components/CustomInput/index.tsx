'use client';
import { Input, Form } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import styles from "@/styles/customInput.module.scss";

export const CustomInput = () => {
    console.log('styles', styles)
    return (
        <div className={styles.inputWrap}>
            <Form.Item
                name="telephone"
                // label={"1111111111111"}
                required
                rules={[{
                    required: true,
                    message: 'Пожалуста заполните поле'
                }]}
            >
                <Input
                    type='tel'
                    placeholder="Введите номер телефона"
                    prefix={<MobileOutlined />}
                />
            </Form.Item>
        </div>
    )
}