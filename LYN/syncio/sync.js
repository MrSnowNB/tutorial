 var fs = require('fs');
 
 var newLineFile = fs.readFileSync(process.argv[2],'utf8');//utf8 ensures we get a string avoiding the need for toString
 
 console.log(newLineFile.match(/\n/g).length);//match returns an array with each instance of th specified (regEx)
 
 