import React, { useContext, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import { CaptchaContainer, CaptchaText } from "@/styles/styledComponents";
import Router from "next/router";
import { CaptchaContext } from "@/components/CaptchaContext";

function Captcha() {
  const captchaRef = useRef<any>(null);
  const { setIsUserHuman } = useContext(CaptchaContext);

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
      Router.push(
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
