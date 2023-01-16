let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let continuaLista = true;
let perguntaSimNao;
let perguntaComida;
let perguntaCategoria;
let removerAlimento;
let removerCategoria;
let categoriaAlimento;
let posicaoCategoria;

listaCompras();
listaFinal();

function listaCompras() {
    while (continuaLista == true) {
        perguntaSimNao = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? Digite 1 para ADICIONAR, 2 para REMOVER ou 3 para ENCERRAR LISTA.")
        
        if (perguntaSimNao == "1") {
            perguntaComida = prompt("Qual comida você deseja inserir?")
            perguntaCategoria = prompt("Em qual categoria essa comida se encaixa? Digite 1 para FRUTA, 2 para LATICÍNIO, 3 para CONGELADO e 4 para DOCE.")
                if (perguntaCategoria == "1") {
                    frutas.push(perguntaComida);
                } else if (perguntaCategoria == "2") {
                    laticinios.push(perguntaComida);
                } else if (perguntaCategoria == "3") {
                    congelados.push(perguntaComida);
                } else if (perguntaCategoria == "4") {
                    doces.push(perguntaComida)
                }
            continuaLista = true;
        } else if (perguntaSimNao == "2") {
            if (frutas == "" && laticinios == "" && congelados == "" && doces == ""){
                alert("Sua lista está vazia, não é possível remover algum item dela.")
                continuaLista == false;
            } else {
            alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
            removerAlimento = prompt("Qual alimento você deseja remover?")
            removerCategoria = prompt("Qual categoria ele pertence? Digite 1 para FRUTA, 2 para LATICÍNIO, 3 para CONGELADO e 4 para DOCE")
            if(removerCategoria == "1") {
                posicaoCategoria = frutas.indexOf(removerAlimento);
                
                if (posicaoCategoria == "-1") {
                    alert(removerAlimento + "não foi encontrado.")
                    continuaLista = true;
                } else {
                    frutas.splice(posicaoCategoria, 1);
                    alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
                }
            } else if (removerCategoria == "2") {
                posicaoCategoria = laticinios.indexOf(removerAlimento);

                if (posicaoCategoria == "-1") {
                    alert(removerAlimento + "não foi encontrado.")
                    continuaLista = true;
                } else {
                    laticinios.splice(posicaoCategoria, 1);
                    alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
                }
            } else if (removerCategoria == "3") {
                posicaoCategoria = congelados.indexOf(removerAlimento);
                
                if (posicaoCategoria == "-1") {
                    alert(removerAlimento + "não foi encontrado.")
                    continuaLista = true;
                } else {
                    congelados.splice(posicaoCategoria, 1);
                    alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
                }
            } else if (removerCategoria == "4") {
                posicaoCategoria = doces.indexOf(removerAlimento);
                
                if (posicaoCategoria == "-1") {
                    alert(removerAlimento + "não foi encontrado.")
                    continuaLista = true;
                } else {
                    doces.splice(posicaoCategoria, 1);
                    alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
                }
            }
        }
        } else if (perguntaSimNao == "3") {
            alert("Ok.")
            continuaLista = false
        } else {
            alert("Não entendi sua resposta. Por favor, digite novamente.")
            continuaLista = true;
        }
    }
}

function listaFinal() {
    alert("Esta é sua lista de compras:\n" + "FRUTAS: " + frutas + "\n" + "LATICÍNIOS: " + laticinios + "\n" + "CONGELADOS: " + congelados + "\n" + "DOCES: " + doces);
}