var express = require('express');
var router = express.Router();

var Mongoose = require('mongoose');
var DBController = require('../dbController.js');
var Workspaces = require('../models/Workspace.js');

router.get('/', function(req, res, next) {
	DBController.getWorkspaces(req,res,next);
});

router.get('/:id', function(req, res, next) {
	DBController.getWorkspaceByID(req, res, next);
});

module.exports = router;