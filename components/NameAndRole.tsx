import { ContentWrapper, NameText, RoleText } from "@/styles/styledComponents";
import React, { useContext } from "react";
import { MobileUserContext } from "./MobileUserContext";

// Handles meta info for the site
function NameAndRole() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <ContentWrapper>
      <NameText className={isUserOnMobile ? "mobileNameText" : "webNameText"}>
        Harley Welsby
      </NameText>
      <RoleText>Full-Stack Software Developer</RoleText>
    </ContentWrapper>
  );
}

export default NameAndRole;
