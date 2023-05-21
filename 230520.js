let superObj = {super: "I'm a superman"}
// let subObj = {};
// subObj.__proto__ = superObj;

// let subObj = Object.create(superObj);
let subObj = Object.create(superObj);
subObj.sub = "test"

console.log(subObj.sub);