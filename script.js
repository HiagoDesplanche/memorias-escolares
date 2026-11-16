
const redacoes = [
    {
        titulo: "Minha primeira redação",
        texto: "Coloque aqui o texto completo da sua primeira redação."
    },
    {
        titulo: "Redação 02",
        texto: "Coloque aqui o texto completo da sua segunda redação."
    },
    {
        titulo: "Redação 03",
        texto: "Coloque aqui o texto completo da sua terceira redação."
    },
    {
        titulo: "Redação 04",
        texto: "Coloque aqui o texto completo da sua quarta redação."
    },
    {
        titulo: "Redação 05",
        texto: "Coloque aqui o texto completo da sua quinta redação."
    },
    {
        titulo: "Redação 06",
        texto: "Coloque aqui o texto completo da sua sexta redação."
    },
    {
        titulo: "Redação 07",
        texto: "Coloque aqui o texto completo da sua sétima redação."
    },
    {
        titulo: "Redação 08",
        texto: "Coloque aqui o texto completo da sua oitava redação."
    },
    {
        titulo: "Redação 09",
        texto: "Coloque aqui o texto completo da sua nona redação."
    },
    {
        titulo: "Redação 10",
        texto: "Coloque aqui o texto completo da sua décima redação."
    },
    {
        titulo: "Redação 11",
        texto: "Coloque aqui o texto completo da sua décima primeira redação."
    },
    {
        titulo: "Redação 12",
        texto: "Coloque aqui o texto completo da sua décima segunda redação."
    },
    {
        titulo: "Redação 13",
        texto: "Coloque aqui o texto completo da sua décima terceira redação."
    },
    {
        titulo: "Redação 14",
        texto: "Coloque aqui o texto completo da sua décima quarta redação."
    },
    {
        titulo: "Minha última redação",
        texto: "Coloque aqui o texto completo da sua décima quinta redação."
    }
];

const cards = document.getElementById("cards");
const search = document.getElementById("search");
const modal = document.getElementById("modal");

function mostrarRedacoes(lista) {
    cards.innerHTML = "";

    document.getElementById("empty").style.display =
        lista.length === 0 ? "block" : "none";

    lista.forEach((redacao) => {
        const numero = redacoes.indexOf(redacao) + 1;

        const card = document.createElement("article");
        card.className = "card";

        const number = document.createElement("span");
        number.className = "card-number";
        number.textContent = `MEMÓRIA Nº ${String(numero).padStart(2, "0")}`;

        const titulo = document.createElement("h3");
        titulo.textContent = redacao.titulo;

        const descricao = document.createElement("p");
        descricao.textContent = "Uma parte especial da minha trajetória escolar.";

        const botao = document.createElement("button");
        botao.textContent = "Ler redação →";
        botao.addEventListener("click", () => abrirRedacao(redacao, numero));

        card.append(number, titulo, descricao, botao);
        cards.appendChild(card);
    });
}

function abrirRedacao(redacao, numero) {
    document.getElementById("modal-number").textContent =
        `MINHA REDAÇÃO Nº ${numero}`;

    document.getElementById("modal-title").textContent =
        redacao.titulo;

    document.getElementById("modal-text").textContent =
        redacao.texto;

    modal.classList.add("active");
}

document.getElementById("close").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

search.addEventListener("input", () => {
    const termo = search.value.toLowerCase();

    const filtradas = redacoes.filter(redacao =>
        redacao.titulo.toLowerCase().includes(termo) ||
        redacao.texto.toLowerCase().includes(termo)
    );

    mostrarRedacoes(filtradas);
});

mostrarRedacoes(redacoes);
