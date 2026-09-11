let n = Number(prompt("Digite um número para a tabuada:"));
for (let i = 1; i <= 10; i++) {
  let res = n * i;
  if (res % 2 === 0) {
    console.log(n + " x " + i + " = " + res);
  }
}