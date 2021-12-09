//Objetos

let carros = {
    popular: {
        velMin: {min: 110, max: 130},
        velMax: {min: 180, max: 200},
        derrapagem: {min: 3, max: 5},
    },
    sport: {
        velMin: {min: 125, max: 145},
        velMax: {min: 195, max: 215},
        derrapagem: {min: 2, max: 4},
    },
    superSport: {   
        velMin: {min: 140, max: 160},
        velMax: {min: 210, max: 230},
        derrapagem: {min: 1, max: 1.75},
    },
};
//Function Pop

function velMinPop () {
    min = carros.popular.velMin.min;
    max = carros.popular.velMin.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function velMaxPop () {
    min = carros.popular.velMax.min;
    max = carros.popular.velMax.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function derrapagemPop() {
    min = carros.popular.derrapagem.min;
    max = carros.popular.derrapagem.max;
    let derrapagem = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    derrapagem = derrapagem / 100;
    minD = velMinPop() - (velMinPop() * derrapagem);
    maxD = velMaxPop() - (velMaxPop() * derrapagem);
    return Math.floor(Math.random() * (maxD - minD)) + minD;
}
//Fuction Sport

function velMinSport () {
    min = carros.sport.velMin.min;
    max = carros.sport.velMin.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function velMaxSport () {
    min = carros.sport.velMax.min;
    max = carros.sport.velMax.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function derrapagemSport() {
    min = carros.sport.derrapagem.min;
    max = carros.sport.derrapagem.max;
    let derrapagem = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    derrapagem = derrapagem / 100;
    minD = velMinSport() - (velMinSport() * derrapagem);
    maxD = velMaxSport() - (velMaxSport() * derrapagem);
    return Math.floor(Math.random() * (maxD - minD)) + minD;
}
//Function Super

function velMinSuper () {
    min = carros.superSport.velMin.min;
    max = carros.superSport.velMin.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function velMaxSuper () {
    min = carros.superSport.velMax.min;
    max = carros.superSport.velMax.max;
    let velMed = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    return velMed;
}
function derrapagemSuper() {
    min = carros.superSport.derrapagem.min;
    max = carros.superSport.derrapagem.max;
    let derrapagem = Math.floor(Math.random() * (Math.floor (max) - Math.ceil(min)) + Math.ceil(min));
    derrapagem = derrapagem / 100;
    minD = velMinSuper() - (velMinSuper() * derrapagem);
    maxD = velMaxSuper() - (velMaxSuper() * derrapagem);
    return Math.floor(Math.random() * (maxD - minD)) + minD;
}
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
                return derrapagemPop();
            } else if (chance() > 60 && chance() <= 95) {
                return derrapagemSport();
            } else {
                return derrapagemSuper();
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
    if (joaoWins > jucaWins && ednaWins > jucaWins && joaoWins == ednaWins) {
        winner = "Empatado entre <strong>João</strong> e <t>Edna</t>";
    } else if(joaoWins > ednaWins && jucaWins > ednaWins && joaoWins == jucaWins) {
        winner = "Empatado entre <strong>João</strong> e <b>Juca</b>";
    } else if (jucaWins > joaoWins && ednaWins > joaoWins && jucaWins == ednaWins) {
        winner = "Empatado entre <b>Juca</b> e <t>Edna</t>";
    } else if (joaoWins > jucaWins && joaoWins > ednaWins) {
        winner = "<strong>Joao</strong>";
    } else if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "<b>Juca</b>";
    } else if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "<t>Edna</t>";
    }
    document.getElementById("resultado1").innerHTML = "<p><strong>João</strong> ganhou: " + joaoWins + " vezes.</p><p><b>Juca</b> ganhou: " + jucaWins + " vezes.</p><p><t>Edna</t> ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
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
                return derrapagemPop();
            } else if (chance() > 60 && chance() <= 95) {
                return derrapagemSport();
            } else {
                return derrapagemSuper();
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
    if (joaoWins > jucaWins && ednaWins > jucaWins && joaoWins == ednaWins) {
        winner = "Empatado entre <strong>João</strong> e <t>Edna</t>";
    } else if(joaoWins > ednaWins && jucaWins > ednaWins && joaoWins == jucaWins) {
        winner = "Empatado entre <strong>João</strong> e <b>Juca</b>";
    } else if (jucaWins > joaoWins && ednaWins > joaoWins && jucaWins == ednaWins) {
        winner = "Empatado entre <b>Juca</b> e <t>Edna</t>";
    } else if (joaoWins > jucaWins && joaoWins > ednaWins) {
        winner = "<strong>Joao</strong>";
    } else if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "<b>Juca</b>";
    } else if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "<t>Edna</t>";
    }
    document.getElementById("resultado2").innerHTML = "<p><strong>João</strong> ganhou: " + joaoWins + " vezes.</p><p><b>Juca</b> ganhou: " + jucaWins + " vezes.</p><p><t>Edna</t> ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
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
                return derrapagemPop();
            } else if (chance() > 60 && chance() <= 95) {
                return derrapagemSport();
            } else {
                return derrapagemSuper();
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
    if (joaoWins > jucaWins && ednaWins > jucaWins && joaoWins == ednaWins) {
        winner = "Empatado entre <strong>João</strong> e <t>Edna</t>";
    } else if(joaoWins > ednaWins && jucaWins > ednaWins && joaoWins == jucaWins) {
        winner = "Empatado entre <strong>João</strong> e <b>Juca</b>";
    } else if (jucaWins > joaoWins && ednaWins > joaoWins && jucaWins == ednaWins) {
        winner = "Empatado entre <b>Juca</b> e <t>Edna</t>";
    } else if (joaoWins > jucaWins && joaoWins > ednaWins) {
        winner = "<strong>Joao</strong>";
    } else if (jucaWins > joaoWins && jucaWins > ednaWins) {
        winner = "<b>Juca</b>";
    } else if (ednaWins > joaoWins && ednaWins > jucaWins) {
        winner = "<t>Edna</t>";
    }
    document.getElementById("resultado3").innerHTML = "<p><strong>João</strong> ganhou: " + joaoWins + " vezes.</p><p><b>Juca</b> ganhou: " + jucaWins + " vezes.</p><p><t>Edna</t> ganhou: " + ednaWins + " vezes.</p><p>O vencedor foi: " + winner + "</p>";
}