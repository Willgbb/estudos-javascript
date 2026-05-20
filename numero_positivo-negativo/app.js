alert('coloque um numero negativo ou positivo')

let numero = Number(prompt('coloque um numero'));

if (Number.isNaN(numero)) {
    alert('isso não é um numero')
}else if (numero > 0) {
    alert('esse numero é positivo')
}else if (numero < 0) {
    alert('esse numero é negativo')
} else {
    alert('esse numero é zero')
} 
