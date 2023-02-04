import React, { useEffect, useState } from "react";
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

const Homepage: React.FC = () => {
  // Whether user is on mobile. Stored in a useState
  // as the window isn't rendered immediately.
  // https://stackoverflow.com/questions/63536562/reference-errornavigator-not-defined-with-nextjs
  const [isUserOnMobile, setIsUserOnMobile] = useState<
    RegExpMatchArray | boolean
  >(false);

  // Get whether a user is on mobile, once window is defined
  useEffect(() => {
    setIsUserOnMobile(
      window.navigator.userAgent.match(/iphone|android|blackberry/gi) || false
    );
  }, []);

  // Links for link logos
  const LinkedinUrl = "https://www.linkedin.com/in/harleywelsby/";
  const GithubUrl = "https://github.com/harleywelsby";
  const CodeUrl = "https://github.com/harleywelsby/harleywelsby-dev";

  return (
    <HomepageRoot className={isUserOnMobile ? "mobileHomepageRoot" : ""}>
      <ContentWrapper>
        <div className="animate__bounceIn">
          {/* TODO: Should be converted to a Next.js Image */}
          <ProfilePhoto
            className={
              isUserOnMobile ? "mobileProfilePicture" : "webProfilePicture"
            }
            src="/harleyProfile.png"
            alt="ProfilePhoto"
          />
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="animate__bounceIn">
          <ContentWrapper>
            <NameText
              className={isUserOnMobile ? "mobileNameText" : "webNameText"}
            >
              Harley Welsby
            </NameText>
            <RoleText>Full-Stack Software Developer</RoleText>
          </ContentWrapper>
        </div>
        <div className="animate__bounceIn">
          <LinkLogoSectionWrapper>
            {LinkLogo(faLinkedin, LinkedinUrl, isUserOnMobile)}
            {LinkLogo(faGithub, GithubUrl, isUserOnMobile)}
            {LinkLogo(faCode, CodeUrl, isUserOnMobile)}
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
};

const LinkLogo = (
  iconName: IconDefinition,
  link: string,
  isUserOnMobile: boolean | RegExpMatchArray
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
