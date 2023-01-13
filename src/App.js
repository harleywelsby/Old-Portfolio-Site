import "animate.css";
import HarleyProfilePhoto from "./images/harleyProfile.png";
import { NameText, PageRoot, ProfilePhoto } from "./styles";

function App() {
  return (
    <PageRoot>
      <div class="animate__bounceIn">
        <ProfilePhoto src={HarleyProfilePhoto} alt="ProfilePhoto" />
      </div>
      <div class="animate__bounceIn">
        <NameText>Harley Welsby</NameText>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </PageRoot>
  );
}

export default App;
