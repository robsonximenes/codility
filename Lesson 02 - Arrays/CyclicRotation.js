/**
 * Created by robsonximenes on 19/08/16.
 */


function solution(A, K){
    if(K > A.length)
        K = K % A.length;
    return A.splice(A.length-K,K).concat(A);
}


console.log(solution([3, 8, 9, 7, 6],1));
console.log(solution([3, 8, 9, 7, 6],2));
console.log(solution([3, 8, 9, 7, 6],3));
console.log(solution([3, 8, 9, 7, 6],4));
console.log(solution([3, 8, 9, 7, 6],5));
console.log(solution([3, 8, 9, 7, 6],6));
console.log(solution([3, 8, 9, 7, 6],7));
console.log(solution([3, 8, 9, 7, 6],8));
console.log(solution([3, 8, 9, 7, 6],10));
console.log(solution([3, 8, 9, 7, 6],11));