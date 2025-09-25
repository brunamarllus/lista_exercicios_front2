// Calculando quantos anos são necessários para que a população do país A ultrapasse a população do país B

let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;   // 3%
let taxaB = 0.015;  // 1.5%
let anos = 0;

while (populacaoA <= populacaoB) {
    populacaoA += populacaoA * taxaA; 
    populacaoB += populacaoB * taxaB; 
    anos++;
}

console.log("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
console.log("População final do país A: " + Math.round(populacaoA));
console.log("População final do país B: " + Math.round(populacaoB));
