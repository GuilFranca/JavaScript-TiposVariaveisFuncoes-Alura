// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
let text = 'Isso é uma variável string';
var valor = 70;
const verdadeiro = true;

console.log(typeof(text));
console.log(typeof(valor));
console.log(typeof(verdadeiro));


// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
let firstName = 'Guilherme';
let lastName = 'França';
let nomeCompleto = firstName + ' ' + lastName;

console.log(nomeCompleto)


// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
let peso = 87;
let serHumano = 'Guilherme';

console.log(`O ${serHumano} está pesando ${peso}kg`);