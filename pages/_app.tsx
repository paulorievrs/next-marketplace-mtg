import "../styles/globals.css";
import type { AppProps } from "next/app";
import Menu from "../components/Menu/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans layout`}>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
