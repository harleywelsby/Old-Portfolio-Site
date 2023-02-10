import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import { CaptchaContainer, CaptchaText } from "@/styles/styledComponents";
import axios from "axios";
import cors from "cors";

function Captcha() {
  const captchaRef = useRef<any>(null);

  const corsOptions = {
    origin: "https://harleywelsby.dev",
    optionsSuccessStatus: 200,
  };

  const onChange = async (value: any) => {
    const token = value;

    // Don't do anything if the captcha hasn't been filled
    if (!token) {
      console.log("bruh");
      return;
    }

    await axios
      .post(`https://www.google.com/recaptcha/api/siteverify`, {
        secret: process.env.SECRET_KEY,
        token,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
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
