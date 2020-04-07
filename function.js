(function() {
  var nomeInput = document.querySelector('.field-name');
  var recebeInput = document.getElementById('getinput');
  var btnEnvio = document.querySelector('.btnenvio');
  
  btnEnvio.addEventListener('click', mostrarTexto);
  
  function mostrarTexto(pegar) {
    var pegar = nomeInput.value;
    recebeInput.innerHTML = pegar;
    console.log(pegar);
  }
})();

