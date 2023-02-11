import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import { CaptchaContainer, CaptchaText } from "@/styles/styledComponents";
import Router from "next/router";

function Captcha() {
  const captchaRef = useRef<any>(null);

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

      Router.push(
        {
          pathname: "/home",
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      /* TODO: Proper error handling */
    }
  };

  return (
    <CaptchaContainer>
      <CaptchaText>
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
