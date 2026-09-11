let nomes = ["Ana", "Carlos", "Amanda", "Bruno", "Alice", "Daniel"];
let letra = "A";
console.log("Nomes que começam com " + letra + ":");
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i][0] === letra) {
    console.log(nomes[i]);
  }
}