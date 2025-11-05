// Crie uma página com 2 campos de texto e um botão. Ao clicar no botão, utilize o texto contido no primeiro campo como a chave e o texto do segundo campo como o valor para ser armazenado no localStorage. Teste a inserção de alguns valores e verifique se foram armazenados.

document.querySelector('#armazenar').addEventListener('click', () => {
    const chave = document.querySelector('#chave').value
    const valor = document.querySelector('#valor').value

    localStorage.setItem(chave, valor)
})

document.querySelector('#remover').addEventListener('click', () => {
    const chave = document.querySelector('#chave').value

    localStorage.removeItem(chave)
})