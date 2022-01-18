// Bubble Sort
// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

// 6	2	7	1	4	Start: compare 6 > 2? Yes
// 2	6	7	1	4	Swap
// 2	6	7	1	4	6 > 7? No (no swap)
// 2	6	7	1	4	7 > 1? Yes
// 2	6	1	7	4	Swap
// 2	6	1	7	4	7 > 4? Yes
// 2	6	1	4	7	Swap
// 2	6	1	4	7	2 > 6? No
// 2	6	1	4	7	6 > 1? Yes
// 2	1	6	4	7	Swap
// 2	1	6	4	7	6 > 4? Yes
// 2	1	4	6	7	Swap
// 2	1	4	6	7	6 > 7? No
// 2	1	4	6	7	2 > 1? Yes
// 1	2	4	6	7	Swap
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	1 > 2? No
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	No swaps; all done; sorted

// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

/*
Understand the Problem
----------------------
- Input:
  - array of strings or numbers to be sorted
- Output:
  - mutated input array with all elements sorted
- Rules:
  - perform a bubble sort
  - sorting should be done in place
  - assume that the array contains two elements
  - 
Examples/Test Cases:
--------------------
- const array4 = [4, -6, 2, 9, 7, 0] -> [-6, 0, 2, 4, 7, 9]
- const array5 = [-4, -6, -1, 0, -3] -> [-6, -4, -3, -1, 0]

Mental Model:
-------------
Loop through the array of numbers, sorting each pair of consecutive numbers until none of the pairs need to be sorted.
During the loop, take a pair of numbers and check if the first one is greater than the second. If it is, swap the numbers. If not, skip to next pair.
Keep repeating until no more swaps are made for the length of the array.

Data Structure:
---------------
- array -> iteration through numbers and swapping (sorting) in place
  
Algorithm:
----------
- loop through the array of elements
  - let swapped be equal to false
  if first element is greater than second element:
    - swap first element with second element
    - swap is equal to true
  - else 
    - swapped is equal to false
- keep until until swapped is finally equal to false
*/

function bubbleSort(array) {
  while (true) {
  	let swapped = false;
  	for (let i = 1; i < array.length; i += 1) {
  		if (array[i - 1] <= array[i]) {
  			continue;
  		}

  		let temp = array[i - 1];
  		array[i - 1] = array[i];
  		array[i] = temp;
  		swapped = true;
  	}

  	if (!swapped) { 
  		break;
  	}
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

const array4 = [4, -6, 2, 9, 7, 0]
bubbleSort(array4);
console.log(array4);    // [-6, 0, 2, 4, 7, 9]

const array5 = [-4, -6, -1, 0, -3] 
bubbleSort(array5);
console.log(array5);    // [-6, -4, -3, -1, 0]