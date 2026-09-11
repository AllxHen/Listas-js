let valores = [5, -3, 8, -1, 0, 12, -7, 4, -9, 2];

console.log("Olha só os negativos que achei:");

for (let contadora = 0; contadora < valores.length; contadora++) {
  if (valores[contadora] < 0) {
    console.log(valores[contadora]);
  }
}