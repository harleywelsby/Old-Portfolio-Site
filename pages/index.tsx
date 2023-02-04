import React from "react";
import "animate.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
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
import { CodeUrl, GithubUrl, LinkedinUrl, Subtitle, Title } from "./const";

function Home() {
  // Check if user is on mobile
  // https://stackoverflow.com/questions/15365352/easiest-way-to-determine-if-user-is-on-mobile-device
  const isUserOnMobile =
    !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;

  return (
    <HomepageRoot flexDirection={isUserOnMobile ? "column-reverse" : "row"}>
      <div className="animate__bounceIn">
        <ProfilePhoto
          src="/harleyProfile.png"
          alt="ProfilePhoto"
          imageWidth={isUserOnMobile ? "16rem" : "30rem"}
          marginRight={isUserOnMobile ? "0rem" : "8rem"}
        />
      </div>
      <ContentWrapper>
        <div className="animate__bounceIn">
          <ContentWrapper>
            <NameText fontSize={isUserOnMobile ? "50px" : "90px"}>
              {Title}
            </NameText>
            <RoleText>{Subtitle}</RoleText>
          </ContentWrapper>
        </div>
        <div className="animate__bounceIn">
          <LinkLogoSectionWrapper>
            {LinkLogo(faLinkedin, LinkedinUrl)}
            {LinkLogo(faGithub, GithubUrl)}
            {LinkLogo(faCode, CodeUrl)}
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
}

function LinkLogo(iconName: IconDefinition, link: string) {
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

export default Home;
