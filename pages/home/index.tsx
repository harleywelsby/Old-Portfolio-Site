import { CaptchaContext } from "@/components/CaptchaContext";
import HtmlHead from "@/components/HtmlHead";
import Router from "next/router";
import React, { useContext } from "react";
import Homepage from "./Homepage";

function Home() {
  const { isUserHuman } = useContext(CaptchaContext);

  /*if (!isUserHuman) {
    Router.push(
      {
        pathname: "/captcha",
      },
      undefined,
      { shallow: true }
    );

    return null;
  }*/

  return (
    <>
      <HtmlHead />
      <Homepage />
    </>
  );
}

export default Home;
