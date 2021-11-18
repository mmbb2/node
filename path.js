const path = require('path')
const fs = require('fs')

console.log(__filename); 
console.log(__dirname);

console.log(path.isAbsolute(__filename)) //The path.isAbsolute() method determines if path is an absolute path.
console.log(path.isAbsolute('a//a'))

console.log(path.dirname(__filename)) //The path.dirname() method returns the directory name of a path

console.log(path.extname(__filename)) //The path.extname() method returns the extension of the path

console.log(path.resolve('test1.txt')) //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

fs.mkdir(path.resolve('static'), (err) => { //Asynchronously creates a directory.
    if (err) throw err;
  });

fs.appendFile('test1.txt', 'test', (err) => { //Asynchronously append data to a file, creating the file if it does not yet exist.
    if (err) throw err;
  });

fs.readFile(path.resolve('test1.txt'), (err, data) => { //Asynchronously reads the entire contents of a file.
  if (err) throw err;
  console.log(data);
});