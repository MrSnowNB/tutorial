var http = require("http");

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('error', function(error){
        console.error(err);
    });
    response.on('data',function(data){//don't need an anonymous function *see official answer
        console.log(data);
    });
}); 

/*   var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)*/