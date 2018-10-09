import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked it!");
  }

  render() {
    return (
      <div>
        <h1>
          <u>Adopt Me!</u>
        </h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Wayne" animal="cat" breed="tortle" />
        <Pet name="Pepper" animal="horse" breed="greymane" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
