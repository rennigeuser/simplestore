export function range(to: number): Array<number>;
export function range(from: number, to: number): Array<number>;
export function range(from: number, to: number, step: number): Array<number>;
export function range(from: number, to?: number, step?: number): Array<number> {
  const result: Array<number> = [];

  if (to !== undefined && step !== undefined) {
    for (let i = from; i < to; i += step) {
      result.push(i);
    }
  } else if (to !== undefined && step === undefined) {
    for (let i = from; i < to; i++) {
      result.push(i);
    }
  } else {
    for (let i = 0; i < from; i++) {
      result.push(i);
    }
  }

  return result;
}
