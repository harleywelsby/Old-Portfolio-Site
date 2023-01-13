import React from "react";
import "animate.css";
import HarleyProfilePhoto from "./images/harleyProfile.png";
import LinkedinLogo from "./images/linkedin.svg";
import GithubLogo from "./images/github.svg";
import EmailLogo from "./images/envelope-open-text-solid.svg";
import {
  NameText,
  HomepageRoot,
  ProfilePhoto,
  ContentWrapper,
  RoleText,
  LinkLogoWrapper,
  LinkLogo,
} from "./styles";

function App() {
  return (
    <HomepageRoot>
      <div class="animate__bounceIn">
        <ProfilePhoto src={HarleyProfilePhoto} alt="ProfilePhoto" />
      </div>
      <ContentWrapper>
        <div class="animate__bounceIn">
          <ContentWrapper>
            <NameText>Harley Welsby</NameText>
            <RoleText>Full-Stack Software Developer</RoleText>
          </ContentWrapper>
        </div>
        <LinkLogoWrapper>
          <LinkLogo src={LinkedinLogo} alt="linkedin" />
          <LinkLogo src={GithubLogo} alt="linkedin" />
          <LinkLogo src={EmailLogo} alt="linkedin" />
        </LinkLogoWrapper>
      </ContentWrapper>
    </HomepageRoot>
  );
}

export default App;
