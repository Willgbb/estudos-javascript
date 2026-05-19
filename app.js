alert('Ola qual seria o dia de hoje?');
var dia = prompt('Digite dia da semana:');

dia = dia.toLowerCase();
dia = dia.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
dia = dia.charAt(0).toUpperCase() + dia.slice(1);

let fimDeSemana = ['Domingo', 'Sabado'];
let diaSemana = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta'];

if (fimDeSemana.includes(dia)){
    alert('Hoje é fim de semana, aproveite para descansar!');
} else if (diaSemana.includes(dia)){
    alert('Hoje é dia de semana, vá trabalhar!');
} else {
    alert('Dia inválido!');
}