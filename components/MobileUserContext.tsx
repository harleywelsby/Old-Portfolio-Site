import { createContext, useEffect, useState } from "react";

const MobileUserContextDefaultValue = {
  isUserOnMobile: false,
  setIsUserOnMobile: (state: boolean) => {},
};

// Handles sharing of whether a user is on mobile, to switch between web and mobile view.
export const MobileUserContext = createContext(MobileUserContextDefaultValue);
export const MobileUserContextProvider = ({ children }: any) => {
  const [isUserOnMobile, setIsUserOnMobile] = useState<boolean>(false);

  // Get whether a user is on mobile. Must be done in a useEffect as window isn't defined immediately.
  // https://stackoverflow.com/questions/63536562/reference-errornavigator-not-defined-with-nextjs
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
