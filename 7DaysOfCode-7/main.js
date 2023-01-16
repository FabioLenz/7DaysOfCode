let escolha;
let numero1;
let numero2;
let numero1Formatado;
let numero2Formatado;
let soma;
let subtracao;
let multiplicacao;
let divisao;
let continuar = true;

while (continuar === true) {
    escolha = prompt("Que tipo de operação você deseja fazer? Responda 1 para SOMA, 2 para SUBTRAÇÃO, 3 para MULTIPLICAÇÃO, 4 para DIVISÃO e 5 para SAIR:");
    if (escolha == 1) {
        somarCalculadora();
    } else if (escolha == 2) {
        subtrairCalculadora();
    } else if (escolha == 3) {
        multiplicarCalculadora();
    } else if (escolha == 4) {
        dividirCalculadora();
    } else if (escolha ==  5) {
        alert("Ok. Até a próxima!")
        continuar = false;
    } else {
        alert("Não entendi. Por favor, digite novamente.")
        continuar = true;
    }
}

function somarCalculadora() {
    numero1 = prompt("Qual valor deseja somar?")
    numero2 = prompt("Qual o outro valor da soma?")
    numero1Formatado = parseFloat(numero1);
    numero2Formatado = parseFloat(numero2);
    soma = numero1Formatado + numero2Formatado;
    alert(`O resultado da soma é \n ${numero1Formatado} + ${numero2Formatado} = ${soma}`)
    continuar = true;
}

function subtrairCalculadora() {
    numero1 = prompt("Qual valor deseja subtrair?")
    numero2 = prompt("Qual o outro valor da subtração?")
    numero1Formatado = parseFloat(numero1);
    numero2Formatado = parseFloat(numero2);
    subtracao = numero1Formatado - numero2Formatado;
    alert(`O resultado da subtração é \n ${numero1Formatado} - ${numero2Formatado} = ${subtracao}`)
    continuar = true;       
}

function multiplicarCalculadora() {
    numero1 = prompt("Qual valor deseja multiplicar?")
    numero2 = prompt("Qual o outro valor da multiplicação?")
    numero1Formatado = parseFloat(numero1);
    numero2Formatado = parseFloat(numero2);
    multiplicacao = numero1Formatado * numero2Formatado;
    alert(`O resultado da multiplicação é \n ${numero1Formatado} * ${numero2Formatado} = ${multiplicacao}`)
    continuar = true;           
}

function dividirCalculadora() {
    numero1 = prompt("Qual é o dividendo?")
    numero2 = prompt("Qual é o divisor?")
    numero1Formatado = parseFloat(numero1);
    numero2Formatado = parseFloat(numero2);
    divisao = numero1Formatado / numero2Formatado;
    alert(`O resultado da subtração é \n ${numero1Formatado} / ${numero2Formatado} = ${divisao}`)
    continuar = true;       
}
