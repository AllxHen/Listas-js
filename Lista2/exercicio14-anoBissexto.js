function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
let anoTeste = 2024;
console.log("O ano " + anoTeste + " é bissexto? " + ehBissexto(anoTeste));