function salvar(){
    var dados = [
        {
            nome : document.getElementById("nome").value,
            date : document.getElementById("date").value,
            value : document.getElementById("value").value,
        },
     ];
    let nome = document.getElementById("nome").value;
    let date = document.getElementById("date").value;
    let value = document.getElementById("value").value;
    console.log(nome);
    console.log(date);
    console.log(value);
    console.log(dados[0]);
    console.log(dados[1]);
    console.log(dados[2]);
    let printDados = dados.map(function(item){
        return `<tr>
                    <td>${item.nome}</td>
                    <td>${item.date}</td>
                    <td>${item.value}</td>
                </tr>`;
    });
    document.getElementById("print").innerHTML += printDados;
    limpar();
}
function limpar() {
    document.getElementById("nome").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    document.getElementById("value").innerHTML = "";
}
let date1 = new Date("2021/12/13");
let date2 = new Date(document.getElementById("date").value);
let time = date2.getTime() - date1.getTime();
let timeDays = time / (1000 * 3600 * 24);

function calcular(){
    let valor = document.getElementById("value").value;
    let juros = 0.02 + (timeDays * 0.01);
    let jurosTotal = valor + (valor * juros);
    document.getElementById("print").innerHTML += jurosTotal;
}

