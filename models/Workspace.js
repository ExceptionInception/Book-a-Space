var Mongoose = require('mongoose');

var WorkspaceSchema = new Mongoose.Schema({
	_id: String,
	type: String,
	agency: String,
	building: String,
	floor: Number,
	room: String,
	size: String,
	amRate: Number,
	pmRate: Number,
	weekly: Number,
	monthly: Number,
	inventory: Array
	});

module.exports = Mongoose.model('Workspace', WorkspaceSchema);