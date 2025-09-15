// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = 'Hello World';
console.log(frase.length);
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const variavelNull = null;
let variavelUndefined;
console.log(variavelNull);
console.log(variavelUndefined);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const texto = 'Guilherme está pesando mais de 55kg?';
const pesoGuilherme = 86;
let pesoMaior55 = pesoGuilherme > 55 ? true : false;

if (pesoMaior55) {
    pesoMaior55 = 'Sim, é';
} else {
    pesoMaior55 = 'Não, é';
}

console.log(`${texto} ${pesoMaior55} ${pesoGuilherme}`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let varNum = 15;
let varString = 'Maicon Jaqueson';

console.log(typeof String.varNum);
console.log(typeof Number.varString);

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
let textoString = 'Testando String';
console.log(textoString.toLowerCase());
console.log(textoString.toUpperCase());
console.log(textoString.slice(0, -1));