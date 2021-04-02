import React, { Component } from "react";
import "./Card.css";
const WHITE_HEX = 16777215

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlipSide: false,
      randomColor: this.createRandomColor(),
    };
  }
  createRandomColor() {
    return "#" + Math.floor(Math.random() * WHITE_HEX).toString(16);
  }
  render() {
    return (
      <div>
        <div
          style={{
            background: this.state.showFlipSide ? this.state.randomColor : "blue",
          }}
          className="card"
          onClick={() => {
            this.setState({
              showFlipSide: !this.state.showFlipSide,
            });
          }}
        ></div>
      </div>
    );
  }
}

export default Card;
