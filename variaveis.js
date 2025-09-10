// variável constante não pode ter seu valor alterado, não pode ser criada sem um valor
const estudante = 'Caroline';

// variável let está disponível para todo o seu escopo pode ter alteração no seu valor
let professora = 'Ana';

// var fica acessível em todo código independete do escopo e pode ter alteração no seu valor
var representante = 'Igor';

// Erro pois a variável é const
estudante = 'Mariana';

console.log(estudante, professora, representante);

