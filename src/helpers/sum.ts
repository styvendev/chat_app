export function sum(a: number, b: number): number {
  return a + b;
}

export function addArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
