function divide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function hypotensuse(a?: number, b?: number) {
  return Math.hypot(a, b);
}

function sum(a: number, b: number): number {
  return a + b;
}

function substract(value: number, value2: number): number {
  return value - value2;
}

function sum2(a: number, b: number): number {
  return a + b;
}

function powerOf(a: number, b: number): number {
  return Math.pow(a, b);
}

const cosine = (radian: number) => Math.cos(radian);

const root = (x: number) => Math.sqrt(x);

export { divide, multiply, hypotensuse, sum, substract, powerOf, cosine, root, sum2 };
