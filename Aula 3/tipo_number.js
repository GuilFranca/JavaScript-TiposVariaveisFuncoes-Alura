// Numeros inteiros -> int

const notaPrimeiroBi = 8;
// Numeros flutuantes -> float
const notaSegundoBi = 6.5;

const notaTerceiroBi = -2;

// String quando somada, na realidade é concatenado
// const notaQuartoBi = '5';

// Conversão de string para número
const notaQuartoBi = Number.parseInt('5');

// const total = (notaPrimeiroBi + notaSegundoBi) / 2;
const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log(total.toFixed(2));

const nome = 'Juliana';
console.log('Meu nome é ' + nome);