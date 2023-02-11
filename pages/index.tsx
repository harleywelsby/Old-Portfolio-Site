import { CaptchaContext } from "@/components/CaptchaContext";
import HtmlHead from "@/components/HtmlHead";
import Router from "next/router";
import React, { useContext, useEffect } from "react";

function Home() {
  const { isUserHuman } = useContext(CaptchaContext);

  useEffect(() => {
    // Route to the correct page
    if (!isUserHuman) {
      Router.replace(
        {
          pathname: "/captcha",
        },
        undefined,
        { shallow: true }
      );
    } else {
      Router.replace(
        {
          pathname: "/home",
        },
        undefined,
        { shallow: true }
      );
    }
  }, [isUserHuman]);

  return <HtmlHead />;
}

export default Home;
