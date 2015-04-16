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

router.get('/available' function(req, res, next) {
	DBController.getWorkspacesByAvailability(req, res, next);
});

router.post('/', function(req, res, next) {
	DBController.createWorkspace(req, res, next);
});

router.put('/:id', function(req, res, next) {
	DBController.updateWorkspace(req, res, next);
});

router.delete('/:id', function(req, res, next) {
	DBController.removeWorkspace(req, res, next);
});

module.exports = router;