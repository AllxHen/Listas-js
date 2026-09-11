let listaDePrecos = [10, 25, 40, 15, 60, 30, 5];
let valorCorte = 25;
let qtdItensCaros = 0; 
let somatorioBaratos = 0;

for (let precoAtual of listaDePrecos) {
  if (precoAtual > valorCorte) {
    qtdItensCaros++;
  } else if (precoAtual < valorCorte) {
    somatorioBaratos += precoAtual;
  }
}

console.log("Tem " + qtdItensCaros + " itens que custam mais de R$ " + valorCorte);
console.log("E somando a galera mais barata dá R$ " + somatorioBaratos);