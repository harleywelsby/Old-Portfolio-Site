import { createContext } from "react";

interface CaptchaContextProps {
  isUserHuman: boolean;
  setIsUserHuman: React.Dispatch<React.SetStateAction<boolean>>;
}

// Handles sharing of the isUserHuman state between pages, to verify captcha
const CaptchaContext = createContext<CaptchaContextProps | null>(null);

export default CaptchaContext;
