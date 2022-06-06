/**
 * Tipo number
 */
 const primeiroNumero = 1;
 const segundoNumero = 2;
 
 const soma = primeiroNumero + segundoNumero;
 const subtracao = primeiroNumero - segundoNumero;
 const divisao = primeiroNumero + segundoNumero;
 const multiplicacao = primeiroNumero * segundoNumero;
 
 console.log(soma);
 console.log(subtracao);
 console.log(divisao);
 console.log(multiplicacao);
 
 /**
  * Ponto flutuante
  */
 const numeroPontoFluante = 3.3;
 const pontoFlutuanteSemZero = .5;
 
 const novaOperacao = primeiroNumero / numeroPontoFluante;
 console.log(novaOperacao);
 
 /**
  * NaN - Not A Number (nao eh um numero)
  */
 const algo = "algo";
 console.log(algo * primeiroNumero);