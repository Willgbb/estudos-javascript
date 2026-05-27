let Pontuacao = 0;

alert("Bem-vindo ao jogo de perguntas e respostas! Responda corretamente para ganhar pontos.");

let pergunta1 = prompt("Qual é a capital da França? \n a) Paris \n b) Londres \n c) Roma");
if (pergunta1.toLowerCase() === "a") {
    Pontuacao += 20;
}

let pergunta2 = prompt("Qual é o maior planeta do sistema solar? \n a) Terra \n b) Júpiter \n c) Saturno");
if (pergunta2.toLowerCase() === "b") {
    Pontuacao += 30;
}       

let pergunta3 = prompt("Quem pintou a Mona Lisa? \n a) Vincent van Gogh \n b) Pablo Picasso \n c) Leonardo da Vinci");
if (pergunta3.toLowerCase() === "c") {
    Pontuacao += 50;
}   

if (Pontuacao >= 100) {
    alert("Parabéns! Você venceu! Sua pontuação: " + Pontuacao);
}else {
    alert("Não desanime! Continue estudando e tentando! Sua pontuação: " + Pontuacao);
}
