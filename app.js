console.log('Starting app');

const fs =  require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();

console.log(user);

var res = notes.addNote();



console.log(res);

console.log("result", notes.add(9, -2));
//fs.appendFile('greeting.txt', `hellow world ${user.username}`);