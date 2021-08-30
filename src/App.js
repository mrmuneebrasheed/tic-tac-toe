import React from "react";
import Box from "./components/Box";
class App extends React.Component {
  constructor() {
    super();
    this.state = { board: ["", "", "", "", "", "", "", "", ""] };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          boxShadow: "0 0 50px 10px grey",
          justifyContent: "space-evenly",
          width: "500px",
          height: "500px",
          margin: "100px auto",
          backgroundColor: "grey",
        }}
      >
        {this.state.board.map((box, index) => (
          <Box key={index}></Box>
        ))}
      </div>
    );
  }
}

export default App;
