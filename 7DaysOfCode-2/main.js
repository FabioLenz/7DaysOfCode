digitaDados()
       
       function digitaDados() {
        var nome = prompt("Qual o seu nome?");
        var idade = prompt("Quantos anos você tem?")
        var programacao = prompt("Qual linguagem de programação você está estudando?",)

        exibirMensagem(nome, idade, programacao);
        }

        function exibirMensagem(nome, idade, programacao) {
            if (nome === ""|| idade === "" || programacao === "") {
            alert("Não foi possível exibir a mensagem. Por favor, digite os dados novamente!");
            digitaDados();
            } else {
                alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + programacao + "!")

                estudo(programacao);
            }
        }

        function estudo(programacao) {
            var estudar = prompt("Você gosta de estudar " + programacao + "? Responda com o número 1 para SIM ou 2 para NÃO.")
            if (estudar == 1) {
                alert("Muito bom! Continue estudando e você terá muito sucesso.")
            } else if (estudar == 2) {
                alert("Ahh que pena... Já tentou aprender outras linguagens?")
            } else {
                alert("Não entendi sua resposta.")
            }
        }
