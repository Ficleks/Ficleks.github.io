function ficha(){
    let total = 0;
    let pao = document.querySelector('input[name="tipo-pao"]:checked').value;
    let ham = document.querySelector('input[name="tipo-ham"]:checked').value;
    let sal = document.querySelector('input[name="tipo-sal"]:checked').value;
    let que = document.querySelector('input[name="tipo-que"]:checked').value;
    let tipoPao = '';
    let tipoHam = '';
    let tipoSal = '';
    let tipoQue = '';


    if (pao == "pao1"){
        total = total + 3.00;
        tipoPao = "Pão Francês";
        }
       else if (pao == "pao2"){
            total = total + 8.00;
            tipoPao = "Pão Australiano";
        }
        else {
            total = total + 6.00;
            tipoPao = "Pão de Brioche";
        } 

    if (ham == "ham1") {
        total = total + 13.00;
        tipoHam = "Hambúrguer de Picanha";
        }
        else if (ham == "ham2"){
            total = total + 10.00;
            tipoHam = "Hambúrguer de Costela";
        }
        else {
            total = total + 12.00;
            tipoHam = "Hambúrguer de Vegano";
        }

    if (sal == "sal1"){
        total = total + 1.50;
        tipoSal = "Alface";
        }
        else if (sal == "sal2"){
            total = total + 1.50;
            tipoSal = "Tomate";
        }
        else {
            total = total + 0;
            tipoSal = "Sem Salada";
        } 

    if (que == "que1"){
        total = total + 3.00;
        tipoQue = "Mussarela";
        }
        else if (que == "que2"){
            total = total + 3.00;
            tipoQue = "Prato";
        }
        else {
            total = total + 5.00;
            tipoQue = "Cheddar";
        } 

        div.innerHTML = `<fieldset><p>${tipoPao}</p><p>${tipoHam}</p><p>${tipoSal}</p><p>${tipoQue}</p><p><strong>TOTAL DA COMPRA: R$${total}</strong></p></fieldset>`

}
