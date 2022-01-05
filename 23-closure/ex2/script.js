var atual = 0;
var plus = (function () {
    var size = 20;
    return function() {
        if (atual == 0) {
            size++;
            document.getElementById("text").style.fontSize = `${size}px`;
            atual = size;
        } else {
            atual++;
            document.getElementById("text").style.fontSize = `${atual}px`;
        }
    }
})();
var minus = (function () {
    var size = 20;
    return function() {
        if (atual == 0) {
            size--;
            document.getElementById("text").style.fontSize = `${size}px`;
            atual = size;
        } else {
            atual--;
            document.getElementById("text").style.fontSize = `${atual}px`;
        }
    }
})();