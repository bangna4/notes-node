console.log('Starting notes.js');



var addNote = (title, body) =>  {
	console.log('adding more', title, body);
	return 'new Note';
};


var getAll= () => {
	console.log('getting all notes');
}



module.exports = {
	addNote,
	getAll
}

module.exports.add = (a,b) => {
	return a+b;	
}

