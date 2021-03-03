import React, { Component } from 'react';
import s from './Main.module.css';


class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    };
    this.winnerVar = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  };


  isWinner(symbol) {
    for (let i = 0; i < 8; i++) {
      let line = this.winnerVar[i];
      if (this.state.squares[line[0]] === symbol
        && this.state.squares[line[1]] === symbol
        && this.state.squares[line[2]] === symbol) {
          alert(symbol + ' is a winner!');
          setTimeout(() => {
            this.setState({ squares: Array(9).fill(null) });
            this.setState({ count: 0 });
          }, 1000);
      }


    };
  };

  resetGame() {

  };

  handleClick(e) {
    let data = e.target.getAttribute('data');
    let currentSquare = this.state.squares;

    if(currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquare });
    } else {
      alert('Chose another cell');
    };

    this.isWinner(currentSquare[data]);

  };

  render() {

    return (
      <main className={s.main}>

        <div className={s.main_container}>
          <div className={s.main_container_cell} onClick={this.handleClick} data='0' > {this.state.squares[0]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='1' > {this.state.squares[1]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='2' > {this.state.squares[2]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='3' > {this.state.squares[3]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='4' > {this.state.squares[4]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='5' > {this.state.squares[5]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='6' > {this.state.squares[6]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='7' > {this.state.squares[7]} </div>
          <div className={s.main_container_cell} onClick={this.handleClick} data='8' > {this.state.squares[8]} </div>
        </div>

        <button className={s.main__new_game} onClick={this.resetGame}>
          New Game
        </button>

      </main>

    );
  };

};

export default Main;