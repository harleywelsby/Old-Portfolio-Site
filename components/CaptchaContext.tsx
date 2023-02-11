import { createContext, useState } from "react";

const CaptchaContextDefaultValue = {
  isUserHuman: false,
  setIsUserHuman: (state: boolean) => {},
};

// Handles sharing of the isUserHuman state between pages, to verify captcha
export const CaptchaContext = createContext(CaptchaContextDefaultValue);
export const CaptchaContextProvider = ({ children }: any) => {
  const [isUserHuman, setIsUserHuman] = useState(false);

  return (
    <CaptchaContext.Provider value={{ isUserHuman, setIsUserHuman }}>
      {children}
    </CaptchaContext.Provider>
  );
};
