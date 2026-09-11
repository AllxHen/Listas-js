let jogoDaVelha = [
  ["X", "O", " "],
  [" ", "X", "O"],
  ["O", " ", "X"]
];
for (let contadora = 0; contadora < jogoDaVelha.length; contadora++) {
  let linhaPraImprimir = "";
  
  for (let contadora2 = 0; contadora2 < jogoDaVelha[contadora].length; contadora2++) {
    linhaPraImprimir += "[" + jogoDaVelha[contadora][contadora2] + "] ";
  }
  
  console.log(linhaPraImprimir);
}