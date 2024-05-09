var numero = 22;

function par(x) { return x % 2 == 0};
function primo(x) { return false};

if (par(numero)) {
    console.log('é par');
} else if (primo(numero)){
    console.log ('é primo');
} else {
    console.log('é impar');
}