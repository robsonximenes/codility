/**
 * Created by robsonximenes on 23/08/16.
 */
console.log("### MaxCounters ###");

/**
 *
 * @param N qtd de contadores
 * @param A array de inteiros
 */
function solution(N, A){
    var operacaoAnteriorMax = false;
    var max = 0;
    var contadores = [];
    for(var x=0; x<N;x++)contadores[x]=0;
    A.forEach(function(valor){
        if(valor>=1 && valor<=N){
            var i = valor-1;
            contadores[i]++;
            if(contadores[i]>max)
                max = contadores[i];
            operacaoAnteriorMax = false;
        }else if(valor == N+1){
            if(!operacaoAnteriorMax) {
                for (var x = 0; x < contadores.length; x++)contadores[x] = max;
            }
            operacaoAnteriorMax = true;
        }
    });
    return contadores;
}



console.log("5,[3,4,4,6,1,4,4] -> [3, 2, 2, 4, 2]:   "+ solution(5,[3,4,4,6,1,4,4]));
console.log("10,[ -> [11, 11, 11, 4, 2]:   "+ solution(10,[11,11,11,4,2,2,11]));
