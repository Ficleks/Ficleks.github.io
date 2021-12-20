function salvar(){
    let dados = [
        {
            nome : document.getElementById("nome").value,
            date : document.getElementById("date").value,
            value : document.getElementById("value").value,
            titulo: document.getElementById("titulo").value,
        },
    ];
    console.log(dados[0]);
    console.log(dados[1]);
    console.log(dados[2]);
    console.log(dados[3]);
    let printDados = dados.map(function(item){
        return `<tr>
                    <td>${item.nome}</td>
                    <td>${item.date}</td>
                    <td>R$${item.value}</td>
                </tr>`;
    });
    document.getElementById("print").innerHTML += printDados;
    limpar();
}
function tipo (){
    dados = [
        {
          nome: document.getElementById("nome").value,
          tipo: document.getElementById("titulo").value,
        },
    ];
    let printDados = dados.map(function(item){
        return `<tr>
                    <td>${item.nome}</td>
                    <td>${item.tipo}</td>
                </tr>`;
    });
    document.getElementById("print2").innerHTML += printDados;
    limpar();
}
function data (){
    dados = [
        {
          nome: document.getElementById("nome").value,
          date: document.getElementById("date").value,
        },
    ];
    let printDados = dados.map(function(item){
        return `<tr>
                    <td>${item.nome}</td>
                    <td>${item.date}</td>
                </tr>`;
    });
    document.getElementById("print3").innerHTML += printDados;
    limpar();
}

//Função para limpar os campos (nao esta funcionando)
function limpar() {
    document.getElementById("nome").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    document.getElementById("value").innerHTML = "";
}
//Calcular a data, ter o juros e o valor total
let date1 = new Date("2021/12/13");
let date2 = new Date(document.getElementById("date").value);
let time = date2.getTime() - date1.getTime();
let timeDays = time / (1000 * 3600 * 24);
function calcular(){
    let valor = document.getElementById("value").value;
    let juros = 0.02 + (timeDays * 0.01);
    let jurosTotal = valor + (valor * juros);
    document.getElementById("print").innerHTML += 
    `<tr>
        <td>${jurosTotal}</td>
    </tr>`;
}

