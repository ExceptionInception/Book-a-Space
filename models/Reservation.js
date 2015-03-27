var Mongoose = require('mongoose');

var ReservationSchema = new Mongoose.Schema({
		_id: String,
		workpaceId: String,
		creationDate: {type: Date, default: Date.now},
		date: {type: Date},
		block: String,
		author: String,
		groupId: Number,
		status: String
});

module.exports = Mongoose.model('Reservation', ReservationSchema);