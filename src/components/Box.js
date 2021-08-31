import classes from "./Box.module.css";
import React from "react";
class Box extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.children === "X" ? classes.playerX : classes.playerO
        }
        onClick={this.props.onClick}
        id={this.props.id}
        style={{
          fontSize: "5em",
          backgroundColor: "whitesmoke",
          width: "164px",
          height: "164px",
          border: "1px solid black",
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Box;
