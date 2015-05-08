var Mongoose = require('mongoose');

var ReservationSchema = new Mongoose.Schema({
		_id: String,
		workspaceID: String,
		creationDate: {type: Date, default: Date.now},
		dateOf: {type: Date},
		month: String,
		reserverName: String,
		reserverEmail: String,
		agency: String,
		supervisorName: String,
		supervisorEmail: String,
		parkingToken: Boolean,
		status: String,
		parkingCost: Number,
		glCode: String,
		sapFund: String,
		budgetPeriod: String,
		costCenter: String,
		block: String,
		parkingRate: Number
});

module.exports = Mongoose.model('Reservation', ReservationSchema);