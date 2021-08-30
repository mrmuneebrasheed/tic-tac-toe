import React from "react";
import Box from "./components/Box";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      player: "X",
      win: false,
      winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  }
  handleInput(event) {
    if (this.state.board[event.target.id] !== "") return;
    const board = this.state.board;
    this.state.winConditions.map((list) => {
      const [a, b, c] = list;
      // console.log(a, b, c);
      // console.log((board[a], board[b]), board[c]);
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c])
        this.setState({ win: true });
      return;
    });
    const boolean = board.some((box) => box === "");
    if (!boolean) {
      console.log("Full");
    }
    const player = this.state.player;
    this.state.board[event.target.id] = player;
    this.setState({ board: this.state.board });
    if (player === "X") this.setState({ player: "O" });
    if (player === "O") this.setState({ player: "X" });
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
        {!this.state.win &&
          this.state.board.map((box, index) => (
            <Box id={index} onClick={this.handleInput.bind(this)} key={index}>
              {box}
            </Box>
          ))}
        {this.state.win && <div>{`${this.state.player} Wins`}</div>}
      </div>
    );
  }
}

export default App;
