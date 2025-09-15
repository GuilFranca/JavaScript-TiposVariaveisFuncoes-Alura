// Number()
// Esta função converte qualquer outro tipo de dado em um tipo Number. Caso o valor não possa ser convertido, retornará NaN.
let strinber = 'socorro';
console.log(Number(strinber));
console.log(Number('1'));
console.log(Number(null));
console.log(Number(undefined));

// Number.parseInt() e Number.parseFloat()
// Ambos funcionam de forma parecida, porém, 'parseIntvai tentar converter o valor em um número inteiro eparseFloat`, em um número de ponto flutuante.
console.log(parseInt('4'));
console.log(parseInt('4.5'));

console.log(parseFloat('4'));
console.log(parseFloat('4.5'));
console.log(parseFloat('4.5abc')); // retorna o número 4.5

// Uma outra forma de fazer a coerção de tipos (quando o JavaScript tenta “forçar” de forma implícita a conversão de um valor de um tipo para outro) é utilizando o operador unário +. Por exemplo:
console.log(typeof + '45'); // retorna ‘number’ -> retorna o número 45
console.log(typeof + true); // retorna ‘number’ -> retorna o número 1

// Conversão para strings
// Assim como Number(), o JavaScript também disponibiliza a função global String() quando é necessário converter outros tipos de dado em formato de texto.
console.log(String(2));
console.log(String(undefined));
console.log(String(true));

// É possível utilizar diversos métodos do JavaScript para modificar strings. Confira abaixo alguns dos mais comuns:
// includes()
// Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:
console.log('estudando JavaScript'.includes('Java')); // retorne true
const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // retorna true