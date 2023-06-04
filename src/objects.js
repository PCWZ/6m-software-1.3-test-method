// Declaring an empty object
/*let empty = {};

// Initializing object with default value
const person = {
    name:"John Doe",
    yearOfBirth: 1987
}
console.log("person", person);

// Retrieve the value of "yearOfBirth" property
console.log("I am born in", person.yearOfBirth);

// Looping an object
for(let key in person){
    console.log("key is", key, "and value is", person[key]);
}
*/

const me = {
    fullName:"Parry Chua",
    occupation:"Software Developer",
    yearOfBirth: 2000,
    hobbies: ["playing games","badminton","movie"]

}


for(let key in me){
    console.log("key is", me, "and value is", me[key]);
}