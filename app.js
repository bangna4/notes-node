console.log('Starting app');

const fs =  require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
var user = os.userInfo();

console.log(user);
console.log(_.isString(true));
console.log(_.isString("dffsd"));

var filteredArray = _.uniq(['nik', '1', 'nik',1,3,2,2]);

console.log(filteredArray);

var res = notes.addNote();



console.log(res);

console.log("result", notes.add(9, -2));
//fs.appendFile('greeting.txt', `hellow world ${user.username}`);