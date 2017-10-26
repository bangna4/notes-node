console.log('Starting app');

const fs =  require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//console.log(res);
console.log("result", notes.add(9, -2));
console.log(process.argv);

var command = process.argv[2];
const argv = yargs.argv;

console.log('command', command);
console.log('process', process.argv);
console.log('Yargs', argv);

if(command === 'add')
{
	console.log('adding new note');
	notes.addNote(argv.title, argv.body);
}
else if (command === 'list')
{
	console.log('adding new list');
	notes.getAll();
}
else if (command == 'read')
{
   console.log("reading note");
}
else if( command == 'remove')
{
	console.log('removeing note');
}
else
{
	console.log('command not reconginzed');
}

//fs.appendFile('greeting.txt', `hellow world ${user.username}`);