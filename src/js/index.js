/*
Objetivo 1 - quando o usuário clicar no botão de "mostrar mais" deve abrir os projetos que estão escondidos no html

    Passo 1 - pegar o botão "mostrar mais" no JS pra poder verificar quando o usuário clica em cima dele

    Passo 2 - identificar o clique do botão

    Passo 3 - adicionar uma classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão "mostrar mais"
    
    Passo 1- pegar o botão e esconder ele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
