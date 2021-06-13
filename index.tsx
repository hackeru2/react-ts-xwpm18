import React, { Component } from "react";
import { render } from "react-dom";
import BingMap from "./BingMap";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  return (
    <BingMap
      mapOptions={{
        center: [47.60357, -122.32945],
        credentials:
          "AjwUEXFZA8SMyy8CaJj59vJKVDoWohNXVFz_uGyHlT8N40Jgr-zrhvcxbTNRyDqn"
      }}
    />
  );
}

render(<App />, document.getElementById("root"));
