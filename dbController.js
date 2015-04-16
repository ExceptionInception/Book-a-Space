var Mongoose = require('mongoose');
var Workspaces = require('./models/Workspace.js');
var Reservations = require('./models/Reservation.js');

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

exports.getWorkspacesByAvailability = function(req, res, next) {
    // get reservations by date available
};

exports.createWorkspace = function(req, res, next) {
  Workspaces.create(req.body, function (err, workspace) {
    if (err) {
        return next(err);
    } else {
        res.json(workspace);
    }
  });
};

exports.updateWorkspace = function(req, res, next) {
    Workspaces.findByIdAndUpdate(req.params.id, req.body, function (err, workspace) {
        if (err) {
            return next(err);
        } else {
            res.json(workspace);
        }
    });
};

exports.removeWorkspace = function(req, res, next) {
    Workspaces.findByIdAndRemove(req.params.id, req.body, function(err, workspace) {
        if (err) {
            return next(err);
        } else {
            res.json(workspace);
        }
    });
};

exports.createReservation = function(req, res, next) {
    Reservations.create(req.body, function(err, reservation) {
        if(err) {
            return next(err);
        } else {
            res.json(reservation);
        }
    });
};

exports.getReservations = function(req, res, next) {
    Reservations.find(req.query, function(err, reservations) {
        if (err) {
            return next(err);
        } else {
            res.json(reservations);
        }
  });
};

exports.getReservation = function(req, res, next) {
    Reservations.findById(req.params.id, function(err, reservation) {
        if (err) {
            return next(err);
        } else {
            res.json(reservation);
        }
    });
}

exports.removeReservation = function(req, res, next) {

   var id = String(req.params.id);

    Reservations.findByIdAndRemove(id, req.body, function(err, reservation) {
        if (err) {
            return next(err);
        } else {
            res.json(reservation);
        }
    });
};

exports.updateReservation = function(req, res, next) {
    Reservations.findByIdAndUpdate(req.params.id, req.body, function (err, reservation) {
        if (err) {
            return next(err);
        } else {
            res.json(reservation);
        }
    });
};
