let N = parseInt(prompt("Quantos números você deseja digitar?"));
let soma = 0;
let menor, maior;

for (let i = 0; i < N; i++) {
    let num = parseFloat(prompt("Digite o " + (i+1) + "º número:"));
    soma += num;

    if (i === 0) {
        // No primeiro número, inicializa menor e maior
        menor = num;
        maior = num;
    } else {
        if (num < menor) {
            menor = num;
        }
        if (num > maior) {
            maior = num;
        }
    }
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);

alert("Menor valor: " + menor +
      "\nMaior valor: " + maior +
      "\nSoma dos valores: " + soma);
