
function solution(A){
    var odd = 0;
    A.forEach(function(n){
        odd = odd ^ n;
    })
    return odd;
}

console.log(solution([9,3,9,3,9,7,9]));