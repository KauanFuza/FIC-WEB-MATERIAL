// Faça uma página com 2 campos para número e um botão. Ao clicar no botão, os número devem ser somados e apresentados em uma nova estrutura na página. A cada clique um novo elemento deve ser adicionado, criando um histórico dos cálculos feitos.

document.querySelector('#soma').addEventListener('click', () => {
    const num1 = document.querySelector('#num1').valueAsNumber
    const num2 = document.querySelector('#num2').valueAsNumber


    const soma = num1 + num2
    const resultado = document.querySelector('#resultado')
    const p = document.createElement('p')
    resultado.innerHTML = ''
    p.textContent = `Resultado ${soma}`    
    resultado.append(p)

    const historico = document.querySelector('.historico')
    const p_historico = document.createElement('p')
    p_historico.textContent = `${num1} + ${num2} = ${soma}`
    historico.append(p_historico)
})