import ProfilePhoto from "./images/HarleyProfile.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfilePhoto} className="profilePhoto" alt="ProfilePhoto" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
