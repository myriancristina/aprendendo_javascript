

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar!");
}
function redirecionar(){
    window.open("https://github.com/myriancristina/");
    //window.location.href = "https://github.com/myriancristina";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}
function load(){
    alert("Página carregada.");
}
function funcaoChange(elemento){
    console.log(elemento.value)

}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar;
function validaIdade(idade){
    var validar;
    if (idade >= 18){
     validar = true
}else{
    validar = false
}
return validar;
   }
   var idade = prompt("Qual sua idade?");
   validaIdade(idade);
   console.log(validar);
*/
   //alert(soma(5, 10));

/*
var d = new Date();
alert(d.getMinutes());

*/

/*
var count;
for(count= 0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
//if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome: "maçã", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Myrian Cristina Silva";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(n1 + n2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));