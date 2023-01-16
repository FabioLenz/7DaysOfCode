let escolha = prompt("Você deseja seguir para a área de Front-End ou na área de Back-End? Digite 1 para FRONT-END ou 2 para BACK-END:")
let frontEnd;
let backEnd;
let decisao;
let tecnologias = true;
let lista;
let tecnologiaEscolhida;

caminhoASeguir();
futuro();

function caminhoASeguir() {
    if (escolha == 1) {
       frontEnd = prompt("Você quer aprender React ou Vue?")
        alert("Você quer seguir na área de Front-End aprendendo " + frontEnd + "!")
    } else if (escolha ==2) {
       backEnd = prompt("Você quer aprender C# ou Java?")
        alert("Você quer seguir na área de Back-End aprendendo " + backEnd + "!")
    } else {
        alert("Resposta inválida! Por favor, recarregue a página.")
    }

    decisao = prompt("Você vai querer continuar se especializando na área escolhida ou desejará seguir se desenvolvendo para se tornar Fullstack? Digite 1 para se especializar ou 2 para Fullstack:")

    if (decisao == 1 && escolha == 1) {
        alert("Você vai continuar se especializando em Front-End, aprendendo " + frontEnd + "!")
    } else if (decisao == 1 && escolha == 2) {
        alert("Você vai continuar se especializando em Back-End, aprendendo " + backEnd + "!")
    } else if (decisao == 2) {
        alert("Você vai seguir se desenvoveldo para se tornar Fullstack. Bons estudos!")
    } else {
        alert("Resposta inválida! Por favor, recarregue a página.")
    }
}

function futuro() {
    while (tecnologias == true) {
       lista = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 1. Se não, digite 2")
       if (lista == 1) {
        tecnologiaEscolhida = prompt("Qual tecnologia você gostaria de aprender?")
        alert("Você vai aprender " + tecnologiaEscolhida)
        tecnologias = true;
       } else if (lista == 2) {
        alert("Você não vai querer aprender novas tecnologias. Boa sorte!")
        tecnologias = false;
       }
    }
}



