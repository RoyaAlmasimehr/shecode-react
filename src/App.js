import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Tehran" />
      </header>
      <footer>
        This is project was coded by Roya Almasimehr and is{" "}
        <a href="https://github.com/RoyaAlmasimehr/shecode-react">
          open-sourced on GitHub{" "}
        </a>
        and
        <a href="https://eloquent-dragon-479dc5.netlify.app//">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
