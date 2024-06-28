let arr = ["anna", "Petro", "anastasia", "IVAN", "ihor"];
console.log(arr);

let newArr = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

console.log(newArr);



