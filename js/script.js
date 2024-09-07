
/*


// Pega os elementos necessários
var imagemClicavel = document.querySelector('.imagem-clicavel');
var overlay = document.getElementById('overlay');
var imagemGrande = document.getElementById('imagem-grande');
var fechar = document.querySelector('.fechar');

// Função para exibir a imagem em tela cheia
imagemClicavel.onclick = function() {
    overlay.style.display = "flex"; //Altera o display para flex
    imagemGrande.src = this.src;
}

// Função para fechar o overlay e voltar à página anterior
fechar.onclick = function() {
    overlay.style.display = "none";
}



*/










// Pega os elementos necessários
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const fechar = document.querySelector(".fechar");

// Seleciona todas as imagens clicáveis
document.querySelectorAll(".imagem-clicavel").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;  // Define a imagem no modal
    });
});

// Fechar o modal ao clicar no ícone de fechar
fechar.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora da imagem
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







