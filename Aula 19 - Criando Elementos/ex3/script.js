// Crie um formulário para nome, e-mail, idade e cidade. Ao clicar no botão, as informações devem ser apresentadas em formato cartão na página. Cada cartão deve possuir um botão que permita remove-lo da página.

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const { nome, email, idade, cidade } = Object.fromEntries(formData.entries)

    const card = document.createElement('div')
    card.classList.add('card')
    const pnome = document.createElement('p')
    pnome.textContent = `Nome: ${nome}`
    const pemail = document.createElement('p')
    pemail.textContent = `Email: ${email}`
    const pidade = document.createElement('p')
    pidade.textContent = `Email: ${idade}`
    const pcidade = document.createElement('p')
    pcidade.textContent = `Email: ${cidade}`

    
}) 