let contadora = 1;
let total = 0;
while (contadora <= 20) {
  if (contadora % 2 !== 0) {
    total += contadora;
  }
  contadora++;
}
console.log("Somando os ímpares deu: " + total);