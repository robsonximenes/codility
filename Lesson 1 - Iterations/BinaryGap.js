/*

 A binary gap within a positive integer N is any maximal sequence of consecutive zeros that
 is surrounded by ones at both ends in the binary representation of N.

 For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 The number 529 has binary representation 1000010001 and contains two binary gaps: one of
 length 4 and one of length 3. The number 20 has binary representation 10100 and contains one
 binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

 Write a function:

 function solution(N);
 that, given a positive integer N, returns the length of its longest binary gap.
 The function should return 0 if N doesn't contain a binary gap.

 For example, given N = 1041 the function should return 5, because N has binary
 representation 10000010001 and so its longest binary gap is of length 5.

 Assume that:

 N is an integer within the range [1..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(log(N));
 expected worst-case space complexity is O(1).

 */


function solution(N){
    var sequence = 0;
    var arraySequences = N.toString(2).split("1");
    console.log(N.toString(2));
    console.log(arraySequences);
    for(var x=0; x<arraySequences.length-1; x++){
        var zeroSequence = arraySequences[x];
        if(sequence<zeroSequence.length) sequence = zeroSequence.length;
    }
    return sequence;

}

console.log("BinaryGap: 5 (0) -> "+ solution(5));
console.log("BinaryGap: 1024 (0) -> "+ solution(1024));
console.log("BinaryGap: 6 (0) -> "+ solution(6));
console.log("BinaryGap: 328 (0) -> "+ solution(328));
//console.log("BinaryGap: 9 (2) -> "+ solution(9));
//console.log("BinaryGap: 529 (4) -> "+ solution(529));
//console.log("BinaryGap: 15 (0) -> "+ solution(15));
//console.log("BinaryGap: 1041 (5) -> "+ solution(1041));
console.log("BinaryGap: 2147483647 (?) -> "+ solution(2147483647));
