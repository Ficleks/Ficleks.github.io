entriesData = [];
//function para armazenar as informações
function salvar(){
    const newElement = {};
    newElement.name = document.getElementById("nome").value;
    newElement.date = document.getElementById("date").value;
    newElement.value = parseFloat(document.getElementById("value").value).toFixed(2);
    entriesData.push(newElement);
    console.log(entriesData[0].name);
    console.log(entriesData[0].date);
    console.log(entriesData[0].value);
    console.log(entriesData);
    console.log(entriesData.length);
    document.getElementById("print").innerHTML +=
    `<tr>
        <td>${newElement.name}</td>
        <td>${newElement.date}</td>
        <td>R$${newElement.value}</td>
    </tr>`;
    limpar();
}
//function experimental (para pegar os dados do entriesData e colocar em um array para fazer a filtragem)
function filtro(){
    inicio = document.getElementById("inicio").value;
    fim = document.getElementById("fim").value;
    const names = {
        name0: entriesData[0].name,
        name1: entriesData[1].name,
    };
    console.log(names);
}
//function para apagar
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
    document.getElementById('nome').value = '';
    document.getElementById('date').value = '';
    document.getElementById('value').value = '';
    document.getElementById('titulo').value = '';
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

