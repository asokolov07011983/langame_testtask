import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";
import {useScreenWidth} from "@/hooks/useScreenWidth";
import { getRealSize } from "@/utils/getRealSize";
export const AppBox: FC = () => {
    const screenWidth = useScreenWidth();
    return (
        <div className={styles.appBoxWrap}>
            <p>Установите приложение.</p>
            <div className={styles.appBoxInner}>
                <Link href="https://play.google.com/store/games?hl=ru&pli=1" target="_blank">
                    <Image
                        src="/googlePlay.png"
                        alt="google play icon"
                        width={getRealSize(135, screenWidth)}
                        height={getRealSize(38, screenWidth)}
                    />
                </Link>
                <Link href="https://www.apple.com/app-store/" target="_blank">
                    <Image
                        src="/appStore.png"
                        alt="app store icon"
                        width={getRealSize(135, screenWidth)}
                        height={getRealSize(38, screenWidth)}
                    />
                </Link>
            </div>
        </div>
    )
}