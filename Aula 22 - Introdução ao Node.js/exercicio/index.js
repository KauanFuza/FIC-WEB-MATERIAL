function callbackAssincrono(callback, parametro) {
    console.log('Início da função callbackAssincrono');
    setTimeout(() => { callback(parametro);  }, 2000);
    console.log('Fim da função callbackAssincrono');
  }
  
  function apresentaPessoa(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);
  }
  
  callbackAssincrono(apresentaPessoa, { nome: 'Ana', idade: 30 });