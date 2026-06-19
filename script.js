// ======================
// BOAS-VINDAS
// ======================

window.addEventListener("load", () => {
    setTimeout(() => {
        alert(
            "🌱 Bem-vindo ao Raízes do Futuro!\n\nTecnologia e sustentabilidade unidas para construir um futuro melhor! 💙"
        );
    }, 1000);
});

// ======================
// BOTÃO SAIBA MAIS
// ======================

const btnSaiba = document.getElementById("btnSaiba");

btnSaiba.addEventListener("click", () => {
    alert(
        "🌎 O agronegócio sustentável busca produzir alimentos utilizando tecnologias que preservam o solo, a água e o meio ambiente. 💚"
    );
});

// ======================
// CARDS INFORMATIVOS
// ======================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {

        const titulo =
        card.querySelector("h3")?.textContent;

        if (!titulo) return;

        switch (titulo) {

            case "Economia":
                alert(
                    "💰 O agronegócio movimenta bilhões de reais e gera milhões de empregos no Brasil."
                );
                break;

            case "Alimentos":
                alert(
                    "🌾 O Brasil é um dos maiores produtores de alimentos do mundo."
                );
                break;

            case "Meio Ambiente":
                alert(
                    "🌱 Produzir e preservar precisam caminhar juntos para garantir recursos às futuras gerações."
                );
                break;

            case "Drones":
                alert(
                    "🚁 Drones ajudam a identificar pragas, monitorar plantações e economizar recursos."
                );
                break;

            case "Sensores":
                alert(
                    "📡 Sensores medem umidade, temperatura e qualidade do solo em tempo real."
                );
                break;

            case "Automação":
                alert(
                    "🤖 Máquinas inteligentes aumentam a produtividade e reduzem desperdícios."
                );
                break;
        }

    });
});

// ======================
// CONTADORES ANIMADOS
// ======================

function animarContador(id, final) {

    const elemento =
    document.getElementById(id);

    let numero = 0;

    const intervalo =
    setInterval(() => {

        numero++;

        elemento.textContent = numero;

        if (numero >= final) {
            clearInterval(intervalo);
        }

    }, 25);

}

animarContador("contador1", 19);
animarContador("contador2", 150);
animarContador("contador3", 70);

// ======================
// QUIZ
// ======================

const correta =
document.getElementById("correta");

const respostas =
document.querySelectorAll(".quiz-btn");

respostas.forEach((botao) => {

    botao.addEventListener("click", () => {

        if (botao.id === "correta") {

            alert(
                "🎉 Parabéns! Você acertou!\n\nOs drones ajudam a monitorar plantações e identificar problemas rapidamente. 🚁"
            );

        } else {

            alert(
                "❌ Não foi dessa vez!\n\nA resposta correta é: Drones 🚁"
            );

        }

    });

});

// ======================
// FORMULÁRIO
// ======================

const formulario =
document.getElementById("formulario");

formulario.addEventListener("submit",
(evento) => {

    evento.preventDefault();

    const nome =
    document.getElementById("nome")
    .value
    .trim();

    const email =
    document.getElementById("email")
    .value
    .trim();

    const mensagem =
    document.getElementById("mensagem")
    .value
    .trim();

    if (
        nome === "" ||
        email === "" ||
        mensagem === ""
    ) {

        alert(
            "⚠️ Preencha todos os campos."
        );

        return;
    }

    if (!email.includes("@")) {

        alert(
            "📧 Digite um e-mail válido."
        );

        return;
    }

    alert(
        `✅ Obrigada, ${nome}!\n\nSua mensagem foi enviada com sucesso! 🌱💙`
    );

    formulario.reset();

});

// ======================
// BOTÃO VOLTAR AO TOPO
// ======================

const topo =
document.getElementById("topo");

topo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================
// ANIMAÇÃO DAS SEÇÕES
// ======================

const secoes =
document.querySelectorAll("section");

secoes.forEach((secao) => {

    secao.style.opacity = "0";
    secao.style.transform =
    "translateY(60px)";
    secao.style.transition =
    "all 1s ease";

});

function mostrarSecoes() {

    secoes.forEach((secao) => {

        const topoSecao =
        secao.getBoundingClientRect().top;

        if (
            topoSecao <
            window.innerHeight - 100
        ) {

            secao.style.opacity = "1";
            secao.style.transform =
            "translateY(0)";

        }

    });

}

window.addEventListener(
    "scroll",
    mostrarSecoes
);

mostrarSecoes();

// ======================
// MENSAGEM DE CONSCIENTIZAÇÃO
// ======================

setTimeout(() => {

    alert(
        "💙🌎 Cada pequena atitude sustentável ajuda a construir um futuro melhor para todos!"
    );

}, 20000);
