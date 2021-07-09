import { Component, OnInit } from '@angular/core';

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

type TipoCelda = boolean;

interface Celda {
  visible: boolean;
  esBomba: boolean;
  bombasCercanas: number;
  escudo: 'bandera' | 'pregunta' | null;
}

function toCelda(valor: TipoCelda): Celda {
  return {
    visible: false,
    esBomba: valor,
    bombasCercanas: 0,
    escudo: null,
  };
}

function crearTablero(valores: TipoCelda[], sizeFila = 4): Celda[][] {
  return chunk(valores, sizeFila).map((fila) => {
    return fila.map((value) => {
      return toCelda(value);
    });
  });
}

@Component({
  selector: 'app-buscaminas',
  templateUrl: './buscaminas.component.html',
  styleUrls: ['./buscaminas.component.css'],
})
export class BuscaminasComponent implements OnInit {
  tablero: Celda[][] = crearTablero(
    [...repeat<TipoCelda>(true, 5), ...repeat<TipoCelda>(false, 20)],
    5
  );

  tableroDisenio: Celda[][] = [
    [
      { visible: false, escudo: null, esBomba: true, bombasCercanas: 0 },
      { visible: false, escudo: 'bandera', esBomba: true, bombasCercanas: 0 },
      { visible: false, escudo: 'pregunta', esBomba: true, bombasCercanas: 0 },
      { visible: true, escudo: null, esBomba: true, bombasCercanas: 0 },
      { visible: true, escudo: null, esBomba: false, bombasCercanas: 0 },
      { visible: true, escudo: null, esBomba: false, bombasCercanas: 3 },
    ],
  ];
  ngOnInit(): void {}
}
