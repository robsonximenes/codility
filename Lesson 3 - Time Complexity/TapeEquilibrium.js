console.log("### TapeEquilibrium ###");

/**
 *
 * @param Array de inteiros( -1000 a 1000) com tamanho entre 2 e 100.000
 */
function solution(A){
    var result = null;
    var somaA = A[0];
    var somaB = 0;
    for(var x=1; x<A.length; x++){
        somaB+=A[x];
    }
    result = Math.abs(somaA - somaB);
    for(var x=1; x<A.length-1; x++){
        somaA+=A[x];
        somaB-=A[x];
        var diff = Math.abs(somaA - somaB);
        if(diff<result) result = diff;
    }
    return result;
}



console.log("[3,1,2,4,3] -> 1:   "+ solution([3,1,2,4,3]));
console.log("[-1000,50,500,100,-200,-400,900] -> 650:   "+ solution([-1000,50,500,100,-200,-400,900]));

