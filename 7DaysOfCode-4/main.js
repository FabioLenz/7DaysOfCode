numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numeroEscolhido;
let i = 0;

jogo();

function jogo() {
while (i < 3) {
    numeroEscolhido = prompt("Escolha um número de 1 a 10. Você tem ao todo três tentativas.")

    if (numeroEscolhido == numeroAleatorio) {
        alert("Parabéns, você adivinhou o número secreto!")
        i = 10;
    } else if (numeroEscolhido == null || numeroEscolhido == "") {
        alert("Escolha inválida. Tente novamente!")
        i = i + 1;
    } else if (numeroEscolhido > 10 || numeroEscolhido < 0) {
        alert("O número que você escolheu é menor que 0 ou maior que 10. Escolha um número entre 0 e 10.")
        i = i + 1;
    } else if (numeroEscolhido > 0 && numeroEscolhido <= 10 && numeroEscolhido != numeroAleatorio) {
        alert("Quase lá! Tente novamente.")
        i = i + 1;
    }
}
}

if (i === 3) {
alert("Game Over! O número era " + numeroAleatorio + "!")
}
