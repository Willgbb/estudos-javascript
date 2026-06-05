let saldoreal = 0;

alert(`bom dia, o saldo da sua conta é de R$${saldoreal}`);

saldoreal = prompt(`quanto deseja depositar?`);

if (isNaN(saldoreal) || saldoreal <= 0) {
    alert('valor inválido');
} else {
    alert(`seu saldo é: R$${saldoreal}`);
}   
