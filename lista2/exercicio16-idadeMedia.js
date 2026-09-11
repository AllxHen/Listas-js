let idadesTurma = [18, 22, 25, 30, 40, 15];
let somaIdades = 0;

for (let contadora = 0; contadora < idadesTurma.length; contadora++) {
  somaIdades += idadesTurma[contadora];
}

let mediaIdade = somaIdades / idadesTurma.length;

console.log("A média de idade da galera é: " + mediaIdade + " anos.");