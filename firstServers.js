var http = require("http");

http.createServer(function(request, response){

    response.end("Tell me something good: " + request.url);
}).listen(7000, function(){
    console.log("Server listening on http://localhost:7000");
        
});

http.createServer(function(request, response){
    response.end("Tell me something bad: " + request.url);
}).listen(7500, function(){
        console.log("Server listening on http://localhost:7500");
   
});
