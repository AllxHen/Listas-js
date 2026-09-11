function qualMeuIMC(peso, altura) {
  let imc = peso / (altura * altura);
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc <= 24.9) {
    return "Peso normal";
  } else if (imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}
console.log("Resultado do seu IMC: " + qualMeuIMC(70, 1.75));