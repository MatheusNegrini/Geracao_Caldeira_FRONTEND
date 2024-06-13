alert("Bem-vindo ao jogo do Número Secreto");
let chute
let contagemDeChutes =0;
let numerosPossiveis = 100;
let numeroSecreto = parseInt(Math.random() * numerosPossiveis + 1);

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numerosPossiveis}`);
    contagemDeChutes ++;
  if (chute > numeroSecreto) {
    alert(`Você errou, o Número Secreto é menor que ${chute}`);
  }  else if (chute < numeroSecreto) {
    alert(`Você errou, o Número Secreto é maior que ${chute}`);
    } else {
    alert(`Você acertou! O Número Secreto é ${chute}`);
    }
}

alert(`Parabéns você acertou na ${contagemDeChutes}ª tentativa`);
