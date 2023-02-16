import React, { useContext } from "react";
import "animate.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import {
  PageWrapper,
  ContentWrapper,
  LinkLogoSectionWrapper,
} from "../styles/styledComponents";
import LinkLogo from "@/components/LinkLogo";
import Image from "next/image";
import HtmlHead from "@/components/HtmlHead";
import { MobileUserContext } from "@/components/MobileUserContext";
import NameAndRole from "@/components/NameAndRole";

function Homepage() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  // Links for link logos
  const LinkedinUrl = "https://www.linkedin.com/in/harleywelsby/";
  const GithubUrl = "https://github.com/harleywelsby";
  const AboutUrl = "/about";

  return (
    <>
      <HtmlHead />
      <PageWrapper className={isUserOnMobile ? "mobilePageWrapper" : ""}>
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
            <NameAndRole />
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
      </PageWrapper>
    </>
  );
}

export default Homepage;
