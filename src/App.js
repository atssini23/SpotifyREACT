import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./styles.scss";

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">music controllers</div>
    </div>
  );
};
export default App;
