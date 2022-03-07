// var
var ecran = document.getElementById("ecran");
var numChar;
//function

function clearscreen() {
    ecran.value = "";
}

function display(c) {
    ecran.value += c;
    numChar = ecran.value.length;
}

function calculate() {
    ecran.value = eval(ecran.value);
}

function back() {
    ecran.value = ecran.value.substr(0, ecran.value.length - 1);
}