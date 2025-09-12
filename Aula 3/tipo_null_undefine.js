// undefine -> Não definido
let nomeEstudante;
console.log(nomeEstudante);
console.log(typeof nomeEstudante); // Tipo da variável

// null -> Vázio
let telefoneEstudante = null;
console.log(typeof telefoneEstudante); // Object -> erro
console.log(telefoneEstudante + 1); // null + 1 = 1
console.log(nomeEstudante + 1); // undefine + 1 = NaN -> tipo number

const professor = 'Ana';