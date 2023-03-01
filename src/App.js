import "./assets/style.css";
import $ from "jquery";
import Header from "./component/Header";
import useExternalScripts from "./hooks/useExternalscripts";

function App() {
  useExternalScripts("./assets/main.js");
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div id="pl" className="pl">
        <p>Please Wait</p>
      </div>
      <div className="dr"></div>
      <div id="bg-mon"></div>
      <canvas id="canv"></canvas>
      <div>
        <h1>Sampurasun</h1>
      </div>
    </div>
  );
}

$(document).ready(function ($) {
  $("#pl").fadeOut();
});

export default App;
