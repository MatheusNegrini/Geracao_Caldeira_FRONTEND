let listaDeNumerosSorteados =[];


let numeroSecreto = numeroAleatorio();
let numerosPossiveis = 10;
let tentativas = 1;

function mostrarTextoNaTela(tag, texto){
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}


function exibirMensagemInicial(){
mostrarTextoNaTela('h1', 'Jogo do número secreto');
mostrarTextoNaTela('p', `Tente adivinhar o número secreto de 1 a ${numerosPossiveis}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
   if (chute == numeroSecreto) {
    mostrarTextoNaTela(`h1`,`Acertou!`);
    mostrarTextoNaTela('p', `Parabéns! Você descobriu o número secreto com ${tentativas}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else if (chute > numeroSecreto) {
    mostrarTextoNaTela('h1', 'Errou!');
    mostrarTextoNaTela('p','O número secreto é menor');
   }else{
    mostrarTextoNaTela('h1', 'Errou!');
    mostrarTextoNaTela('p','O número secreto é maior');
   }
   tentativas ++;
   limparCampo();
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    
    let quantidadeDeNumerosPossiveis = listaDeNumerosSorteados.length;
    if(quantidadeDeNumerosPossiveis == numerosPossiveis){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else{
        listaDeNumerosSorteados.push = numeroEscolhido;
        return numeroEscolhido; 
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    tentativas = 1;
    numeroSecreto = numeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
