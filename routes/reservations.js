var express = require('express');
var router = express.Router();
var DBController = require('../dbController.js');

router.get('/', function(req, res, next) {
	DBController.getReservations(req, res, next);
});

router.get('/:id', function(req, res, next) {
	DBController.getReservation(req, res, next);
})

router.post('/', function(req, res, next) {
	DBController.createReservation(req, res, next);
});

router.delete('/:id', function(req,res, next) {
	DBController.removeReservation(req, res, next); 
});


module.exports = router;