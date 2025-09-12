// 1 - Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
let text = 'Isso é uma variável string';
var valor = 70;
const verdadeiro = true;

console.log(typeof (text));
console.log(typeof (valor));
console.log(typeof (verdadeiro));


// 2 - Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
let firstName = 'Guilherme';
let lastName = 'França';
let nomeCompleto = firstName + ' ' + lastName;

console.log(nomeCompleto)


// 3 - Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
let peso = 87;
let serHumano = 'Guilherme';

console.log(`O ${serHumano} está pesando ${peso}kg`);


// 4 - Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let valor1 = 'Texto';
console.log(valor1);

valor1 = 5;
console.log(valor1);


// 5 - Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var varFora = 'Variável var fora do bloco';

if (varFora.length > 0) {
    var varDentro = 'Variável var dentro do bloco';
    console.log(varDentro + ' No if');
    console.log(varFora  + ' No if');
}

console.log(varDentro  + ' fora do if');
console.log(varFora + ' fora do if');

// Iremos percever que quando utilizamos o let não é possível utilizar uma variável que foi criada em um bloco fora do mesmo.
let letFora = 'letiável let fora do bloco';

if (letFora.length > 0) {
    let letDentro = 'letiável let dentro do bloco';
    console.log(letDentro + ' No if');
    console.log(letFora  + ' No if');
}

// console.log(letDentro  + ' fora do if');
console.log(letFora + ' fora do if');


// 6 - Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
// let chovendo = false;
let chovendo = true;

if (chovendo) {
    console.log('É bom levar um guarda chuva, gracinha!');
} else {
    console.log('Nem precisa de guarda chuva!');
}
