//variables
const fillMainSectionElement = document.getElementById("section");
const fillMainArticleElement = document.getElementById("article");

//functions
function fillMainSectionContent(){
    fillMainSectionElement.innerHTML = 
    "<p>Eu Felipe Alan me identifico com:</p><h1>Animal Urso</h1><img src='images/urso.jpg' alt='urso'>";
}
function fillMainArticleContent(){
    fillMainArticleElement.innerHTML = 
    "<h2>Urso-pardo (Ursus arctos)</h2><p>O urso-pardo (Ursus arctos) é um mamífero carnívoro da família dos ursídeos</p><h2>Habitat</h2><p>O urso pardo ocorre em partes da Russia, Asia central, China, Canadá, Estados Unidos (principalmente o Alasca), Escandinávia e região dos Cárpatos (especialmente a Romênia), Anatólia e Cáucaso.</p><img src='images/mapa.png' alt='mapa'><h2>Descrição</h2><p>O urso-pardo (Ursus arctos) é um mamífero carnívoro da família dos ursídeos. É o urso de mais ampla distribuição geográfica dentre todos os membros vivos de sua família. É um dos maiores carnívoros terrestres da atualidade, rivalizado em tamanho corporal apenas com seu parente próximo, o urso polar, que é muito menos variável em tamanho e maior devido a isso. Existem varias subespécies reconhecidas, muitas das quais são bem conhecidas em sua área de ocorrência.</p><a href='https://pt.wikipedia.org/wiki/Urso-pardo'>Clique aqui para mais informação</a>";
}








fillMainSectionContent();
fillMainArticleContent();
//const button = document.getElementById("button")
//button.onclick = function (){
//    fillMainSectionContent();
//}