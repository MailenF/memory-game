// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

interface Celda {
  name: string;
  estado: boolean;
}

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  tablero2: Celda[][] = [
    [
      { name: 'A', estado: false },
      { name: 'C', estado: false },
      { name: 'D', estado: false },
      { name: 'B', estado: false },
    ],
    [
      { name: 'D', estado: false },
      { name: 'A', estado: false },
      { name: 'B', estado: false },
      { name: 'C', estado: false },
    ],
    [
      { name: 'B', estado: false },
      { name: 'D', estado: false },
      { name: 'A', estado: false },
      { name: 'C', estado: false },
    ],
    [
      { name: 'C', estado: false },
      { name: 'D', estado: false },
      { name: 'B', estado: false },
      { name: 'A', estado: false },
    ],
  ];

  celdaSeleccionada: Celda;
  suma: number;

  constructor() {}

  ngOnInit(): void {}

  newGame(): void {
    this.tablero2 = [
      [
        { name: 'A', estado: false },
        { name: 'C', estado: false },
        { name: 'D', estado: false },
        { name: 'B', estado: false },
      ],
      [
        { name: 'D', estado: false },
        { name: 'A', estado: false },
        { name: 'B', estado: false },
        { name: 'C', estado: false },
      ],
      [
        { name: 'B', estado: false },
        { name: 'D', estado: false },
        { name: 'A', estado: false },
        { name: 'C', estado: false },
      ],
      [
        { name: 'C', estado: false },
        { name: 'D', estado: false },
        { name: 'B', estado: false },
        { name: 'A', estado: false },
      ],
    ];
  }

  mostarCelda(celda: Celda): void {
    celda.estado = true;
    // Pregunto si es el primer click
    if (!this.celdaSeleccionada) {
      console.log('1', !this.celdaSeleccionada);
      this.celdaSeleccionada = celda;
      console.log('2', this.celdaSeleccionada);
    } else {
      // En el segundo click, comparo esta celda con la anterior
      if (this.celdaSeleccionada.name !== celda.name) {
        this.celdaSeleccionada.estado = false;
        console.log('3', this.celdaSeleccionada.name);
        celda.estado = false;
        console.log('4', celda.name);
      }
      this.celdaSeleccionada = null;
    }
  }
}
// setTimeout(function(): void {
// this.celdaSeleccionada.estado = false;
// celda.estado = false;
// }, 3000);

