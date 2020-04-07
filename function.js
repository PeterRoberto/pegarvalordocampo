** HTML **
<input type="text" class="field-name">
<div id="getinput"></div>
<button class="btnenvio">Enviar</button>



** JS **
(function() {
  'use strict';
  
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

