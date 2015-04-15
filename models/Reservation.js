var Mongoose = require('mongoose');

var ReservationSchema = new Mongoose.Schema({
		_id: String,
		workspaceID: String,
		creationDate: {type: Date, default: Date.now},
		dateOf: {type: Date},
		block: String,
		reserverName: String,
		reserverEmail: String,
		agency: String,
		supervisorName: String,
		supervisorEmail: String,
		parkingToken: Boolean,
		status: String,
		parkingCost: Number,
		glCode: Number,
		sapFund: Number,
		budgetPeriod: String,
		costCenter: String
});

module.exports = Mongoose.model('Reservation', ReservationSchema);