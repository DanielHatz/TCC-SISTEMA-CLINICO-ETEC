var numeroPaciente = 0;
var botaoChamada = document.getElementById ("botaoChamada");
var display = document.getElementById ("numeroChamada")


    botaoChamada.onclick = function() {
    numeroPaciente++;
    display.innerHTML = numeroPaciente;
    }

