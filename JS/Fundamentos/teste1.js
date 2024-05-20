var matrizexemplo = [
];
var linhas = 5;
var colunas = 4;

for (i =0; i < linhas; i++){
    matrizexemplo [i] = [];

    var numeroBase = i + 2;

    for (j = 0; j < colunas; j++){
        
        var multiplo = numeroBase * (j+1);
        matrizexemplo [i][j] = multiplo;
    }
}
console.log (matrizexemplo);
//var resultado = matrizexemplo.filter(item => item % 2 == 0);
//console.log (resultado);

//console.log(matrizexemplo);


