var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
});
console.log(nums);

var funcionarios = [
    {nome: "luiz", idade: 62},
    {nome: "mario", idade: 32},
    {nome: "jose", idade: 22},
    {nome: "bartolomeu", idade: 52},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);