console.log("### Frog ###");

/**
 *
 * @param N qtd de folhas
 * @param A array de inteiros
 */
function solution(N, A){
    var time = -1;
    var folhas = {};
    var folhasEncontradas = 0;

    for(var indice=0; indice<A.length; indice++) {
        if(!folhas[A[indice]]) {
            folhas[A[indice]] = indice;
            if (indice > time) time = indice;
            folhasEncontradas++;
        }
        if(folhasEncontradas==N) {
            break;
        }
    }
    if(Object.keys(folhas).length!=N)
        time = -1;

    return time;
}


console.log("3,[1,1,2] -> -1:   "+ solution(3,[1,1,2]));
console.log("5,[3,4,4,5,1,2,4] -> 5:   "+ solution(5,[3,4,4,5,1,2,4]));
console.log("3,[1,2,3] -> 2:   "+ solution(3,[1,2,3]));
console.log("5,[1,2,3,3,4,4,5,1,2,4,3,4,4,5,1,2,4,3,4,4,5,1,2,4] -> 6:   "+ solution(5,[1,2,3,3,4,4,5,1,2,4,3,4,4,5,1,2,4,3,4,4,5,1,2,4]));
