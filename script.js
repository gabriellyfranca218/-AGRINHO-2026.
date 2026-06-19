// Mensagem de boas-vindas
window.addEventListener("load", function () {
  alert("🌱 Bem-vindo ao Raízes do Futuro! Juntos por um agronegócio mais sustentável. 💙💚");
});

// Validação do formulário
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const mensagem = document.querySelector("textarea").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("⚠️ Por favor, preencha todos os campos.");
    return;
  }

  alert(`✅ Obrigada, ${nome}! Sua mensagem foi enviada com sucesso! 🌎`);

  formulario.reset();
});

// Efeito ao clicar nos cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const titulo = this.querySelector("h3").textContent;

    alert(`🌿 Você selecionou: ${titulo}`);
  });
});

// Animação ao passar o mouse
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Animação das seções ao rolar a página
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  secoes.forEach((secao) => {
    const topo = secao.getBoundingClientRect().top;

    if (topo < window.innerHeight - 100) {
      secao.style.opacity = "1";
      secao.style.transform = "translateY(0)";
    }
  });
});

// Estilo inicial das seções
secoes.forEach((secao) => {
  secao.style.opacity = "0";
  secao.style.transform = "translateY(50px)";
  secao.style.transition = "1s";
});

// Destaque do menu
const links = document.querySelectorAll(".menu a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((item) => {
      item.style.background = "transparent";
    });

    this.style.background = "rgba(255,255,255,0.3)";
    this.style.borderRadius = "10px";
  });
});
