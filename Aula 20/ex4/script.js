const form = document.querySelector('form')
let animais = []

if(localStorage.getItem('animais')){
    animais = JSON.parse(localStorage.getItem('animais'))

    for(const {tipo, nome, idade, peso, cor} of animais){
        adicionarAnimal(tipo, nome, idade, peso, cor)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const {tipo, nome, idade, peso, cor} = Object.fromEntries(formData.entries())

    adicionarAnimal(tipo, nome, idade, peso, cor)

    animais.push({tipo, nome, idade, peso, cor})
    localStorage.setItem('animais', JSON.stringify(animais))
})

function adicionarAnimal(tipo, nome, idade, peso, cor) {
    const lista = document.querySelector('#lista')
    const p = document.createElement('p')
    p.textContent = `Tipo: ${tipo} | Nome: ${nome} | Idade: ${idade} | Peso: ${peso} | Cor: ${cor}`
    lista.append(p)
}