let livro = {
  titulo: "O Senhor dos Anéis", 
  autor: "Tolkien", 
  ano: 1954
};
for (let caracteristica in livro) {
  console.log(caracteristica);
}