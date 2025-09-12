// Possiveis formas de criar uma string
// Utilizando "", '' ou ``
const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante'"`;

console.log(cumprimento);
console.log(citacao);

// Concatenar string
console.log('A estudante chama ' + estudante);

// Template string
console.log(`A estudante chama ${estudante}`);

// Função para alterar string
const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);
