import HtmlHead from "@/components/HtmlHead";
import { MobileUserContext } from "@/components/MobileUserContext";
import NameAndRole from "@/components/NameAndRole";
import {
  ContentWrapper,
  NameText,
  PageWrapper,
  RoleText,
} from "@/styles/styledComponents";
import React, { useContext } from "react";

// TODO: Currently unused but good to keep around for future changes/testing
function Home() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <HtmlHead />
      <PageWrapper className={isUserOnMobile ? "mobilePageWrapper" : ""}>
        <NameAndRole />
      </PageWrapper>
    </>
  );
}

export default Home;
