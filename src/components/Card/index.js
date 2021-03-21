import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlipSide: false,
    };
  }
  render() {
    var classname = `card ${this.state.showFlipSide ?"blue" :"red"}`  ;
    return (
      <div>
        <div
          className={classname}
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
