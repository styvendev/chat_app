import { test, expect, describe } from 'vitest';
import { sum, addArray } from '../src/helpers/sum';

describe('Funcion sum', () => {
  test('Resultado suma de elementos', () => {
    //Preparacion
    const a = 1;
    const b = 2;

    //Ejecucion
    const result = sum(a, b);

    //Comportamiento esperado
    expect(result).toBe(3);
  });
});

describe('Funcion addArray', () => {
  test('Resultado suma de elementos', () => {
    //Preparacion
    const arr = [1, 2, 3, 4, 5];

    //Ejecucion
    const result = addArray(arr);

    //Comportamiento esperado
    expect(result).toBe(15);
  });

  test('Resultado sin elementos', () => {
    //Preparacion
    const arr: number[] = [];

    //Ejecucion
    const result = addArray(arr);

    //Comportamiento esperado
    expect(result).toBe(0);
  });
});
