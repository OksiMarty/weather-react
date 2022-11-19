import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sumy" />
        <footer>
          Coded by{" "}
          <a href="https://github.com/OksiMarty/weather-react" target="true">
            Oksy Marty
          </a>
        </footer>
      </div>
    </div>
  );
}
