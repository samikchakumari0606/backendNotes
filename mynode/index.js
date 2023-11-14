const fs= require("fs");
const path=require("path");
const dirPath=path.join(__dirname,"CRUD");

//sync

// fs.mkdirSync("CRUD");//create folder

// fs.writeFileSync(`${dirPath}/text.txt`,"this is creating file");//create file

// let myfile=fs.readFileSync(`${dirPath}/mytext.js`);//read file
// let orgFile=myfile.toString()
// console.log(orgFile);

// fs.appendFileSync(`${dirPath}/mytext.js`,"this is appended data");//update file text

// fs.unlinkSync(`${dirPath}/mytext.js`)//delete file

// fs.renameSync(`${dirPath}/text.txt`,"CRUD/mytext.js");// file rename


//async
//create file
fs.writeFile(`${dirPath}/text.js`,"this is my text",(err)=>{
    console.log("file is created")
})

//read file
fs.readFile(`${dirPath}/text.js`,"utf-8",(err,item)=>{
    console.log(item)
})

//update file
fs.appendFile(`${dirPath}/text.js`," this is appended data",(err)=>{
    console.log("appended")
})

//delete file
fs.unlink(`${dirPath}/text.js`,(err)=>{
    console.log("deleted")
})




