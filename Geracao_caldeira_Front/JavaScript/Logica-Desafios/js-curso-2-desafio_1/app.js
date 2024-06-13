let tituloH1 = document.querySelector('h1');
tituloH1.textContent = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Qual cidade você foi no Brasil?');
    alert (`Fui em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    alert('Bem-vindo a função soma do Projeto');
    let primeiroNumero = prompt('Digite o primeiro número a ser somado: ');
    let segundoNumero = prompt('Digite o segundo número a ser somado: ');
    let soma = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
    alert (`A soma dos números é: ${soma}`);
}