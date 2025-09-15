const notaFinal = 7;
const faltas = 4;
const advertencia = 0; // 0 -> Falsy e 1 até infinity -> Truthy

if (notaFinal < 7 || faltas > 4) {
    console.log('Reprovado, boas festas!');
} else {
    console.log('Aprovado, boas festas!');
}

// !advertencia vai negar um valor que é falso (advertencia = 0 -> falsy), logo o valor se tornará verdadeiro
if (faltas >= 2 && !advertencia) {
    console.log('Recebeu bônus!');
} else {
    console.log('Não recebeu bônus');
} 