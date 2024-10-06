import { Input, Form } from "antd";
import Image from "next/image";

import styles from "./index.module.scss";

export const CustomInput = ({ name, message, required, type, placeholder, src, alt }) => {
    return (
        <div className={styles.inputWrap}>
            <Form.Item
                name={name}
                className={styles.inputInner}
                required={required}
                rules={[{
                    required: required,
                    message: message
                }]}
            >
                <Input
                    type={type}
                    placeholder={placeholder}
                    prefix={<Image
                        src={src}
                        alt={alt}
                        width={24}
                        height={24}
                    />}
                />
            </Form.Item>
        </div>
    )
}