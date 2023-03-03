import { ContentWrapper, NameText, RoleText } from "@/styles/styledComponents";
import React, { useContext } from "react";
import { MobileUserContext } from "./context/MobileUserContext";

// Box containing name and role as a title and subtitle, for page headers.
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
