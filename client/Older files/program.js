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


/*var fs = require('fs') 
var file = process.argv[2]  
fs.readFile(file, function (err, contents) {  
  if (err) {
        return console.log(err)
      }
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
    
})   */




/*var fs = require('fs')
var path = require('path')
 
var folder = process.argv[2]
var ext = '.' + process.argv[3]
 
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})*/
/*

var fs = require('fs')
var path = require('path')
 
var dir = process.argv[2]
var filterStr = process.argv[3]
 
function getFiles(dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
 
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
 
    callback(null, list)
  })
}
 
getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})
*/



















