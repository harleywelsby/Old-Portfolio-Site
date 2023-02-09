import HtmlHead from "@/components/HtmlHead";
import React, { useState } from "react";
import Homepage from "./Homepage";
import Captcha from "./Captcha";

function Home() {
  const [isUserHuman, setIsUserHuman] = useState<boolean>(false);

  return (
    <>
      <HtmlHead />
      {!isUserHuman && <Captcha setIsUserHuman={setIsUserHuman} />}
      {isUserHuman && <Homepage />}
    </>
  );
}

export default Home;
