import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CaptchaContext from "@/components/CaptchaContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isUserHuman, setIsUserHuman] = useState<boolean>(false);

  return (
    <CaptchaContext.Provider value={{ isUserHuman, setIsUserHuman }}>
      <Component {...pageProps} />
      <Analytics />
    </CaptchaContext.Provider>
  );
}
