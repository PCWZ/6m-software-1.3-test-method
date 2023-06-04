// Declaring an empty array
/*let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}
*/

let grades = [100, 75, 68, 95, 43];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] > 75) {
    console.log("Your grade of", grades[i], " is a Pass");
    
  } else {
    console.log("Your grade of", grades[i], " is a Fail");
  }
}
