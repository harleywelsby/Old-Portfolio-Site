import React from "react";
import "animate.css";
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
} from "../../styles/styledComponents";
import { isMobile } from "react-device-detect";

const Homepage: React.FC = () => {
  // Links for link logos
  const LinkedinUrl = "https://www.linkedin.com/in/harleywelsby/";
  const GithubUrl = "https://github.com/harleywelsby";
  const CodeUrl = "https://github.com/harleywelsby/harleywelsby-dev";

  return (
    <HomepageRoot className={isMobile ? "mobileHomepageRoot" : ""}>
      <ContentWrapper>
        <div className="animate__bounceIn">
          {/* TODO: Should be converted to a Next.js Image */}
          <ProfilePhoto
            className={isMobile ? "mobileProfilePicture" : "webProfilePicture"}
            src="/harleyProfile.png"
            alt="ProfilePhoto"
          />
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="animate__bounceIn">
          <ContentWrapper>
            <NameText className={isMobile ? "mobileNameText" : "webNameText"}>
              Harley Welsby
            </NameText>
            <RoleText>Full-Stack Software Developer</RoleText>
          </ContentWrapper>
        </div>
        <div className="animate__bounceIn">
          <LinkLogoSectionWrapper>
            {LinkLogo(faLinkedin, LinkedinUrl, isMobile)}
            {LinkLogo(faGithub, GithubUrl, isMobile)}
            {LinkLogo(faCode, CodeUrl, isMobile)}
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
};

const LinkLogo = (
  iconName: IconDefinition,
  link: string,
  isUserOnMobile: boolean
) => {
  return (
    <LinkLogoWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <LinkLogoWrapper>
          <FontAwesomeIcon
            icon={iconName}
            size={isUserOnMobile ? "4x" : "5x"}
            className="linkLogo"
            color="white"
          />
        </LinkLogoWrapper>
      </a>
    </LinkLogoWrapper>
  );
};

export default Homepage;
