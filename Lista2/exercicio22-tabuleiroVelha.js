let tab = [
  ["X", "O", " "],
  [" ", "X", "O"],
  ["O", " ", "X"]
];
for (let i = 0; i < tab.length; i++) {
  let linha = "";
  for (let j = 0; j < tab[i].length; j++) {
    linha += "[" + tab[i][j] + "] ";
  }
  console.log(linha);
}