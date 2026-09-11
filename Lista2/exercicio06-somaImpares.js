let i = 1;
let soma = 0;
while (i <= 20) {
  if (i % 2 !== 0) {
    soma += i;
  }
  i++;
}
console.log("A soma dos ímpares é: " + soma);