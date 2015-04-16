var express = require('express');
var router = express.Router();
var DBController = require('../dbController.js');

router.get('/', function(req, res, next) {
 DBController.getReservationByDate(req,res,next);
});

module.exports = router;

