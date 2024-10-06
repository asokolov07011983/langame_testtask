"use client"
import { FC, useState} from "react";
import {  Space } from "antd";

import styles from "./index.module.scss"
export const Tabs: FC = () => {
    const [position, setPosition] = useState<number>(1);

    return (
        <Space>
            <button
                onClick={()=> setPosition(1)}
                className={styles.tabBtn}
                style={{
                    background: position === 1 ? "#DC0000" : "#EFEFEF",
                    color: position === 1 ? "#FFF" : "#787878"
                }}
            >
                <p>Полная</p>
            </button>
            <button
                onClick={()=> setPosition(2)}
                className={styles.tabBtn}
                style={{
                    background: position === 2 ? "#DC0000" : "#EFEFEF",
                    color: position === 2 ? "#FFF" : "#787878"
                }}
            >
                <p>Упрощённая</p>
            </button>
        </Space>
    )
}