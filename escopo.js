// if é um bloco de código
if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante)
}

// por conta da var é possível acessar estudante fora do bloco
estudante = 'Ana';
console.log(estudante)

// Com let parece que temos o mesmo resultado que var, mas agora na verdade possuimos duas variáveis professor, uma dentro do if e outra fora.
if (2 < 3) {
    let professor = 'Jacob';
    console.log(professor);
}

// Nesse caso que a variável foi declarada sem especificar se a mesma é const, let ou var a mesma vai automaticamente ser var.
professor = 'Jorge';
// Caso comentemos a variável professor a cima o código irá quebrar, pois não temos acesso a variável professor dentro do escopo do if
console.log(professor);

// É possível alterar o valor de uma variáel criada fora do escopo
let presidente;

if (5 != 0) {
    presidente = 'Gilberto Gil'
    console.log(presidente);
}

console.log(presidente);

