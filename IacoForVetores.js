// Estruturas de Dados: Vetores Bidimensionais (matrizes)
const minhaMatriz = [
    [71, 72, 73],
    ['Candidato 1', 'Candidato 2', 'Candidato 3'],
    ['PPF', 'PPCO', 'PPM']
];
console.log(minhaMatriz[0][2]);

for (i = 0; i <= 2; i++) {

    for (j = 0; j <= 2; j++) {

        console.log(minhaMatriz[i][j]);
    }
}

// for (i = 0; i <= 2; i++) {

//     console.log('Nº candidato: ' + minhaMatriz[0][i]);
//     console.log('Nome do candidato: ' + minhaMatriz[1][i]);
//     console.log('Partido: ' + minhaMatriz[2][i]);

//     console.log();

// }


const tabuada = [6, 8];

for (i = 0; i <= tabuada.length; i++) {
    for (j = 0; j <= 10; j+=2) {
        console.log(tabuada[i] + 'x' + j + '=' + (tabuada[i] * j));
    }
}