import HarleyProfilePhoto from "./images/harleyProfile.png";
import { PageRoot, ProfilePhoto } from "./styles";

function App() {
  return (
    <PageRoot>
      <ProfilePhoto src={HarleyProfilePhoto} alt="ProfilePhoto" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </PageRoot>
  );
}

export default App;
