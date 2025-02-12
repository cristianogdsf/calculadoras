function calcularImc() { 
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = peso / (altura*altura);
    resultado = resultado.toFixed(2);
    
    exibirMensagem('resultado', resultado);
    mudarCor(resultado);
}

function exibirMensagem(id,texto) {
    let pegarTag = document.getElementById(id);
    pegarTag.innerHTML = texto;
}


function mudarCor(resultado) {
    let resultadoCores = document.getElementById('resultado'); 
    resultadoCores.style.color = 'white';
    
    if (resultado < 18.5){
        resultadoCores.style.backgroundColor = '#00a2ff';
    } else if (18.5 <= resultado && resultado < 23) {
        resultadoCores.style.backgroundColor = '#01b64d';
    } else if (23 <= resultado && resultado < 25){
        resultadoCores.style.backgroundColor = '#ffae00';
    } else if (25 <= resultado && resultado < 30){
        resultadoCores.style.backgroundColor = '#ff00c8';
    }  else if (resultado > 30) {
        resultadoCores.style.backgroundColor = '#ff0000';
    }

}

function calcularFatorial() {
    let numero = document.getElementById('numero').value;
    let fatorial = 1;
    let resultado = numero;

    if (numero == 1 || numero == 2 ) {
        exibirMensagem('resultado',resultado);
    } else if(numero == 0){
        exibirMensagem('resultado',resultado);
    } else {
        while (numero > fatorial && fatorial < (numero-1)){
            resultado = resultado*(numero-fatorial);
            fatorial++;
        }
        exibirMensagem('resultado',resultado);
    }    
}

function menuAparecer () {
    document.getElementById('menu').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("menu__navegacao");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }