// <!-- Faça uma página HTML com um campo de texto, um botão e um parágrafo. Ao clicar no botão, o texto do campo de texto deve ser apresentado no parágrafo. -->

document.querySelector('#acao').addEventListener('click',adicionar)
 function adicionar() {
    const texto = document.querySelector('#texto');
    const paragrafo = document.querySelector('#resultado')
    paragrafo.textContent = texto.value
}