let registrosClima = [
  [30, 32, 31], 
  [28, 29, 27], 
  [35, 36, 34], 
  [22, 25, 24]  
];
let tempMaxima = registrosClima[0][0];
let cidadeMaisQuente = 0;
let diaMaisQuente = 0;

for (let contadora = 0; contadora < registrosClima.length; contadora++) {
  
  for (let contadora2 = 0; contadora2 < registrosClima[contadora].length; contadora2++) {
    
    if (registrosClima[contadora][contadora2] > tempMaxima) {
      tempMaxima = registrosClima[contadora][contadora2];
      cidadeMaisQuente = contadora;
      diaMaisQuente = contadora2;
    }
  }
}
console.log("O recorde de calor foi " + tempMaxima + "°C na Cidade " + (cidadeMaisQuente + 1) + ", logo no Dia " + (diaMaisQuente + 1));