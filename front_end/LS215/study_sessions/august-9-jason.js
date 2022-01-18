function tillTotal(numberOfTills) {
  let tills = {};
  
  for (let index = 0; index < numberOfTills; index += 1) {
    tills[`till${index + 1}`] = 0;
  }
  
  return tills;
}

// tills: { 'till 1': 0, 'till 2': 0 }

function queueTime(customers, numberOfTills) {
  let tills = tillTotal(numberOfTills);
  
  customers.forEach(customer => {
    // find the lowest value in the tills
      // get the values of the tills (Object.values)
      // find the minimum value (Math.min)
      // find the index of the minimum value in the values array (indexOf)
      // assign this value plus 1 to 'tillNumber' variable
    let tillsArray = Object.values(tills);
    let tillNumber = tillsArray.indexOf(Math.min(...tillsArray)) + 1;
    // console.log(tillNumber);
    // put the current customer in that till
    tills[`till${tillNumber}`] += customer;
    // the result will be an object { till1: 10, till2: 8 }
  });
  
  // return the value of the till with the highest value
    // tills from line 64
  return Math.max(...Object.values(tills));
}

console.log(queueTime([5,3,4], 1)); // 12
// should return 12
// because when there is 1 till, the total time is just the sum of the times

//          1  2  3  4  5   6  7  8   9 10 11 12
// Till 1  (-  -  -  -  -) (-  -  -) (-  -  -  -)

console.log(queueTime([10,2,3,3], 2)); // 10
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

//          1  2  3  4  5  6  7  8  9 10 
// Till 1  (-  -  -  -  -  -  -  -  -  -)
// Till 2  (-  -)(-  -  -)(-  -  -)

console.log(queueTime([2,3,10], 2)); // 12
// should return 12

//          1  2   3  4  5  6  7  8  9 10 11 12
// Till 1  (-  -) (-  -  -  -  -  -  -  -  -  -)
// Till 2  (-  -   -)

console.log(queueTime([10,2,3,3, 4], 2)); // 12
console.log(queueTime([1, 3, 4, 12], 3)); // 13

//          1   2  3  4  5  6  7  8  9 10 11 12 13
// Till 1  (-) (-  -  -  -  -  -  -  -  -  -  -  -)
// Till 2  (-   -  -)
// Till 3  (-   -  -  -)
console.log(queueTime([1], 1));