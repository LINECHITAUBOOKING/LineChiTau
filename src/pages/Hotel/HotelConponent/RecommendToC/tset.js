const a = [];

const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= Math.ceil(c.length / 3) - 1; i++) {
  let b = [];
  for (let j = 0; j <= 3 * i + 2; j++) {
    if (j > 3 * (i - 1) + 2) {
      b.push(c[j]);
    }
  }
  a.push(b);
}
console.log('a', a);
