var nome = "Rafael Galleani";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
var n1 = 5;
var n2 = 10;

var lista = ["maça", "pêra", "laranja"];

// alert("meu primeiro js");

// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);

console.log(nome + " tem " + idade + " anos");
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log(n1 + n2);

console.log(lista);
console.log(lista[1]);

lista.push("uva"); //add
lista.pop(); //remove
//lista.pop(); //remove

console.log(lista);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
console.log(lista.length); //count

console.log(lista.reverse()); //inverte a ordem

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.cor);

var frutaX = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutaX);
console.log(frutaX[1].cor);

console.log("");

/*
var nidade = prompt("Qual a sua idade?");
if (nidade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
};
*/

var count = 0;
while (count <=5) {
    console.log("count = " + count);
    count++;
}
console.log("");
for (count = 0; count <=5; count++) {
    console.log("count = " + count);
}

var d = new Date();
console.log(d);

console.log(d.getDate().toString().length);

var dia = (d.getDate().toString().length == 1 ? "0" : "");
dia = dia + d.getDate().toString();
var mes = (d.getMonth().toString().length == 1 ? "0" : "");
mes = mes + (d.getMonth()+1).toString();
var ano = d.getFullYear().toString();

console.log(dia + "|" + mes + "|" + ano);

console.log("x"+"z" + 1429 + "-" + 1519);

console.log("");

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(5,10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = 18; //prompt("Qual a sua idade?");
var resposta = "";
if (validaIdade(idade)) {
    resposta = "Maior de idade";
} else {
    resposta = "Menor de idade";
}
console.log(resposta + " " + idade + " anos");

console.log("");

//

function clicou() {
    console.log("Obrigado por clicar");

    var elem = document.getElementById("agradecimento");

    elem.innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    console.log("Redirecionar");

    //window.open("http://globallabs.academy/"); //abre nova aba do browser
    //window.location.href = "http://globallabs.academy/"; //redireciona a página atual

    //abre numa nova janela do browser
    var newWindow = open("http://globallabs.academy/", "", "width=" + screen.availWidth + ", height=" + screen.availHeight + "");
}

//

function trocar(elem) {
    elem.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elem) {
    elem.innerHTML = "Passe o mouse aqui";
}

//

function load() {
    console.log("Página carregada");
}

function funcaoChange(elem) {
    console.log(elem.value);
}

