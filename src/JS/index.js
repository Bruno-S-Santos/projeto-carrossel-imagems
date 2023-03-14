/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões e imagems
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//- passo 1 - pegar o elemento HTML dos botões e imagems
const botoesCarrossel = document.querySelectorAll(".botao");
const imagems = document.querySelectorAll(".imagen");

//- passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // - passo 3 - desmarcar o botão selecionado anterior
    DesativarBotaoSelecionado();

    //- passo 4 - marcar o botão clicado como se estivesse selecionada
    botao.classList.add("selecionado");

    //- passo 5 - esconder a imagem ativa de fundo
    EsconderImagenAtiva();

    //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    imagems[indice].classList.add("ativa");
  });
});
function EsconderImagenAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
