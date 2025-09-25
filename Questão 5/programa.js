function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
    const pi = Math.PI;

    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    console.log("Raio:", raio);
    console.log("Área:", area.toFixed(2));
    console.log("Perímetro:", perimetro.toFixed(2));

    alert(
        "Raio: " + raio +
        "\nÁrea: " + area.toFixed(2) +
        "\nPerímetro: " + perimetro.toFixed(2)
    );
}

// Chamando a função
calcularCirculo();
