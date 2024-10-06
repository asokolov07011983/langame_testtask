import { FC } from "react";
import { Button } from "antd";

import styles from "./index.module.scss"

export const PrimaryBtn: FC = ({ children }) => {
    return (
        <div className={styles.btnWrap}>
            <Button
                htmlType="submit"
                block
            >
                { children }
            </Button>
        </div>
    )
}