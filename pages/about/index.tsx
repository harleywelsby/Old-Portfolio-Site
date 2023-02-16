import HtmlHead from "@/components/HtmlHead";
import InfoBox from "@/components/InfoBox";
import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import React from "react";

function About() {
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

export default About;
