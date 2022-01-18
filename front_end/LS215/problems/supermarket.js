// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

/*
Understand the Problem
----------------------
- Input:
  - array of integers
  - number: amount of tills
- Output:
  - number: total time required for all customers to check out
- Rules:
  - array will always contain positive integers
  - n will always be a positive number
  - if the array is empty, return 0
Examples/Test Cases:
--------------------
console.log(queueTime([10,2,3,3], 2)); // 10
// till 1: - - - - - - - - - -  
// till 2: - - - - - - - - 

console.log(queueTime([2,3,10], 2)); // 12
// till 1: - - - - - - - - - - - -  
// till 2: - - - 

console.log(queueTime([3, 5, 2, 1, 3], 3)); // 6
// till 1: - - - - - - 
// till 2: - - - - - 
// till 3: - - - 

Mental Model:
-------------
Create object that will hold tills as keys and numbers as values. Start off the tills with 0 to represent 0 customers. Distribute the customers equally across all the tills until every till has a number (customer). Find the lowest number between all till values. Keep track of a count and add number to it if it is the lowest number. Subtract the lowest value from all values. Add the next number to the till that has a value of 0. If there are no more customers, find the highest number in the tills. Add that number to the count. Return count.

{ till1: 0, till2: 0 }
{ till1: 0, till2: 0 } 
count = 10

{ till1: 0, till2: 0 }
{ till1: 9, till2: 0 } 1 
count = 12

{ till1: 0, till2: 0 }
{ till1: 3, till2: 2, till3: 0 } 1 
count = 6
Data Structure:
---------------
- object -> tills as keys and number as value (starting at 0)
  
Algorithm:
----------
- define 'tills' as {}
- define 'count' as 0
- update 'tills' to reflect the till number and it's value
  - slice out 'n' number of customers from array and save to 'firstCustomers'
  - iterate over the array with index and update the object:
    - tills[`till ${index + 1}`] = first number
- Iterate over the length of the rest of the array of customers:
  - check if more than one till is zero
    - if so, iterate over the tills and put a customer into the first empty till
    - shift off current customer
    - for the next tills that are 0, add the customer to the till and shift off until all tills are full
  - find the minimum number in the value of the Object
    - find min of object values (of tills)
    - add the min value to count
    - subtract min value from all values
    - find the value that is equal to 0
    - make the new value of that till the current number in the array
- When customers array is empty, find the highest number value in 'till's object and add the value to 'count'
- return 'count'
*/

function queueTime(customers, n) {
  let tills = {};
  let count = 0;
  let firstCustomers = customers.splice(0, n);
  if (customers.length === 0) return 0;
  
  firstCustomers.forEach((customer, index) => {
    tills[`till${index + 1}`] = customer;
  });
  
  for (let i = 0; i < customers.length; i += 1) {
    let min = Math.min(...Object.values(tills));
    count += min;
    
    Object.keys(tills).forEach(till => {
      tills[till] -= min;
    });
    
    if (Object.values(tills).filter(number => number === 0).length > 1) {
      Object.keys(tills).forEach(till => {
        if (tills[till] === 0) {
          tills[till] = customers.shift();
        }
      });
    } else {
      Object.keys(tills).forEach(till => {
        if (tills[till] === 0) {
          tills[till] = customers[i];
        }
      });
    }
  };
 
  count += Math.max(...Object.values(tills));
  return count;
}

console.log(queueTime([], 1));              // 0
console.log(queueTime([5,3,4], 1));         // 12 
console.log(queueTime([10,2,3,3], 2));      // 10
console.log(queueTime([2,3,10], 2));        // 12
console.log(queueTime([3, 5, 2, 1, 3], 3)); // 6
console.log(queueTime([2,2,3,3,4,4], 2));   // 9
console.log(queueTime([2,1,1,3,3,4,4], 3));   // 8 
console.log(queueTime([1,2,3,4,5], 100)); // 5 
// { till1: 0, till2: 2, till3: undefined } [4, 4]
// count = 8

function queueTime(customerQueue, tills) {
  if (tills === 1) return getTotalTime(customerQueue);
  let tillsArr = Array(tills).fill(0);

  customerQueue.forEach((customer, idx) => {
    if (idx > tillsArr.length - 1) {
      let leastTime = Math.min(...tillsArr);
      let tillNumber = tillsArr.indexOf(leastTime);
      tillsArr[tillNumber] += customer;
    } else {
      tillsArr[idx] += customer;
    }
  });

  let longestTime = Math.max(...tillsArr);

  return longestTime;
}

function getTotalTime(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}