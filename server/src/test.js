function fatorial(numero) {
  resultado = 1;
  count = 1;
  while(count <= numero) {
      resultado *= count;
      count ++;
  }
  return resultado;
}



const main = (params) => {
  // Code here
  const fatoriais = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fatoriasTotal = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];
  const vFinal = 500000;
  
  let total = fatoriasTotal.reduce((total, numero) => total + numero, 0);
  
  // for(let i = 0; i > fatoriais.length; i++) {
  //     vFinal -= fatorial(fatoriais[i])
  // }
  return total;
}

console.log(main());