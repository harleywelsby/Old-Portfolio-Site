import HtmlHead from "@/components/HtmlHead";
import InfoBox from "@/components/InfoBox";
import NameAndRole from "@/components/NameAndRole";
import { PageWrapper } from "@/styles/styledComponents";
import Router from "next/router";
import React, { useEffect } from "react";

// TODO: Work in progress
function About() {
  useEffect(() => {
    // Temporary re-route while page is worked on
    Router.replace(
      {
        pathname: "/",
      },
      undefined,
      { shallow: true }
    );
  }, []);

  return (
    <>
      {/*
      <HtmlHead />
      <PageWrapper className="aboutPageWrapper">
        <NameAndRole />
        <InfoBox />
      </PageWrapper>
      */}
    </>
  );
}

export default About;
