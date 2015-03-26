var Mongoose = require('mongoose');
var Workspaces = require('./models/Workspace.js');

Mongoose.connect('mongodb://localhost/bookaspace', function(err) {
    if(err) {
        console.log('DB connection error', err);
    } else {
        console.log('DB connection successful');
    }
});

exports.getWorkspaces = function(req, res, next) {
	Workspaces.find(req.query, function (err, workspaces) {
    	if (err) {
    		return next(err);
    	} else {
    		res.json(workspaces);
    	}
  });
};

exports.getWorkspaceByID = function(req, res, next) {
  Workspaces.findById(req.params.id, function (err, workspace) {
    if (err) {
    	return next(err);
    } else {
    	res.json(workspace);
    }
  });
};

// Add sanitization
exports.createWorkspace = function(req, res, next) {
  Workspaces.create(req.body, function (err, workspace) {
    if (err) {
        return next(err);
    } else {
        res.json(workspace);
    }
  });
};

// Add sanitization 
exports.updateWorkspace = function (req, res, next) {
    Workspaces.findByIdAndUpdate(req.params.id, req.body, function (err, workspace) {
        if (err) {
            return next(err);
        } else {
            res.json(workspace);
        }
    });
};

// Add santization
exports.removeWorkspace = function (req, res, next) {
    Workspaces.findByIdAndRemove(req.params.id, req.body, function (err, workspace) {
        if (err) {
            return next(err);
        } else {
            res.json(workspace);
        }
    });
};