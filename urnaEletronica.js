function urnaEletronica() {

    // Declaração das variáveis
    let opcao;
    let nome1;
    let nome2;
    let nome3;
    let contador = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    let decisao = "N" & "n";
    let senha = 123456;
    let confirmavoto;
    let data = new Date();

    function dataFim (){
        const data = new Date ();
        return data;
    }

    console.log('Iniciando o Programa às:' + data().toLocaleString());

    senha = parseInt(prompt('Digite sua senha de mésário:'));

    do {
        nome1 = prompt('Digite o nome do candidato 1:');
        nome2 = prompt('Digite o nome do candidato 2:');
        nome3 = prompt('Digite o nome do candidato 3:');

        console.log('** NOMES DOS CANDIDATOS **');
        console.log('Candidato 1: ' + nome1);
        console.log('Candidato 2: ' + nome2);
        console.log('Candidato 3: ' + nome3);

    } while (!confirm('Se os nomes dos candidatos estão corretos, clique OK para continuar ou CANCELAR para voltar e digitar novamente'));

    // Opções para votos
    do {
        opcao = parseInt(prompt(`Digite a opção \n|1|${nome1}\n|2|${nome2}\n|3|${nome3}\n|4| Voto Branco\n Para Encerrar, Digite sua Senha`
        ));

        contador++;

        if (opcao == 1) {
            confirmavoto = confirm('ATENÇÃO: seu voto será para: ' + nome1 + ('\n\nDeseja proseguir?'));
            if (confirmavoto) {
                console.log("Seu voto foi computado para: ", nome1)
                candidato1++;
            }
        } else if (opcao == 2) {
            confirmavoto = confirm('ATENÇÃO: seu voto será para: ' + nome2 + ('\n\nDeseja proseguir?'));
            if (confirmavoto) {
                console.log("Seu voto foi computado para: ", nome2)
                candidato2++;
            }
        } else if (opcao == 3) {
            confirmavoto = confirm('ATENÇÃO: seu voto será para: ' + nome3 + ('\n\nDeseja proseguir?'));
            if (confirmavoto) {
                console.log("Seu voto foi computado para: ", nome3)
                candidato3++;
            }
        } else if (opcao == 4) {
            confirmavoto = confirm('ATENÇÃO: seu voto ficará em Branco. Deseja Proceguir?');
            if (confirmavoto) {
                console.log("Seu voto foi computado em Branco")
                votobranco++;
            }
        } else if (opcao == senha) {
            decisao = prompt("Se realmente deseja encerrar a votação digite 'S' para sim e 'N' para não")
            if (decisao == "N" && decisao == "n") {
            }


        } else {
            
            if (confirm("Seu voto foi invalido")) {
                console.log("Seu voto computado em nulo")
                votonulo++;
            } else {
                contador--;
            }
        }

    } while (decisao !== "S" && decisao !== "s") console.clear();


    // se houver votação
    var totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo);

    if (totaldevotos > 0) {

        // Contagem dos Votos

        contador--;

        console.log('Contagem', contador);
        console.log('Voto computado para Candidato1: ', candidato1);
        console.log('Voto computado para Candidato2: ', candidato2);
        console.log('Voto computado para Candidato3: ', candidato3);
        console.log('Voto em Branco computado', votobranco);
        console.log('Voto Nulo computado', votonulo);

        // Total de Votos e Porcetagem de cada candidato.
        console.log("** BOLETIM DE URNA")
        console.log("Este é o total de votos", totaldevotos)

        console.log("Este é o total de votos do", nome1, candidato1)
        console.log("Este é o percentual", ((candidato1 / totaldevotos * 100).toFixed(2)) + "%")

        console.log("Este é o total de votos do", nome2, candidato2)
        console.log("Este é o percentual", ((candidato2 / totaldevotos * 100).toFixed(2)) + "%")

        console.log("Este é o total de votos do", nome3, candidato3)
        console.log("Este é o percentual", ((candidato3 / totaldevotos * 100).toFixed(2)) + "%")

        console.log("Este é o total de votos em brancos", votobranco)
        console.log("Este é o percentual", ((votobranco / totaldevotos * 100).toFixed(2)) + "%")

        console.log("Este é o total de votos nulos", votonulo)
        console.log("Este é o percentual", ((votonulo / totaldevotos * 100).toFixed(2)) + "%")



        if (candidato1 > candidato2 && candidato1 > candidato3) {
            console.log("O vencedor é ", nome1)
            console.log("O total de votos é", candidato1 + votobranco)
            console.log("A porcentagem de votos desse candidato é: ", votobranco + candidato1)
        } else if (candidato2 > candidato1 && candidato2 > candidato3) {
            console.log("O vencedor é ", nome2)
            console.log("O total de votos é", candidato2 + votobranco)
            console.log("A porcentagem de votos desse candidato é: ", votobranco + candidato2)
        } else if (candidato3 > candidato1 && candidato3 > candidato2) {
            console.log("O vencedor é ", nome3)
            console.log("O total de votos é", candidato3 + votobranco)
            console.log("A porcentagem de votos desse candidato é: ", votobranco + candidato3)

        } else {
            console.log("Empate")
        }

        // exibição do ganhador
    } else {
        console.log('Não houve votação nesta urna');
        console.log('Total de Votos: ' + totaldevotos);
    }

    console.log("Fim do Programa");
    console.log('Terminado o Programa às:' + dataFim().toLocaleString());
}

