let listaNomes = ["Ana", "Carlos", "Amanda", "Bruno", "Alice", "Daniel"];

let letraDesejada = "A";

console.log("Nomes que começam com a letra " + letraDesejada + ":");

for (let contadora = 0; contadora < listaNomes.length; contadora++) {
  if (listaNomes[contadora][0] === letraDesejada) {
    console.log(listaNomes[contadora]);
  }
}