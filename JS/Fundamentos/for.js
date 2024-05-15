var vetor = [1, 2, 3, 4, 5];
var valor = 3;

//for (var i = 0; i < vetor.length; i++) 
    //{
       // console.log(i);
        //console.log(vetor[i]);
    //}

for (var i in vetor ){
    if (i == valor) break
    console.log(i)
}