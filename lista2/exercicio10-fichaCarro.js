let carro = {
  marca: "Toyota", 
  modelo: "Corolla", 
  ano: 2022
};

for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}