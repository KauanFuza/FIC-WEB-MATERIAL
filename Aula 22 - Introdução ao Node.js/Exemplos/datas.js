function mes(){
    return 'Mês ' + (new Date()).getMonth();
  }
  function dia(){
    return 'Dia ' + (new Date()).getDay();
  }
  export { mes, dia };