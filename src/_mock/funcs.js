// ----------------------------------------------------------------------

export function randomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

export function randomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomStatus() {
  const status = ['active', 'down'];
  const active = status[0];
  const down = status[1];

  return active;
}
