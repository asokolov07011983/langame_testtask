import { FC } from "react";
import Link from "next/link";

import styles from "./index.module.scss";
export const RegisterBox: FC = () => {
    return (
        <div className={styles.registerBoxWrap}>
            <p>Если у вас ещё нет аккаунта?</p>
            <Link href={"/register"}>Зарегистрируйтесь</Link>
        </div>
    )
};