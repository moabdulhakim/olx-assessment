import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
