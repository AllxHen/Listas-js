let gradeNumeros = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];

let somaGeral = 0;
for (let contadora = 0; contadora < gradeNumeros.length; contadora++) {
  
  for (let contadora2 = 0; contadora2 < gradeNumeros[contadora].length; contadora2++) {
    somaGeral += gradeNumeros[contadora][contadora2];
  }
}

console.log("Somando tudo que tem na matriz deu " + somaGeral);