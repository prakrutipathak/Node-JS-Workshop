var http = require("http");
var a=10;
var b=20;
var c=a+b;
var msg = "sum is"+c;
if (c==30)
{
    msg+="<br/>c is 30";
}
else
{
    msg+="sum is not 30";

}
http.createServer(function(request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(msg);
}).listen(8081);
console.log('Server listening on http://localhost:8081/');