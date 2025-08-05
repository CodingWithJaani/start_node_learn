let http = require("http");
const port = 3000;

http.createServer(function (req, res){
    res.writeHead(200, {"content-type":"text/html"});
    res.end("Hello Raja Jaani!");
}).listen(port, () => {
    console.log("server is running")
});

