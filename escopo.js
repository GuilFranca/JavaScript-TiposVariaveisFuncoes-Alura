// if é um bloco de código
if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante)
}

// por conta da var é possível acessar estudante fora do bloco
estudante = 'Ana';
console.log(estudante)

// Com let é possível fazer o mesmo
if (2 < 3) {
    let professor = 'Jacob';
    console.log(professor);
}

professor = 'Jorge'
console.log(professor);

// É possível alterar o valor de uma variáel criada fora do escopo
let presidente;

if (5 != 0) {
    presidente = 'Gilberto Gil'
    console.log(presidente);
}

console.log(presidente);

