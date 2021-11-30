//var
let cont = 0;
let nrep = document.getElementById("input");
const nLinhas = 11;
let p = document.createElement ("p");
//functions
function repeat () {    
    let n = nrep.value;
    let quadro = n/11;
    if (n > 11) {
        n = 11;
    }
    while (cont < n) {
        p.innerHTML += `<p>${cont+1}-Linha: Eu não vou desenhar mulheres nuas na sala de aula</p>`;
        document.body.appendChild(p);
        cont++;
    }
    parseInt(quadro);
    p.innerHTML += `<fieldset><div class="divQuadro">Quadro negro foi apagado ${parseInt(quadro)} vezes</div></fieldset>`;
    n = 0;
    cont = 0;
}
