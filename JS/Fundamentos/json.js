var json = {
    nome: 'jorge',
    profissao: 'dev',
    cidade: 'rj'
};

for (var propriedade in json){
    console.log(json[propriedade]);
}