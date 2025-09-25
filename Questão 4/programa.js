// Versão 1

function versao1() {

let salario = 1000; // salário inicial em 1995
let percentual = 0.0015; // 0,15% em 1996
let anoAtual = new Date().getFullYear();

for (let ano = 1996; ano <= anoAtual; ano++) {
    salario += salario * percentual; 
    percentual *= 2; // a partir de 1997, sempre dobra
}

console.log("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));
alert("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));
}



