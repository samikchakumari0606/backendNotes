

const path=require("path");

//path
// console.log(path.dirname("C:/Users/HP/Desktop/Core_modules/PathModule/index,js"));

//file extention name
// console.log(path.extname("C:/Users/HP/Desktop/Core_modules/PathModule/index,js"));

//basename
console.log(path.basename("C:/Users/HP/Desktop/Core_modules/PathModule/index,js"));

//root folder
console.log(path.parse("C:/Users/HP/Desktop/Core_modules/PathModule/index,js"));

//exact root folder
const mypath=path.parse("C:/Users/HP/Desktop/Core_modules/PathModule/index,js");
console.log(mypath.root);