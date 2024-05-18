var produtos = [
    {id: 1,descricao: "SmartPhone", Categoria: "Eletronico"},
    {id: 2,descricao: "Notebook", Categoria: "Eletronico"},
    {id: 3,descricao: "Geladeira", Categoria: "Eletrodomestico"},
    {id: 4,descricao: "Freezer", Categoria: "Eletronico"},
    {id: 5,descricao: "Sofá", Categoria: "Movel"},
    {id: 6,descricao: "Cama", Categoria: "Movel"},
    {id: 7,descricao: "Cadeira", Categoria: "Movel"},
    {id: 8,descricao: "TV", Categoria: "Eletronico"}

]
function retornaEletronico (value){
    if(value.Categoria == "Eletronico")
        return value;
}
var produtosEletronico = produtos.filter(retornaEletronico);
produtosEletronico.forEach(produtoEletro => {
    console.log(produtoEletro);
})
