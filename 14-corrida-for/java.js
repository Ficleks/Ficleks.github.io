//Function
function velJoao() {
    function velMin() {
        min = Math.ceil(100);
        max = Math.floor(151);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function velMax() {
        min = Math.ceil(200);
        max = Math.floor(281);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagem() {
        min = 1;
        max = 9;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagemVelMin() {
        der = derrapagem() / 100;
        min = velMin() - (velMin() * der);
        return min;
    }
    function derrapagemVelMax() {
        der = derrapagem() / 100;
        max = velMax() - (velMax() * der);
        return max;
    }
    function velocidadeMedia() {
        min4 = derrapagemVelMin();
        max4 = derrapagemVelMax();
        return Math.floor(Math.random() * (max4 - min4)) + min4;
    } 
    return velocidadeMedia();       
}
function velJuca() {
    function velMin() {
        min = Math.ceil(100);
        max = Math.floor(151);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function velMax() {
        min = Math.ceil(200);
        max = Math.floor(281);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagem() {
        min = 1;
        max = 9;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagemVelMin() {
        der = derrapagem() / 100;
        min = velMin() - (velMin() * der);
        return min;
    }
    function derrapagemVelMax() {
        der = derrapagem() / 100;
        max = velMax() - (velMax() * der);
        return max;
    }
    function velocidadeMedia() {
        min4 = derrapagemVelMin();
        max4 = derrapagemVelMax();
        return Math.floor(Math.random() * (max4 - min4)) + min4;
    } 
    return velocidadeMedia();       
}
function velEdna() {
    function velMin() {
        min = Math.ceil(100);
        max = Math.floor(151);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function velMax() {
        min = Math.ceil(200);
        max = Math.floor(281);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagem() {
        min = 1;
        max = 9;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function derrapagemVelMin() {
        der = derrapagem() / 100;
        min = velMin() - (velMin() * der);
        return min;
    }
    function derrapagemVelMax() {
        der = derrapagem() / 100;
        max = velMax() - (velMax() * der);
        return max;
    }
    function velocidadeMedia() {
        min4 = derrapagemVelMin();
        max4 = derrapagemVelMax();
        return Math.floor(Math.random() * (max4 - min4)) + min4;
    } 
    return velocidadeMedia();       
}
function corrida1() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 10; i++) {
        joao = velJoao();
        juca = velJuca();
        edna = velEdna();
        if (joao > juca && joao > edna) {
            joaoWins++;
        }
        if (juca > joao && juca > edna) {
            jucaWins++;
        }
        if (edna > joao && edna > juca) {
            ednaWins++;
        }
    }
    if (joaoWins > jucaWins && joaoWins == ednaWins) {
        winner = "Empatado";
    } else if(joaoWins > ednaWins && joaoWins == jucaWins) {
        winner = "Empatado";
    } else {
        winner = "Joao";
    }
    if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "Juca";
    }
    if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "Edna";
    }
    document.getElementById("resultado1").innerHTML = "<p>João ganhou: " + joaoWins + " vezes.</p><p>Juca ganhou: " + jucaWins + " vezes.</p><p>Edna ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}
function corrida2() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 70; i++) {
        joao = velJoao();
        juca = velJuca();
        edna = velEdna();
        if (joao > juca && joao > edna) {
            joaoWins++;
        }
        if (juca > joao && juca > edna) {
            jucaWins++;
        }
        if (edna > joao && edna > juca) {
            ednaWins++;
        }
    }
    if (joaoWins > jucaWins && joaoWins == ednaWins) {
        winner = "Joao";
    }
    if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "Juca";
    }
    if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "Edna";
    }
    document.getElementById("resultado2").innerHTML = "<p>João ganhou: " + joaoWins + " vezes.</p><p>Juca ganhou: " + jucaWins + " vezes.</p><p>Edna ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}
function corrida3() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 160; i++) {
        joao = velJoao();
        juca = velJuca();
        edna = velEdna();
        if (joao > juca && joao > edna) {
            joaoWins++;
        }
        if (juca > joao && juca > edna) {
            jucaWins++;
        }
        if (edna > joao && edna > juca) {
            ednaWins++;
        }
    }
    if (joaoWins > jucaWins && joaoWins == ednaWins) {
        winner = "Joao";
    }
    if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "Juca";
    }
    if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "Edna";
    }
    document.getElementById("resultado3").innerHTML = "<p>João ganhou: " + joaoWins + " vezes.</p><p>Juca ganhou: " + jucaWins + " vezes.</p><p>Edna ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}
