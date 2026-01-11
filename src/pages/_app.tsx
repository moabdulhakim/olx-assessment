import { useTranslation } from "@/hooks/useTranslation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { useEffect } from "react";


const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  const {dir, locale} = useTranslation();

  useEffect(()=>{
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale])

  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
