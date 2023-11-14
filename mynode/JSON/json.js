
const http=require("http");

const mydata=require("./next")
let server=http.createServer((req,res)=>{
      res.writeHead(200,{"Content-type":"application\json"});
      res.write(JSON.stringify(mydata));
      res.end();
})

server.listen(8000,(err)=>{
    console.log("staring")
})

