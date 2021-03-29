import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from "./store/index";
import ButtonGroup from "./GroupButton";
import './App.css';

class App extends Component {
  render() {
    console.log('object', store.getState())
    return [
      <HelloWorld
        key={1} tech={store.getState().tech} />,
      <ButtonGroup
        key={2} technologies={["React", "Elm", "React-redux"]}
      />];
  }
};

export default App;
