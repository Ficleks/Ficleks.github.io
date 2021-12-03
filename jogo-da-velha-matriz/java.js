//Variaveis
const player1 = "o";
const player2 = "x";
let jogador = player1;
let board =
[ ["0x0", "0x1", "0x2"],
    ["1x0", "1x1", "1x2"],
    ["2x0", "2x1", "2x2"] ];
//Controlando o display do <div id="jogo">
    document.getElementById("jogo").style.display = "none";
function iniciar(){
    document.getElementById("jogo").style.display = "block";
}
//Verificador de vencedor
function verificar (){
//Verificando se o jogador1 ganhou, constatando todas as condicoes de vitoria para o mesmo
    if(board[0][0] == player1 && board[0][1] == player1 && board[0][2] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[1][0] == player1 && board[1][1] == player1 && board[1][2] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[2][0] == player1 && board[2][1] == player1 && board[2][2] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[0][0] == player1 && board[1][0] == player1 && board[2][0] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[0][1] == player1 && board[1][1] == player1 && board[2][1] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[0][2] == player1 && board[1][2] == player1 && board[2][2] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[0][0] == player1 && board[1][1] == player1 && board[2][2] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    } else if(board[0][2] == player1 && board[1][1] == player1 && board[2][0] == player1){
        document.getElementById("jogo").innerHTML = "<img src='images/1win.png' width='600px' height='600px'>";
    }
//Verificando se o jogador2 ganhou, constatando todas as condicoes de vitoria para o mesmo
    if(board[0][0] == player2 && board[0][1] == player2 && board[0][2] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[1][0] == player2 && board[1][1] == player2 && board[1][2] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[2][0] == player2 && board[2][1] == player2 && board[2][2] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[0][0] == player2 && board[1][0] == player2 && board[2][0] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[0][1] == player2 && board[1][1] == player2 && board[2][1] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[0][2] == player2 && board[1][2] == player2 && board[2][2] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[0][0] == player2 && board[1][1] == player2 && board[2][2] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } else if(board[0][2] == player2 && board[1][1] == player2 && board[2][0] == player2){
        document.getElementById("jogo").innerHTML = "<img src='images/2win.png' width='600px' height='600px'>";
    } 
}
//onclick event das casas
//1 ela verifica qual jogador esta jogando => player1= o player2= x
//2 ela recebe a variavel player1 ou 2 ("x" ou "o") na matriz "board"
//3 ela printa a imagem bola ou x na class="casa" (dependendo do jogador)
//4 ela troca a variavel jogador para o proximo player (para que na proxima funcao seguinte seja o proximo player)
//5 ela chama a funcao "verificar()" para verificar se alguem ganhou
function casa1 (){
    if(jogador == player1){
        board[0][0] = player1;
        document.getElementById("casa1").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[0][0] = player2;
        document.getElementById("casa1").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa2 (){
    if(jogador == player1){
        board[0][1] = player1;
        document.getElementById("casa2").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[0][1] = player2;
        document.getElementById("casa2").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa3 (){
    if(jogador == player1){
        board[0][2] = player1;
        document.getElementById("casa3").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[0][2] = player2;
        document.getElementById("casa3").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa4 (){
    if(jogador == player1){
        board[1][0] = player1;
        document.getElementById("casa4").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[1][0] = player2;
        document.getElementById("casa4").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa5 (){
    if(jogador == player1){
        board[1][1] = player1;
        document.getElementById("casa5").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[1][1] = player2;
        document.getElementById("casa5").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa6 (){
    if(jogador == player1){
        board[1][2] = player1;
        document.getElementById("casa6").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[1][2] = player2;
        document.getElementById("casa6").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa7 (){
    if(jogador == player1){
        board[2][0] = player1;
        document.getElementById("casa7").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[2][0] = player2;
        document.getElementById("casa7").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa8 (){
    if(jogador == player1){
        board[2][1] = player1;
        document.getElementById("casa8").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[2][1] = player2;
        document.getElementById("casa8").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}
function casa9 (){
    if(jogador == player1){
        board[2][2] = player1;
        document.getElementById("casa9").innerHTML = "<img src='images/bola.jpg'>";
        jogador = player2;
        verificar ();
    } else {
        board[2][2] = player2;
        document.getElementById("casa9").innerHTML = "<img src='images/x.jpg'>";
        jogador = player1;
        verificar ();
    } 
}