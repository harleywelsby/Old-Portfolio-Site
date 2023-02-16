import HtmlHead from "@/components/HtmlHead";
import InfoBox from "@/components/InfoBox";
import { MobileUserContext } from "@/components/MobileUserContext";
import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import React, { useContext } from "react";

// TODO: Currently unused but good to keep around for future changes/testing
function Home() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <HtmlHead />
      <PageWrapper className="aboutPageWrapper">
        <NameAndRole />
        <InfoBox />
      </PageWrapper>
    </>
  );
}

export default Home;
