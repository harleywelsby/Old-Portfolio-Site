import HtmlHead from "@/components/HtmlHead";
import React, { useState } from "react";
import Homepage from "./Homepage";
import Captcha from "./Captcha";

function Home() {
  const [isUserHuman, setIsUserHuman] = useState<boolean>(false);

  return (
    <>
      <HtmlHead />
      <Homepage />
      {/* TODO: This can be enabled when the API calls are set up for reCAPTCHA */}
      {/*!isUserHuman && <Captcha setIsUserHuman={setIsUserHuman} />*/}
      {/*isUserHuman && <Homepage />*/}
    </>
  );
}

export default Home;
