//Objetos

let carroPopular = {
    tipo: 'Popular',
    velocidade: function velPopular (){
        function velMin() {
            min = Math.ceil(110);
            max = Math.floor(131);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function velMax() {
            min = Math.ceil(180);
            max = Math.floor(201);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function derrapagem() {
            min = 3;
            max = 5;
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
            minM = derrapagemVelMin();
            maxM = derrapagemVelMax();
            return Math.floor(Math.random() * (maxM - minM)) + minM;
        } 
        return velocidadeMedia();
    },
};
let carroSport = {
    tipo: 'Sport',
    velocidade: function velSport (){
        function velMin() {
            min = Math.ceil(125);
            max = Math.floor(146);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function velMax() {
            min = Math.ceil(195);
            max = Math.floor(216);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function derrapagem() {
            min = 2;
            max = 4;
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
            minM = derrapagemVelMin();
            maxM = derrapagemVelMax();
            return Math.floor(Math.random() * (maxM - minM)) + minM;
        } 
        return velocidadeMedia();
    },
};
let carroSuperSport = {
    tipo: 'SuperSport',
    velocidade: function velSuperSport (){
        function velMin() {
            min = Math.ceil(140);
            max = Math.floor(161);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function velMax() {
            min = Math.ceil(210);
            max = Math.floor(231);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function derrapagem() {
            min = 1;
            max = 2.75;
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
            minM = derrapagemVelMin();
            maxM = derrapagemVelMax();
            return Math.floor(Math.random() * (maxM - minM)) + minM;
        } 
        return velocidadeMedia();
    },
};
//Corrida Rápida

function corrida1() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 10; i++) {
        function escolha() {
            function chance() {
                min = Math.ceil(1);
                max = Math.floor(101); 
                return Math.floor(Math.random() * (max - min)) + min;
            }
            if (chance() <= 60) {
                return carroPopular.velocidade();
            } else if (chance() > 60 && chance() <= 95) {
                return carroSport.velocidade();
            } else {
                return carroSuperSport.velocidade();
            }  
        }
        joao = escolha();
        juca = escolha();
        edna = escolha();
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
//Grande Prêmio

function corrida2() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 70; i++) {
        function escolha() {
            function chance() {
                min = Math.ceil(1);
                max = Math.floor(101); 
                return Math.floor(Math.random() * (max - min)) + min;
            }
            if (chance() <= 60) {
                return carroPopular.velocidade();
            } else if (chance() > 60 && chance() <= 95) {
                return carroSport.velocidade();
            } else {
                return carroSuperSport.velocidade();
            }  
        }
        joao = escolha();
        juca = escolha();
        edna = escolha();
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
    document.getElementById("resultado2").innerHTML = "<p>João ganhou: " + joaoWins + " vezes.</p><p>Juca ganhou: " + jucaWins + " vezes.</p><p>Edna ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}
//Enduro

function corrida3() {
    joaoWins = 0;
    jucaWins = 0;
    ednaWins = 0;
    for (let i = 0; i < 160; i++) {
        function escolha() {
            function chance() {
                min = Math.ceil(1);
                max = Math.floor(101); 
                return Math.floor(Math.random() * (max - min)) + min;
            }
            if (chance() <= 60) {
                return carroPopular.velocidade;
            } else if (chance() > 60 && chance() <= 95) {
                return carroSport.velocidade;
            } else {
                return carroSuperSport.velocidade;
            }  
        }
        joao = escolha();
        juca = escolha();
        edna = escolha();
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
    document.getElementById("resultado3").innerHTML = "<p>João ganhou: " + joaoWins + " vezes.</p><p>Juca ganhou: " + jucaWins + " vezes.</p><p>Edna ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}