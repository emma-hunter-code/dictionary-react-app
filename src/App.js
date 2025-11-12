import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dictionary.</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center m-1">
          <small>
            Coded by{" "}
            <a
              href="https://emmahunter.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Emma Hunter
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/emma-hunter-code/dictionary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source on github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-definitions.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
