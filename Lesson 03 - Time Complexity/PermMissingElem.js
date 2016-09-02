/**
 * Created by 82546010549 on 22/08/16.
 */
console.log("### PermMissingElem ###");

function solution(A){
    var n = A.length+1;
    var expected = (n*(n+1))/2;
    var total = 0;
    A.forEach(function(x){
        total+=x;
    });
    return expected - total;
}


console.log("[2,3,1,5] -> 4:   "+ solution([2,3,1,5]));