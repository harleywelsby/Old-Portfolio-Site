import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CaptchaContextProvider } from "@/components/CaptchaContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CaptchaContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </CaptchaContextProvider>
  );
}
