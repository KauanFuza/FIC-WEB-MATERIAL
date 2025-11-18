document.querySelector('#load').addEventListener('click', async () => {
    const resposta = await fetch('/clientes')
    const dados = await resposta.json()
    const div = document.querySelector('#clientes')
    for (let { id, nome } of dados) {
        let p = document.createElement('p')
        p.textContent = `ID: ${id} Nome: ${nome}`
        div.append(p)
    }
})

document.querySelector('#add').addEventListener('click', async () => {
    const header = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          nome: "José",
          data_nasc: "2000-01-01",
          email: "jose@email.com"
        })
      }
      let resposta = await fetch('/clientes', header);
      resposta = await resposta.json();
      console.log(resposta)
})