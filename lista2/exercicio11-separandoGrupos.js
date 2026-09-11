for (let contadora = 1; contadora <= 20; contadora++) {
  if (contadora % 3 === 0) {
    console.log(contadora + " - Grupo A");
  } else if (contadora % 5 === 0) {
    console.log(contadora + " - Grupo B");
  } else {
    console.log(contadora);
  }
}