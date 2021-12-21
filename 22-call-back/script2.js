let i = 0;
let num = 0;
function sorteio (){
    setInterval(function sorteio () {
        sortear(num, (resultado) => {
            if (i < 6) {
            num = resultado;
            console.log(num);
            document.getElementById("p").innerHTML += num + " ";
            i++;
            console.log(i);
            }
        });
        function sortear (num, callback) {
            num = Math.floor(Math.random() * 60) + 1;
            return callback(num);
        }
    }, 1000);
}