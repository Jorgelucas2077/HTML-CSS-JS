var valores = [8,1,7,2,9];

console.log(valores[2]);

for (var pos = 0; pos < valores.length; pos++){
    console.log("Posição: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW","Yamaha","Honda");

// Calcular a média de todos os numeros de um array

var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];

}

var media = soma/valores.length;
console.log(media);

//splice
var nomes = ["maria","joao","lucas","pedro"];
var novos = nomes.splice(1,2,"luiz","ronaldo");
console.log(nomes);

//unshift
var pais = ["brasil","argentina","colombia"];
pais.unshift("uruguai");
console.log(pais);

//slice
var pessoa = ["eduardo","joana","wallace","rosana"];
var gerente = ["davi","manuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

//concat
var empresa = pessoa.concat(gerente);
console.log(empresa);

//filter
const numbers = [1,2,3,4,8,10,20];
const evens = numbers.filter(item => item %2 === 0);
console.log(evens);

//filter pares

var numeros = [1,2,3,4,5,6,7,8,9,10];
function buscarNumerosPares (value) {
    if (value % 2 == 0)
        return value;
}
var numerosPares = numeros.filter (buscarNumerosPares);
console.log(numerosPares);