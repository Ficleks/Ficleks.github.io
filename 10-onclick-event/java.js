//variables
let food;
let service;
let environment;
let cont = 0;

//functions food

function myFunction1() {
    document.getElementById("food").innerHTML = "<strong>YOUR RATING FOR FOOD WAS 1, THANKS</strong> ";
    food = 1;
    cont = cont + 1;
}
  
function myFunction2() {
    document.getElementById("food").innerHTML = "<strong>YOUR RATING FOR FOOD WAS 2, THANKS</strong> ";
    food = 2;
    cont = cont + 1;
}
function myFunction3() {
    document.getElementById("food").innerHTML = "<strong>YOUR RATING FOR FOOD WAS 3, THANKS</strong> ";
    food = 3;
    cont = cont + 1;
}
function myFunction4() {
    document.getElementById("food").innerHTML = "<strong>YOUR RATING FOR FOOD WAS 4, THANKS</strong> ";
    food =  4;
    cont = cont + 1;
}
function myFunction5() {
    document.getElementById("food").innerHTML = "<strong>YOUR RATING FOR FOOD WAS 5, THANKS</strong> ";
    food = 5;
    cont = cont + 1;
}
  
//functions service

function myFunction6() {
    document.getElementById("service").innerHTML = "<strong>YOUR RATING FOR SERVICE WAS 1, THANKS</strong> ";
    service = 1;
    cont = cont + 1;
}
function myFunction7() {
    document.getElementById("service").innerHTML = "<strong>YOUR RATING FOR SERVICE WAS 2, THANKS</strong> ";
    service = 2;
    cont = cont + 1;
}
function myFunction8() {
    document.getElementById("service").innerHTML = "<strong>YOUR RATING FOR SERVICE WAS 3, THANKS</strong> ";
    service = 3;
    cont = cont + 1;
}
function myFunction9() {
    document.getElementById("service").innerHTML = "<strong>YOUR RATING FOR SERVICE WAS 4, THANKS</strong> ";
    service = 4;
    cont = cont + 1;
}
function myFunction10() {
    document.getElementById("service").innerHTML = "<strong>YOUR RATING FOR SERVICE WAS 5, THANKS</strong> ";
    service = 5;
    cont = cont + 1;
}
  
//functions environment

function myFunction11() {
    document.getElementById("environment").innerHTML = "<strong>YOUR RATING FOR ENVIRONMENT WAS 1, THANKS</strong> ";
    environment = 1;
    cont = cont + 1;
}
function myFunction12() {
    document.getElementById("environment").innerHTML = "<strong>YOUR RATING FOR ENVIRONMENT WAS 2, THANKS</strong> ";
    environment = 2;
    cont = cont + 1;
}
function myFunction13() {
    document.getElementById("environment").innerHTML = "<strong>YOUR RATING FOR ENVIRONMENT WAS 3, THANKS</strong> ";
    environment = 3;
    cont = cont + 1;
}
function myFunction14() {
    document.getElementById("environment").innerHTML = "<strong>YOUR RATING FOR ENVIRONMENT WAS 4, THANKS</strong> ";
    environment = 4;
    cont = cont + 1;
}
function myFunction15() {
    document.getElementById("environment").innerHTML = "<strong>YOUR RATING FOR ENVIRONMENT WAS 5, THANKS</strong> ";
    environment = 5;
    cont = cont + 1;
}

//function rating

function ratingFunction() {
    document.getElementById("rating").innerHTML ="You rated " + food + " stars for food" + "<br>You rated " + service + " stars for service" + "<br>You rated " + environment + " stars for service";
}




