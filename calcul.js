// var
var ecran = document.getElementById("ecran");
var numChar;
var currentChar, previousChar;
var operatons = ['+', '-', '*', '/', '.'];
//function

function clearscreen() {
    ecran.value = "";
}

function display(c) {
    ecran.value += c;
    numChar = ecran.value.length;
    currentChar = c;
    getpreviousChar();
}

function operate() {
    ecran.value = eval(ecran.value);
}

function back() {
    ecran.value = ecran.value.substr(0, ecran.value.length - 1);
}

function getpreviousChar() {
    previousChar = ecran.value.substring(numChar - 2, numChar - 1);
    double();
}

function double() {
    if (operatons.includes(previousChar) && operatons.includes(currentChar)) {
        if (previousChar == currentChar) {
            deleteChar();
        } else {
            remplaceoperate();
        }
    }
}

function remplaceoperate() {
    ecran.value = ecran.value.slice(0, numChar - 2) + ecran.value.slice(numChar - 1);

}

function deleteChar() {
    ecran.value = ecran.value.substring(0, numChar - 1);
}