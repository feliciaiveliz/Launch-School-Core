/*
Understand the Problem
----------------------
- Input:
  - array of integers
  - K, number to check for in array
- Output:
  - true or false
- Rules:
  - K can be any number
  - array can be empty or contain only integers
  - 
Examples/Test Cases:
--------------------
- 

Mental Model:
-------------


Data Structure:
---------------
- 
  
Algorithm:
----------
- 
*/




function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false; // not sorted
    }
    if (A[0] != 1 && A[n - 1] != K) //  1  3
        return false;
    else
        return true;
}

console.log(solution([1, 1, 2, 3, 3], 2)); // true
console.log(solution([1, 1, 3], 2)); // false
console.log(solution([1, 1, 2, 3], 2)); // true
console.log(solution([1, 2, ]))

