import { Button } from "antd";

import styles from "./index.module.scss"
export const PrimaryBtn = ({ children }) => {
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