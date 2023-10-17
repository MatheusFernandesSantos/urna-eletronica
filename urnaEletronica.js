function urnaEletronica() {

    // Declaração das variáveis
    let opcao;
    let contador = 0;

    let nome1;
    let nome2;
    let nome3;

    nome1 = prompt("Digite o nome do primeiro candidato:");
    nome2 = prompt("Digite o nome do segundo candidato:");
    nome3 = prompt("Digite o nome do terceiro candidato:");

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    let decisao = "N";
    let senha = 501040;


    do {
        opcao = parseInt(prompt(`Digite a opção \n|1|${nome1}\n|2|${nome2}\n|3|${nome3}\n|4| Voto Branco\n|5| Voto Nulo\n Para Encerrar, Digite sua Senha`
        ));

        contador++;

        if (opcao == 1) {
            console.log("Seu voto foi computado para:", nome1)
            candidato1++;
        } else if (opcao == 2) {
            console.log("Seu voto foi computado para:", nome2)
            candidato2++;
        } else if (opcao == 3) {
            console.log("Seu voto foi computado para:", nome3)
            candidato3++;
        } else if (opcao == 4) {
            console.log("Seu voto foi computado em Branco")
            votobranco++;
        } else if (opcao == 5) {
            console.log("Seu voto foi computado em Nulo")
            votonulo++;
        } else if (opcao == senha) {
            decisao = prompt("Se realmente deseja encerrar a votação digite 'S' para sim e 'N' para não")
            if (decisao == "N" && "n") {
            }
        }

    } while (decisao !== "S" && decisao !== "s");

    contador = contador - 1;
    console.log("Contagem:", contador);


    var totaldevotos = (candidato1 + candidato2 + candidato3 + votobranco + votonulo)
    console.log("Este é o total de votos", totaldevotos)

    console.log("Este é o total de votos do", nome1, candidato1)
    console.log("Este é o percentual", (candidato1 / totaldevotos) * 100)

    console.log("Este é o total de votos do", nome2, candidato2)
    console.log("Este é o percentual", (candidato2 / totaldevotos) * 100)

    console.log("Este é o total de votos do", nome3, candidato3)
    console.log("Este é o percentual", (candidato3 / totaldevotos) * 100)

    console.log("Este é o total de votos em brancos", votobranco)
    console.log("Este é o percentual", (votobranco / totaldevotos) * 100)

    console.log("Este é o total de votos nulos", votonulo)
    console.log("Este é o percentual", (votonulo / totaldevotos) * 100)


    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log("O vencedor é ", nome1)
        console.log("O total de votos é", candidato1 + votobranco)
        console.log("A porcentagem de votos desse candidato é:", ((candidato1 + votobranco) / totaldevotos) * 100)
    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        console.log("O vencedor é ", nome2)
        console.log("O total de votos é", candidato2 + votobranco)
        console.log("A porcentagem de votos desse candidato é:", ((candidato2 + votobranco) / totaldevotos) * 100)
    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        console.log("O vencedor é ", nome3)
        console.log("O total de votos é", candidato3 + votobranco)
        console.log("A porcentagem de votos desse candidato é:", ((candidato3 + votobranco) / totaldevotos) * 100)
    } else {
        console.log("Empate")
    }
}

