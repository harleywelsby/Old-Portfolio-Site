import React, { useContext } from "react";
import "animate.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  HomePageWrapper,
  ContentWrapper,
  LinkLogoSectionWrapper,
  NameText,
  RoleText,
} from "../styles/styledComponents";
import LinkLogo from "@/components/LinkLogo";
import Image from "next/image";
import { MobileUserContext } from "@/components/MobileUserContext";
import {
  CodeLabel,
  CodeUrl,
  GithubLabel,
  GithubUrl,
  LinkedinLabel,
  LinkedinUrl,
} from "@/components/constants/constants";

function Homepage() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <title>Harley Welsby | Home</title>
      <HomePageWrapper isMobile={isUserOnMobile}>
        <ContentWrapper>
          <div className="animate__bounceIn">
            <Image
              /* Styles are different here as styled components 
              can't build on top of the next/Image component */
              className={`profilePhoto ${
                isUserOnMobile && "mobileProfilePhoto"
              }`}
              src="/harleyProfile.jpg"
              alt="ProfilePhoto"
              width={474}
              height={600}
              priority={true}
              loading="eager"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <div className="animate__bounceIn">
            <ContentWrapper>
              <NameText isMobile={isUserOnMobile}>Harley Welsby</NameText>
              <RoleText>Full-Stack Software Developer</RoleText>
            </ContentWrapper>
          </div>
          <div className="animate__bounceIn">
            <LinkLogoSectionWrapper>
              <LinkLogo
                iconName={faLinkedin}
                link={LinkedinUrl}
                label={LinkedinLabel}
                newTab
                size={isUserOnMobile ? "4x" : "5x"}
                padding
              />
              <LinkLogo
                iconName={faGithub}
                link={GithubUrl}
                label={GithubLabel}
                newTab
                size={isUserOnMobile ? "4x" : "5x"}
                padding
              />
              <LinkLogo
                iconName={faLaptopCode}
                link={CodeUrl}
                label={CodeLabel}
                size={isUserOnMobile ? "4x" : "5x"}
                padding
              />
            </LinkLogoSectionWrapper>
          </div>
        </ContentWrapper>
      </HomePageWrapper>
    </>
  );
}

export default Homepage;
