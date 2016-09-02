/**
 * Created by 82546010549 on 22/08/16.
 */
console.log("### FrogJmp ###");

/**
 *
 * @param Array de inteiros( -1000 a 1000) com tamanho entre 2 e 100.000
 */
function solution(X, Y, D){
    return Math.ceil((Y-X)/D);
}



console.log("10, 85 , 30 -> 3:   "+ solution(10,85,30));
