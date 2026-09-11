function verificarBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
console.log("O ano 2024 é bissexto? " + verificarBissexto(2024));