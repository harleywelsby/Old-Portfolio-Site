import React, { useContext, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import { CaptchaContainer, CaptchaText } from "@/styles/styledComponents";
import Router from "next/router";
import { CaptchaContext } from "@/components/CaptchaContext";

function Captcha() {
  const captchaRef = useRef<any>(null);
  const { setIsUserHuman } = useContext(CaptchaContext);

  // Whether user is on mobile. Stored in a useState
  // as the window isn't rendered immediately.
  // https://stackoverflow.com/questions/63536562/reference-errornavigator-not-defined-with-nextjs
  const [isUserOnMobile, setIsUserOnMobile] = useState<
    RegExpMatchArray | boolean
  >(false);

  // Get whether a user is on mobile, once window is defined
  useEffect(() => {
    setIsUserOnMobile(
      window.navigator.userAgent.match(/iphone|android|blackberry/gi) || false
    );
  }, []);

  const onChange = async (captchaResult: any) => {
    if (!captchaResult) {
      return;
    }

    try {
      // Connect to the verifyCaptcha API
      const response = await fetch("/api/verifyCaptcha", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaResult }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(await error.message);
      }

      // Go to the homepage
      setIsUserHuman(true);
      Router.replace(
        {
          pathname: "/home",
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      setIsUserHuman(false);
    }
  };

  return (
    <CaptchaContainer>
      <CaptchaText
        className={isUserOnMobile ? "mobileCaptchaText" : "webCaptchaText"}
      >
        {"Hi! Please confirm you're human before continuing"}
      </CaptchaText>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey={process.env.SITE_KEY!}
        onChange={onChange}
      />
    </CaptchaContainer>
  );
}

export default Captcha;
