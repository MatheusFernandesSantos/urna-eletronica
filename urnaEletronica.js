function urnaEletronica() {

// Declaração das variáveis
let candidato1 = parseInt (prompt('candidato1'));
let candidato2 = parseInt (prompt('candidato2')); 
let candidato3 = parseInt (prompt('candidato3')); 
let candidato5 = parseInt (prompt('candidato5')); 
let candidato8 = parseInt (prompt('candidato8')); 

    let opcao;
    let contador = 0;

    do {

        // opcao = parseInt(prompt('Digite a opção:'));

        console.log('Repetição', contador);

        contador++;

    } while (opcao !== 0);

    contador--;

    console.log('Contagem:', contador);

}
