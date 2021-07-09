import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tateti-board',
  templateUrl: './tateti-board.component.html',
  styleUrls: ['./tateti-board.component.css'],
})
export class TatetiBoardComponent implements OnInit {
  squares = [''];
  xIsNext = false;
  winner = '';
  cartelWinner: any;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    this.opensWeetAlert();
  }

  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }

  opensWeetAlert(): void {
    if (this.winner) {
      this.cartelWinner = Swal.fire({
        title: 'GANASTE',
        width: 500,
        padding: '3em',
        background: '#fff url("assets/fondo.jpg")',
        backdrop: `
    rgba(0,0,123,0.4)
    url("assets/cat.gif")
    left top
    no-repeat
  `,
      });
    }
  }
}
