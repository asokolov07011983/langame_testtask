import { Input, Form } from "antd";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

import styles from "./index.module.scss";
import {getRealSize} from "@/utils/getRealSize";
export const CustomInput = ({ name, message, required, type, placeholder, src, alt, width }) => {
    const screenWidth = useScreenWidth();
    return (
        <div
            className={styles.inputWrap}
            style={{
                width: width ? `${width}px` : "100%"
            }}
        >
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
                        width={getRealSize(24, screenWidth)}
                        height={getRealSize(24, screenWidth)}
                    />}
                />
            </Form.Item>
        </div>
    )
}