// Condições lógicas de "OU" || -> dois pipes igual ou
const notaFinal = 7;
const faltas = 4;

if (notaFinal < 7 || faltas > 4) {
    console.log('Reprovado, boas festas!');
} else {
    console.log('Aprovado, boas festas!');
}

// Condições lógicas de "E" && -> dois e comerciais igual a and
const notaFinal2 = 5;
const faltas2 = 2;
if (notaFinal2 >= 5 && faltas2 <= 4) {
    console.log(`Parabéns, você passou!`);
} else if (notaFinal2 < 5) {
    console.log('Você reprovou por falta de nota!');
} else if (faltas2 > 4) {
    console.log('Você reprovou por excesso de faltas!');
}