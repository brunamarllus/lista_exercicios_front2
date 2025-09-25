function calcularInvestimento() {
    let capitalInicial = parseFloat(prompt("Digite o capital inicial investido (C):"));
    let taxaMensal = parseFloat(prompt("Digite a taxa de juros mensal (%)"));
    let tempoMeses = parseInt(prompt("Digite o tempo do investimento (meses)"));

    let i = taxaMensal / 100; // converter de percentual para decimal
    let montante = capitalInicial * Math.pow(1 + i, tempoMeses);

    alert("Montante final: R$ " + montante.toFixed(2));
}

// Executa a função
calcularInvestimento();
