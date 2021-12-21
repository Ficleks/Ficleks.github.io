let i = 0;
let num = [];
function sorteio (){
    setInterval(function sorteio () {
        sortear(num, (resultado) => {
            if (i < 6) {
            num = resultado;
            console.log(num);
            document.getElementById("p").innerHTML += num[i] + " ";
            i++;
            console.log(i);
            }
        });
        function sortear (num, callback) {
            if (i<6) {
                let num1 = 0;
                let num2 = 0;
                let num3 = 0;
                let num4 = 0;
                let num5 = 0;
                let num6 = 0;
                while (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 || num1 == num6) {
                    num1 = Math.floor(Math.random() * 60) + 1;
                }
                while (num2 == num1 || num2 == num3 || num2 == num4 || num2 == num5 || num2 == num6) {
                    num2 = Math.floor(Math.random() * 60) + 1;
                }   
                while (num3 == num1 || num3 == num2 || num3 == num4 || num3 == num5 || num3 == num6) {
                    num3 = Math.floor(Math.random() * 60) + 1;
                }
                while (num4 == num1 || num4 == num2 || num4 == num3 || num4 == num5 || num4 == num6) {
                    num4 = Math.floor(Math.random() * 60) + 1;
                }
                while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4 || num5 == num6) {
                    num5 = Math.floor(Math.random() * 60) + 1;
                }
                while (num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) {
                    num6 = Math.floor(Math.random() * 60) + 1;
                }
                let num = [num1, num2, num3, num4, num5, num6];
                return callback(num);
            }
        }
    }, 1000);
}