function multi() {
    let number = Number(n.value);
    let multi = number*5;
    console.log(multi);
    document.getElementById("p").innerHTML += multi + "<br />";
}
function createMultiplier (a,b = 5) {
    return a*b;
}
let createMultiplier2 = (function(a,b){
    b = 5;
    return function () {
        total = a*b;
        return total;
    }
})();
createMultiplier(5);
console.log (createMultiplier(10))
console.log (createMultiplier(12))
console.log (createMultiplier(7))
console.log (createMultiplier2)
