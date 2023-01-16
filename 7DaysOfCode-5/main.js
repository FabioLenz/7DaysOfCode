let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let continuaLista = true;
let perguntaSimNao;
let perguntaComida;
let perguntaCategoria;

listaCompras();
listaFinal();

function listaCompras() {
    while (continuaLista == true) {
        perguntaSimNao = prompt("Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM ou 2 para NÃO.")
        
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