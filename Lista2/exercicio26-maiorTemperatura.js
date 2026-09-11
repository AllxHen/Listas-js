let temps = [
  [30, 32, 31], // Cidade 1
  [28, 29, 27], // Cidade 2
  [35, 36, 34], // Cidade 3
  [22, 25, 24]  // Cidade 4
];
let maior = temps[0][0], cidade = 0, dia = 0;
for (let i = 0; i < temps.length; i++) {
  for (let j = 0; j < temps[i].length; j++) {
    if (temps[i][j] > maior) {
      maior = temps[i][j];
      cidade = i;
      dia = j;
    }
  }
}
console.log("A maior temperatura foi " + maior + "°C na Cidade " + (cidade + 1) + ", no Dia " + (dia + 1));