 //console.log("HELLO WORLD");
 
/* var acc =0;
 
for (var i=2; i<process.argv.length; i++){
     acc += +process.argv[i];
     
 }
 
console.log(acc);*/

 /*  var fs = require('fs')  
   
   var loc = process.argv[2];
 console.log(fs.readFileSync(loc).toString().split('\n').length - 1)*/


//console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1)


/*var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)*/

var fs = require('fs') 
var file = process.argv[2]  
fs.readFile(file, function (err, contents) {  
  if (err) {
        return console.log(err)
      }
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
    
})
    
    



























