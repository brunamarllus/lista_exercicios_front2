// Versão com Prompt

function versao2() {

let salario = parseFloat(prompt("Digite o salário inicial do funcionário (em R$):"));
let percentual = 0.0015; // 0,15% em 1996
let anoAtual = new Date().getFullYear();

for (let ano = 1996; ano <= anoAtual; ano++) {
    salario += salario * percentual; 
    percentual *= 2; // dobra o percentual a cada ano
}

console.log("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));
alert("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));
}