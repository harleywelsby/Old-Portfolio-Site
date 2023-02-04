import React, { useEffect, useState } from "react";
import "animate.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  NameText,
  HomepageRoot,
  ProfilePhoto,
  ContentWrapper,
  RoleText,
  LinkLogoSectionWrapper,
} from "../styles/styledComponents";
import LinkLogo from "@/components/LinkLogo";

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
            <LinkLogo
              iconName={faLinkedin}
              link={LinkedinUrl}
              isUserOnMobile={isUserOnMobile}
            />
            <LinkLogo
              iconName={faGithub}
              link={GithubUrl}
              isUserOnMobile={isUserOnMobile}
            />
            <LinkLogo
              iconName={faCode}
              link={CodeUrl}
              isUserOnMobile={isUserOnMobile}
            />
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
};

export default Homepage;
