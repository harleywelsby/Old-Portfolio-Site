import React, { useEffect, useState } from "react";
import "animate.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faBook } from "@fortawesome/free-solid-svg-icons";
import {
  NameText,
  HomepageRoot,
  ContentWrapper,
  RoleText,
  LinkLogoSectionWrapper,
} from "../styles/styledComponents";
import LinkLogo from "@/components/LinkLogo";
import Image from "next/image";

function Homepage() {
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
  const AboutUrl = "/about";

  return (
    <HomepageRoot className={isUserOnMobile ? "mobileHomepageRoot" : ""}>
      <ContentWrapper>
        {/* Photo */}
        <div className="animate__bounceIn">
          <Image
            className={`profilePhoto ${
              isUserOnMobile ? "mobileProfilePhoto" : "webProfilePhoto"
            }`}
            src="/harleyProfile.jpg"
            alt="ProfilePhoto"
            width={480}
            height={630}
            priority={true}
          />
        </div>
      </ContentWrapper>
      <ContentWrapper>
        {/* Name and Title */}
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
        {/* Link logos */}
        <div className="animate__bounceIn">
          <LinkLogoSectionWrapper>
            <LinkLogo
              iconName={faLinkedin}
              link={LinkedinUrl}
              label="LinkedIn"
              newTab
              isUserOnMobile={isUserOnMobile}
            />
            <LinkLogo
              iconName={faGithub}
              link={GithubUrl}
              label="GitHub"
              newTab
              isUserOnMobile={isUserOnMobile}
            />
            <LinkLogo
              iconName={faBook}
              link={AboutUrl}
              label="About Me"
              isUserOnMobile={isUserOnMobile}
            />
          </LinkLogoSectionWrapper>
        </div>
      </ContentWrapper>
    </HomepageRoot>
  );
}

export default Homepage;
