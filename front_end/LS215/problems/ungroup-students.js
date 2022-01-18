// // You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

// INPUT:
// - array of objects

// OUTPUT:
// - array of objects

// RULES:
// - group each student with their teacher
// - each object in the result array is a student-teacher pair
// - each object contains 'teacher', 'name' (student) and 'data' about student
// - input will always be array

// DATA STRUCTURES:
// - array of objects -> array of objects
// - elements will be objects (not array object)

ALGORITHM:
- declare answer array
- iterate over the array (mainObj)
  - declare 'teacher' to the value of 'teacher' key
  - access 'data' array: (subObj)
    - declare empty object: 'temp'
    - copy 'teacher' key and value to 'temp'
    - iterate over 'data' array: object
      - copy each key and value to 'temp' 
    - append 'temp' to answer array
- return answer



function ungroupStudents(array) {
  let result = [];
  array.forEach(mainObj => {
    let teacher = mainObj.teacher;
  
    mainObj.data.forEach(subObj => {
      let temp = {};
      temp["teacher"] = teacher;
      
      for (let key in subObj) {
        temp[key] = subObj[key];
      }
      
      result.push(temp);
    });
  });
  
  return result;
}

console.log(ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergencyNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]));

// ➞ [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]

