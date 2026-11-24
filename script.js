// ==========================================
// 1. MODO ESCURO
// ==========================================
const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
});

// ==========================================
// 2. CARRINHO DE COMPRAS
// ==========================================
let quantidade = 0;
let total = 0;

const botoesComprar = document.querySelectorAll(".botao-comprar");

botoesComprar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        quantidade++;

        const cartao = botao.closest(".produto");
        const textoPreco = cartao.querySelector(".preco").textContent;
        const preco = parseFloat(textoPreco.replace("R$", "").replace(",", "."));

        total += preco;

        document.getElementById("contador-carrinho").textContent = quantidade;
        document.getElementById("total-carrinho").textContent = "R$ " + total.toFixed(2).replace(".", ",");
    });
});

// ==========================================
// 3. JANELA MODAL DE DETALHES
// ==========================================
const modal = document.getElementById("modal-detalhes");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const fecharModal = document.getElementById("fechar-modal");

const botoesDetalhes = document.querySelectorAll(".botao-detalhes");

botoesDetalhes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const cartao = botao.closest(".produto");
        const id = botao.getAttribute("data-id");

        modalImg.src = cartao.querySelector("img").src;
        modalTitulo.textContent = cartao.querySelector("h3").textContent;

        if (id === "1") {
            modalDescricao.textContent = "Pato de Borracha Clássico: Ideal para coleção, decoração ou banho. Material macio e resistente!";
        } else if (id === "2") {
            modalDescricao.textContent = "Pelúcia de Raposa: Super fofinha, antialérgica e perfeita para presentear!";
        } else if (id === "3") {
            modalDescricao.textContent = "Tamagotchi Retrô: Cuide do seu bichinho virtual onde estiver! Acompanha corrente para chaveiro.";
        } else if (id === "4") {
            modalDescricao.textContent = "Chaveiro Pelúcia Vaporeon: Edição colecionável de alta qualidade para mochilas e chaves.";
        }

        modal.style.display = "block";
    });
});

fecharModal.addEventListener("click", function() {
    modal.style.display = "none";
});

