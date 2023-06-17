import "@/styles/globals.css";
import "@/styles/mobile.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { MobileUserContextProvider } from "@/components/context/MobileUserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileUserContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </MobileUserContextProvider>
  );
}
