// @ts-ignore

import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

function chunk<T>(arr: T[], size: number): T[][] {
  const resultado: T[][] = [];

  let chunkArr = [];
  for (const item of arr) {
    if (chunkArr.length === size) {
      resultado.push(chunkArr);
      chunkArr = [];
    }
    chunkArr.push(item);
  }
  if (chunkArr.length) {
    resultado.push(chunkArr);
  }
  return resultado;
}

function repeat<T>(value: T, size: number): T[] {
  const resultado: T[] = [];
  while (size--) {
    resultado.push(value);
  }
  return resultado;
}

type TipoCelda = 'A' | 'B' | 'C' | 'D';

interface Celda {
  name: TipoCelda;
  estado: boolean;
  finalizada: boolean;
}

function toCelda(valor: TipoCelda): Celda {
  return {
    name: valor,
    estado: false,
    finalizada: false,
  };
}

function crearTablero(valores: TipoCelda[], sizeFila = 4): Celda[][] {
  valores.sort(() => Math.random() - Math.random());
  return chunk(valores, sizeFila).map((fila) => {
    return fila.map((value) => {
      return toCelda(value);
    });
  });
}

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  tablero: Celda[][] = crearTablero([
    ...repeat<TipoCelda>('A', 4),
    ...repeat<TipoCelda>('B', 4),
    ...repeat<TipoCelda>('C', 4),
    ...repeat<TipoCelda>('D', 4),
  ]);

  colores = new Map<TipoCelda, string>([
    ['A', 'colorA'],
    ['B', 'colorB'],
    ['C', 'colorC'],
    ['D', 'colorD'],
  ]);

  celdaSelecciona: Celda | null | undefined;
  numeroIntentos = 0;
  onDelay = false;
  winner = false;
  cartelWinner: any;

  constructor() {}

  ngOnInit(): void {}

  async startDelay(): Promise<void> {
    if (!this.onDelay) {
      this.onDelay = true;
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      this.onDelay = false;
    }
  }

  newGame(): void {
    this.intentosWinner();
    this.tablero = crearTablero([
      ...repeat<TipoCelda>('A', 4),
      ...repeat<TipoCelda>('B', 4),
      ...repeat<TipoCelda>('C', 4),
      ...repeat<TipoCelda>('D', 4),
    ]);
  }

  tablero6x4(): void {
    this.intentosWinner();
    this.tablero = crearTablero(
      [
        ...repeat<TipoCelda>('A', 6),
        ...repeat<TipoCelda>('B', 6),
        ...repeat<TipoCelda>('C', 6),
        ...repeat<TipoCelda>('D', 6),
      ],
      6
    );
  }

  async clickEnCelda(celda: Celda): Promise<void> {
    if (this.onDelay) {
      return;
    }

    if (celda.finalizada) {
      return;
    }

    celda.estado = true;

    // Pregunto si es el primer click
    if (!this.celdaSelecciona) {
      this.primerClick(celda);
    } else {
      await this.segundoClick(celda);
    }
    this.calcularGanador();
    this.opensweetalert();
  }

  primerClick(celda: Celda): void {
    this.celdaSelecciona = celda;
  }

  // @ts-ignore
  async segundoClick(celda: Celda): Promise<boolean> {
    if (this.celdaSelecciona) {
      // En el segundo click, comparo esta celda con la anterior
      this.numeroIntentos += 1;
      if (this.celdaSelecciona.name !== celda.name) {
        await this.startDelay();
        this.celdaSelecciona.estado = false;
        celda.estado = false;
      } else {
        this.celdaSelecciona.finalizada = true;
        celda.finalizada = true;
      }
      this.celdaSelecciona = null;
    }
  }

  calcularGanador(): void {
    this.winner = this.tablero.every((fila) => {
      return fila.every((celda) => celda.finalizada);
    });
  }

  intentosWinner(): void {
    this.winner = false;
    this.numeroIntentos = 0;
  }

  // @ts-ignore
  opensweetalert(): void {
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
