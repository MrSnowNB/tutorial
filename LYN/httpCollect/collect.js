/*var http = require("http");
var concat = require("concat-stream");

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
   response.on('error',console.error(err));
   var concatBuffer = concat(function(buffer){
      console.log(buffer.length);
      console.log(buffer);
   })
   response.pipe(concatBuffer);
});*/

  var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
     (bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
