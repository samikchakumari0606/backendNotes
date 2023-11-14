
const http=require("http");


const server=http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("this is home page")
    }
    else if(req.url=="/about"){
        res.end("this is about page")
    }
    else{
        res.writeHead(404)
        res.end("this is error")
    }
    
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("liistening on port 8000")
})