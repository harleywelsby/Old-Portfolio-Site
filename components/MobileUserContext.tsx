import { createContext, useEffect, useState } from "react";

const MobileUserContextDefaultValue = {
  isUserOnMobile: false,
  setIsUserOnMobile: (state: boolean) => {},
};

// Handles sharing of the isUserHuman state between pages, to verify captcha
export const MobileUserContext = createContext(MobileUserContextDefaultValue);
export const MobileUserContextProvider = ({ children }: any) => {
  // Whether user is on mobile. Stored in a useState
  // as the window isn't rendered immediately.
  // https://stackoverflow.com/questions/63536562/reference-errornavigator-not-defined-with-nextjs
  const [isUserOnMobile, setIsUserOnMobile] = useState<boolean>(false);

  // Get whether a user is on mobile, once window is defined
  useEffect(() => {
    setIsUserOnMobile(
      !!window.navigator.userAgent.match(/iphone|android|blackberry/gi) || false
    );
  }, []);

  return (
    <MobileUserContext.Provider value={{ isUserOnMobile, setIsUserOnMobile }}>
      {children}
    </MobileUserContext.Provider>
  );
};
