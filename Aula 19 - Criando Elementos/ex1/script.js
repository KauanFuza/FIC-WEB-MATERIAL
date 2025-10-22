// Faça uma página com uma área de texto e um botão. Ao clicar no botão, o texto da área deve ser adicionado à página por meio da criação de um elemento HTML. O elemento utilizado fica ao seu critério.

document.querySelector('#adicionar').addEventListener('click', () => {
    const texto = document.querySelector('#texto').value

    const conteudo = document.querySelector('#conteudo')
    const p = document.createElement('p')
    p.textContent = texto
    conteudo.append(p)
})