import "animate.css";
import HarleyProfilePhoto from "./images/harleyProfile.png";
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
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </HomepageRoot>
  );
}

export default App;
