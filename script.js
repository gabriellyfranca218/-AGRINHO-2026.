// ======================
// POP-UP DE BOAS-VINDAS
// ======================

window.addEventListener("load", () => {
    setTimeout(() => {
        alert(
            "🌱 Bem-vindo ao Raízes do Futuro!\n\nTecnologia e sustentabilidade trabalhando juntas pelo futuro do agronegócio. 💙"
        );
    }, 800);
});


// ======================
// BOTÃO SAIBA MAIS
// ======================

const botao = document.getElementById("btnSaiba");

botao.addEventListener("click", () => {

    alert(
        "💙 O agronegócio sustentável utiliza tecnologia, inovação e preservação ambiental para produzir alimentos sem prejudicar a natureza."
    );

});


// ======================
// POP-UPS DOS CARDS
// ======================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const titulo = card.querySelector("h3").textContent;

        if (titulo === "Economia") {
            alert(
                "💰 O agronegócio representa uma das principais atividades econômicas do Brasil e gera milhões de empregos."
            );
        }

        else if (titulo === "Alimentos") {
            alert(
                "🌾 O campo produz alimentos essenciais para abastecer o Brasil e diversos países."
            );
        }

        else if (titulo === "Meio Ambiente") {
            alert(
                "🌎 Produzir e preservar devem caminhar juntos para garantir recursos às futuras gerações."
            );
        }

        else if (titulo === "Drones") {
            alert(
                "🚁 Drones monitoram plantações, identificam pragas e ajudam a economizar recursos."
            );
        }

        else if (titulo === "Sensores") {
            alert(
                "📡 Sensores medem umidade, temperatura e qualidade do solo em tempo real."
            );
        }

        else if (titulo === "Automação") {
            alert(
                "🤖 Máquinas inteligentes tornam a produção mais eficiente e sustentável."
            );
        }

    });

});


// ======================
// ANIMAÇÃO DOS CARDS
// ======================

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform =
            "translateY(-15px) scale(1.06)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "translateY(0px) scale(1)";
    });

});


// ======================
// VALIDAÇÃO DO FORMULÁRIO
// ======================

const formulario =
document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome =
    document.getElementById("nome").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const mensagem =
    document.getElementById("mensagem").value.trim();

    if (
        nome === "" ||
        email === "" ||
        mensagem === ""
    ) {

        alert(
            "⚠️ Preencha todos os campos antes de enviar."
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
        `✅ Obrigada, ${nome}!\n\nSua mensagem foi enviada com sucesso. 💙🌱`
    );

    formulario.reset();

});


// ======================
// ANIMAÇÃO AO ROLAR
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

        const topo =
        secao.getBoundingClientRect().top;

        if (topo <
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
// MENU ATIVO
// ======================

const links =
document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        links.forEach((item) => {
            item.style.color = "white";
        });

        link.style.color =
            "#80ed99";

    });

});
