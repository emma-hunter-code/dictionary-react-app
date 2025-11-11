import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center m-1">
          <small>Coded by Emma Hunter and hosted on Netlify</small>
        </footer>
      </div>
    </div>
  );
}
