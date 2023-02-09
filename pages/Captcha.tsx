import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import { CaptchaContainer, CaptchaText } from "@/styles/styledComponents";

interface CaptchaProps {
  setIsUserHuman: React.Dispatch<React.SetStateAction<boolean>>;
}

function Captcha({ setIsUserHuman }: CaptchaProps) {
  return (
    <CaptchaContainer>
      <CaptchaText>
        {"Hi! Please confirm you're human before continuing"}
      </CaptchaText>
      <ReCAPTCHA
        sitekey={process.env.SITE_KEY!}
        onChange={() => setIsUserHuman(true)}
      />
    </CaptchaContainer>
  );
}

export default Captcha;
