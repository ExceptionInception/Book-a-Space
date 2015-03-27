var should = require('should'); 
var assert = require('assert');
var request = require('supertest');

describe('Routing', function(){
	var url = 'http://localhost:3000';
	var workspacePath = '/api/workspaces/';
	var reservationsPath = '/api/reservations/';


	describe('Workspace API', function(){
		var workspace = {
			_id: 'testspace',
			type: 'room',
			agency: 'testagency',
			building: 'somebuilding',
			floor: 13,
			room: 'north',
			size: '10 sq ft',
			amRate: 1,
			pmRate: 2,
			weekly: 3,
			monthly: 4,
			inventory: [],
			reservations: []
		};

		it('Retrieve a collection of workspaces', function(done) {
			request(url)
				.get(workspacePath)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						throw err;
					};
					res.body.length.should.be.above(0);
					done();
				});
		});

		it('Create a workspace', function(done) {
			request(url)
				.post(workspacePath)
				.send(workspace)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if(err) {
						throw err;
					}
					done();
				});
		});

		it('Retrieve a workspace', function(done) {
			request(url)
				.get(workspacePath + workspace._id)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.body.type.should.equal(workspace.type);
					res.body.agency.should.equal(workspace.agency);
					res.body.building.should.equal(workspace.building);
					res.body.floor.should.equal(workspace.floor);
					res.body.room.should.equal(workspace.room);
					res.body.size.should.equal(workspace.size);
					res.body.amRate.should.equal(workspace.amRate);
					res.body.pmRate.should.equal(workspace.pmRate);
					res.body.weekly.should.equal(workspace.weekly);
					res.body.monthly.should.equal(workspace.monthly);
					res.body.inventory.should.be.empty;
					done();
				});
		});

		it('Return error trying to create duplicate workspace', function(done) {
			request(url)
				.post(workspacePath)
				.send(workspace)
				.expect(500)
				.end(function(err, res) {
					if (err) {
						throw err;
					}
					done();
				});
		});

		it('Update a workspace', function(done) {
			request(url)
				.put(workspacePath + workspace._id)
				.send({type: 'office', floor: 1337})
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						throw err;
					}
					done();
				});
		});

		it('Check an updated workspace', function(done) {
			request(url)
				.get(workspacePath + workspace._id)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.body.type.should.equal('office');
					res.body.floor.should.equal(1337);
					done();
				});
		});

		it('Remove a workspace', function(done) {
			request(url)
				.delete(workspacePath + workspace._id)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						throw err;
					}
					done();
				});
		});
	});
	
	describe('Reservations API', function() {
		var testWorkspace = {
			_id: "testspace"
		};

		before(function(done) {
			request(url)
				.post(workspacePath)
				.send(testWorkspace)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					} else {
						done();
					}
				});
		});

		after(function(done) {
			request(url)
				.delete(workspacePath + testWorkspace._id)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					} else {
						done();
					}
				});
		});

		it('Retrieve a collection of reservations', function(done) {
			request(url)
				.get(reservationsPath)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					} else{
						done();
					}
				});
		});

		var testReservation = {
			_id: "42215PM",
			date: new Date(),
			block: "PM",
			author: "user001",
			groupId: 1,
			status: "Pending"
		};

		it('Create a new reservation', function(done) {
			request(url)
				.post(reservationsPath)
				.send(testReservation)
				.expect(200)
				.end(function(err,res){
					if (err) {
						throw err;
					}
					done();
				});
		});

		it('Return error trying to create duplicate reservation', function(done) {
			request(url)
				.post(reservationsPath)
				.send(testReservation)
				.expect(500)
				.end(function(err, res) {
					if (err) {
						throw err;
					} else {
						done();
					}
				});
		});

		it('Retrieve a reservation', function(done) {
			request(url)
				.get(reservationsPath + testReservation._id)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					} else {
						res.body._id.should.be.equal(testReservation._id);
						res.body.author.should.be.equal(testReservation.author);
						res.body.block.should.be.equal(testReservation.block);
						res.body.groupId.should.be.equal(testReservation.groupId);
						res.body.status.should.be.equal(testReservation.status);
						done();
					}
				});
		});

		it('Remove a reservation', function(done) {
			request(url)
				.delete(reservationsPath + testReservation._id)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) {
						throw err;
					}
					done();
				});
		});
	});
});