import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Game.css";
import Card from "../Card";
const WHITE_HEX = 16777215;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ number: 1 }, { number: 2 }],
    };
  }

  render() {
    return (
      <div className="gameStyle">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Game;
