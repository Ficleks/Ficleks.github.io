function sorteio() {
    let num1 = Math.floor(Math.random() * 60) + 1;
    let num2 = Math.floor(Math.random() * 60) + 1;
    let num3 = Math.floor(Math.random() * 60) + 1;
    let num4 = Math.floor(Math.random() * 60) + 1;
    let num5 = Math.floor(Math.random() * 60) + 1;
    let num6 = Math.floor(Math.random() * 60) + 1;
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
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);
    console.log(num6);
    let num = [num1, num2, num3, num4, num5, num6];
    console.log(num);
    document.getElementById("p").innerHTML += num[0] + " ";
}
