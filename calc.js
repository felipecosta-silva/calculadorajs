// Criando uma variável para capturar o elemento
// do HTML pelo Id. Este elemento mostrará os valores no display.
let inputResultado = document.getElementById("inputDisplayResultado");

let calculo = {
    primeiroValor: 0,
    segundoValor: 0,
    funcaoParaCalcular: null
};

//Adicionar evento para iniciar quando a janela carregar
Window.addEventListener("load", function(){
    atribuirEventos();
})

//Atribuir eventos para os botões da calculadora
function atribuirEventos(){
    document.getElementById("btnvalor0").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor1").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor2").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor3").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor4").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor5").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor6").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor7").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor8").addEventListener("click", inserirNumero);
    document.getElementById("btnvalor9").addEventListener("click", inserirNumero);
}

//Inserir um número no display da calculadora
function inserirNumero(){
    console.log("Botão Clicado");
}