import type { Metadata } from "next";
import { Lato } from "next/font/google"
import Image from "next/image";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./globals.css";
import { Footer } from "@/components/Footer";

const lato = Lato({
  subsets: [],
  weight: ["300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <div
          className="main"
        >
          <Image
              src="/elementBgUp.png"
              alt="background image"
              className="elementBgUp"
              width={212}
              height={213}
          />
          <Image
              src="/elementBgDown.png"
              alt="background image"
              className="elementBgDown"
              width={212}
              height={177}
          />
          <AntdRegistry>
            { children }
          </AntdRegistry>
          <Footer />
        </div>
      </body>
    </html>
  );
}
