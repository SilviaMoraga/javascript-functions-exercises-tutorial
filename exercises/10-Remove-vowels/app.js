const rapid = (myString) => {
    let myArray = [];
    for (let letter of myString.toLowerCase()){
        myArray.push('a','e','i','o','u');
    }
    return myArray.toUpperCase();
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
