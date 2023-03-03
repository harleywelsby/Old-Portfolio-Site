import React, { useContext } from "react";
import "animate.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
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
import {
  CodeLabel,
  CodeUrl,
  GithubLabel,
  GithubUrl,
  LinkedinLabel,
  LinkedinUrl,
} from "@/components/constants";

function Homepage() {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <>
      <HtmlHead />
      <PageWrapper className={`${isUserOnMobile && "mobilePageWrapper"}`}>
        <ContentWrapper>
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
              loading="eager"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <div className="animate__bounceIn">
            <NameAndRole />
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
      </PageWrapper>
    </>
  );
}

export default Homepage;
