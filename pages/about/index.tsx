import HtmlHead from "@/components/HtmlHead";
import InfoBox from "@/components/InfoBox";
import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import React from "react";

// TODO: Currently unused but good to keep around for future changes/testing
function Home() {
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
