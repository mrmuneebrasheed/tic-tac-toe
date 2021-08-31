import React from "react";
import "./App.css";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      gameStart: false,
      player1: "",
      player2: "",
      playerActive: "X",
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
    const board = this.state.board;

    // Verifier les conditions de Victoire
    this.checkVictory(board);

    // Vérifier si l'element est occupé déja.
    if (board[event.target.id] !== "") return;

    // Verifier si le tableau est complete.
    const boolean = board.some((box) => box === "");
    if (!boolean) {
      console.log("Full");
    }

    // Changements de State
    const playerActive = this.state.playerActive;
    board[event.target.id] = playerActive;
    this.setState({ board: board });
    if (playerActive === "X") this.setState({ playerActive: "O" });
    if (playerActive === "O") this.setState({ playerActive: "X" });
  }
  checkVictory(board) {
    this.state.winConditions.map((list) => {
      const [a, b, c] = list;
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c])
        this.setState({ win: true, playerActive: board[a] });
      return;
    });
  }
  handleStart() {
    if (this.state.player1 === "" || this.state.player2 === "") return;
    this.setState({ gameStart: true });
  }
  resetButton() {
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
      gameStart: false,
      player1: "",
      player2: "",
      playerActive: "X",
      win: false,
    });
  }

  handlePlayers(e) {
    if (e.target.id === "player1") {
      this.setState({ player1: e.target.value });
    }
    if (e.target.id === "player2") {
      this.setState({ player2: e.target.value });
    }
  }
  render() {
    return (
      <div
        className="col-6 mx-auto"
        style={{
          margin: "50px auto",
          color: "blue",
        }}
      >
        {!this.state.gameStart && (
          <div className="d-flex flex-column align-items-center">
            <h1> Play Tic Tac Toe</h1>
            <div className="my-2">
              <label htmlFor="player1">Player 1</label>
              <input
                className="mx-2"
                onChange={this.handlePlayers.bind(this)}
                id="player1"
                placeholder="Player 1"
                type="text"
              ></input>
            </div>
            <div className="my-2">
              <label htmlFor="player2">Player 2</label>
              <input
                className="mx-2"
                onChange={this.handlePlayers.bind(this)}
                id="player2"
                placeholder="Player 2"
                type="text"
              ></input>
            </div>
            <button
              onClick={this.handleStart.bind(this)}
              className="btn btn-primary col-2 my-3"
            >
              Start Game
            </button>
          </div>
        )}
        {this.state.gameStart && (
          <div className="d-flex flex-column">
            <h1 style={{ textAlign: "center" }}> Play Tic Tac Toe</h1>
            <h3 className="text-danger" style={{ textAlign: "center" }}>
              {`${this.state.player1} (X)  vs ${this.state.player2} (O)`}
            </h3>
            <div
              className="col-4 d-flex flex-wrap justify-content-evenly mx-auto bg-primary"
              style={{
                width: "500px",
                boxShadow: "0 0 50px 10px grey",
                margin: "30px auto",
              }}
            >
              {this.state.win ? (
                <div className="h2 text-white p-5">{`${
                  this.state.playerActive === "X"
                    ? this.state.player1
                    : this.state.player2
                } Wins`}</div>
              ) : (
                this.state.board.map((box, index) => (
                  <Box
                    id={index}
                    playerActive={this.state.playerActive}
                    onClick={this.handleInput.bind(this)}
                    key={index}
                  >
                    {box}
                  </Box>
                ))
              )}
            </div>
            <button
              className="btn btn-primary col-4 mx-auto"
              onClick={this.resetButton.bind(this)}
            >
              Restart Game
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
