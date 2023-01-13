import React from "react";
import "animate.css";
import HarleyProfilePhoto from "./images/harleyProfile.png";
import LinkedinLogo from "./images/linkedin.svg";
import {
  NameText,
  HomepageRoot,
  ProfilePhoto,
  TitleWrapper,
  RoleText,
} from "./styles";

function App() {
  return (
    <HomepageRoot>
      <div class="animate__bounceIn">
        <ProfilePhoto src={HarleyProfilePhoto} alt="ProfilePhoto" />
      </div>
      <div class="animate__bounceIn">
        <TitleWrapper>
          <NameText>Harley Welsby</NameText>
          <RoleText>Full-Stack Software Developer</RoleText>
        </TitleWrapper>
        <img src={LinkedinLogo} alt="linkedin" width="150rem;" />
      </div>
    </HomepageRoot>
  );
}

export default App;
