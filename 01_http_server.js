//Http Server
//"http" is a predefined module in nodejs, used to create the http server
//no need to download http module
//http module already available along with the node software

//import module (http module)
//require() function used to import the modules
let http = require("http");

//createServer() is the function in http module, helps to create the http server
let server = http.createServer((req,res)=>{
    res.write("Welcome to http server");
    res.end();
});

server.listen(8080);
console.log("server listening the port no.8080");
