// <!-- Faça uma página HTML com um campo de texto, um botão e um parágrafo. Ao clicar no botão, o texto do campo de texto deve ser apresentado no parágrafo. -->

document.querySelector('#acao').addEventListener('click', result)
function result (){
    const paragrafos = document.querySelectorAll('p')
    for (let i = 0; i< paragrafos.length; i++) {
        paragrafos[i].textContent = `${i+1}`
    }
}
