import React from "react";
import "animate.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  NameText,
  HomepageRoot,
  ProfilePhoto,
  ContentWrapper,
  RoleText,
  LinkLogoSectionWrapper,
  LinkLogoWrapper,
} from "./styles";

function App() {
  // Check if user is on mobile
  // https://stackoverflow.com/questions/15365352/easiest-way-to-determine-if-user-is-on-mobile-device
  const isUserOnMobile =
    !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;

  return (
    <HomepageRoot flexDirection={isUserOnMobile ? "column-reverse" : "row"}>
      <div class="animate__bounceIn">
        <ProfilePhoto src="/harleyProfile.png" alt="ProfilePhoto" />
      </div>
      <ContentWrapper>
        <div class="animate__bounceIn">
          <ContentWrapper>
            <NameText fontSize={isUserOnMobile ? "50px" : "90px"}>
              Harley Welsby
            </NameText>
            <RoleText>Full-Stack Software Developer</RoleText>
          </ContentWrapper>
        </div>
        <div class="animate__bounceIn">
          <LinkLogoSectionWrapper>
            {LinkLogo(faLinkedin, "https://www.linkedin.com/in/harleywelsby/")}
            {LinkLogo(faGithub, "https://github.com/harleywelsby")}
            {LinkLogo(
              faCode,
              "https://github.com/harleywelsby/harleywelsby-dev"
            )}
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
}

function LinkLogo(iconName, link) {
  return (
    <LinkLogoWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <LinkLogoWrapper>
          <FontAwesomeIcon
            icon={iconName}
            size="5x"
            className="linkLogo"
            color="white"
          />
        </LinkLogoWrapper>
      </a>
    </LinkLogoWrapper>
  );
}

export default App;
