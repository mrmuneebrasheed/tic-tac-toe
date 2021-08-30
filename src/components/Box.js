import React from "react";
class Box extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        id={this.props.id}
        style={{
          fontSize: "5em",
          backgroundColor: "whitesmoke",
          width: "164px",
          height: "164px",
          border: "1px solid black",
          color: "blue",
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Box;
