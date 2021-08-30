import React from "react";
class Box extends React.Component {
  render() {
    return (
      <button
        id={this.props.key}
        style={{
          backgroundColor: "whitesmoke",
          width: "164px",
          height: "164px",
          border: "1px solid black",
          color: "black",
        }}
      ></button>
    );
  }
}
export default Box;
