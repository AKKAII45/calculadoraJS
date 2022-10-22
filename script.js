function pegarValor(x) {
    console.log("")
    console.log(x)
	document.getElementById('Result').innerHTML += x;
}

function limpa() {
	document.getElementById('Result').innerHTML = "";
}

function CResultado() {
	var result = eval(document.getElementById('Result').innerHTML);
	document.getElementById('Result').innerHTML = result;
}


var zero = document.getElementById('0');
var um = document.getElementById('1');
var dois = document.getElementById('2');
var tres = document.getElementById('3');
var quatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var sete = document.getElementById('7');
var oito = document.getElementById('8');
var nove = document.getElementById('9');

var soma = document.getElementById('soma');
var menos = document.getElementById('menos');
var dividir = document.getElementById('dividir');
var multiplicar = document.getElementById('multiplicar');
var igual = document.getElementById('igual');
var deleteN = document.getElementById('Delete');




zero.addEventListener("click", function(){
    pegarValor(0);
})
um.addEventListener("click", function(){
    pegarValor(1);
})
dois.addEventListener("click", function(){
    pegarValor(2);
})
tres.addEventListener("click", function(){
    pegarValor(3);
})
quatro.addEventListener("click", function(){
    pegarValor(4);
})
cinco.addEventListener("click", function(){
    pegarValor(5);
})
seis.addEventListener("click", function(){
    pegarValor(6);
})
sete.addEventListener("click", function(){
    pegarValor(7);
})
oito.addEventListener("click", function(){
    pegarValor(8);
})
nove.addEventListener("click", function(){
    pegarValor(9);
})
soma.addEventListener("click", function(){
    pegarValor("+");
})
menos.addEventListener("click", function(){
    pegarValor("-");
})
multiplicar.addEventListener("click", function(){
    pegarValor("*");
})
dividir.addEventListener("click", function(){
    pegarValor("/");
})
ponto.addEventListener("click", function(){
    pegarValor(".");
})


igual.addEventListener("click", function(){
    CResultado();
})

deleteN.addEventListener("click", function(){
    limpa()
})