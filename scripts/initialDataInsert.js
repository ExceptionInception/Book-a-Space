db = connect("localhost:27017/bookaspace");
db.createCollection("workspaces");
db.createCollection("reservations");

var testDate = new Date(2015, 3, 27);

db.reservations.insert({
	_id:"04102515AM",
	workspaceID: "FP-7-WS-470-11",
	dateOf: testDate,
	month: "04",
	day: "10",
	year: "2015",
	block: "AM",
	reserverName: "John Doe",
	reserverEmail: "jdoe@exmaple.com",
	agency: "Dept of The Budget",
	supervisorName: "Super Visor",
	supervisorEmail: "supervisor@exmaple.com",
	parkingToken: true,
	status: "Pending",
	parkingCost: 10,
	glCode: "6351500",
	sapFund: "00056778",
	costCenter: "425454235",
	budgetPeriod: "2015"
});

db.reservations.insert({
	_id:"04102015AM",
	workspaceID: "FP-7-WS-430-189A",
	dateOf: testDate,
	month: "04",
	day: "10",
	year: "2015",
	block: "AM",
	reserverName: "John Doe",
	reserverEmail: "jdoe@exmaple.com",
	agency: "Dept of The Budget",
	supervisorName: "Super Visor",
	supervisorEmail: "supervisor@exmaple.com",
	parkingToken: true,
	status: "Pending",
	parkingCost: 10,
	glCode: "6351500",
	sapFund: "00056778",
	costCenter: "425454235",
	budgetPeriod: "2015"
});


db.reservations.insert({
	_id:"04102015PM",
	workspaceID: "FP-7-WS-470-11",
	dateOf: testDate,
	month: "04",
	day: "10",
	year: "2015",
	block: "PM",
	reserverName: "George Michael",
	reserverEmail: "gmichael@yahoo.com",
	agency: "Firearms & Tobacco",
	supervisorName: "Nikola Tesla",
	supervisorEmail: "nt@yahoo.com",
	parkingToken: true,
	status: "Approved",
	parkingCost: 10,
	glCode: "6351500",
	sapFund: "00242348",
	costCenter: "423423454235",
	budgetPeriod: "2015"
});

db.workspaces.insert({
	_id: "FP-7-WS-430-189A",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-WS-430-189B",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-WS-430-190A",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-WS-430-190B",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-WS-470-11",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015PM', date: testDate, block: 'PM'}],
});

db.workspaces.insert({
	_id: "FP-7-WS-470-12",
	type: "Cubicle",
	agency: "Executive Offices",
	building: "Forum Place",
	floor: "7th",
	room: "south",
	size: "6 x 8",
	amRate: 2.58,
	pmRate: 2.58,
	weekly: 25.84,
	monthly: 516.73,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FB-506-WS-14",
	type: "Cubicle",
	agency: "Administration",
	building: "Finance",
	floor: "5th",
	room: "506",
	size: "8 x 8",
	amRate: 1.27,
	pmRate: 1.27,
	weekly: 12.70,
	monthly: 253.99,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FB-506-WS-15",
	type: "Cubicle",
	agency: "Administration",
	building: "Finance",
	floor: "5th",
	room: "506",
	size: "8 x 8",
	amRate: 1.27,
	pmRate: 1.27,
	weekly: 12.70,
	monthly: 253.99,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FB-506-WS-16",
	type: "Cubicle",
	agency: "Administration",
	building: "Finance",
	floor: "5th",
	room: "506",
	size: "8 x 8",
	amRate: 1.27,
	pmRate: 1.27,
	weekly: 12.70,
	monthly: 253.99,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-61",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-62",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-63",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-64",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-65",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-66",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "KS-7-WS-67",
	type: "Cubicle",
	agency: "PennDOT",
	building: "Keystone",
	floor: "7th",
	room: "west",
	size: "6 x 8",
	amRate: 1.90,
	pmRate: 1.90,
	weekly: 19.05,
	monthly: 380.98,
	inventory: [],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-1",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 1",
	size: "1156 sq ft",
	amRate: 56.57,
	pmRate: 56.57,
	hourly: 11.31,
	daily:	90.51,
	weekly: 452.53,
	phoneNumber: "(717) 214-6647",
	capacity: "50 to 75",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Smartboard", "Wireless Internet", "Poly Com", "PC"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-2",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 2",
	size: "1235 sq ft",
	amRate: 60.43,
	pmRate: 60.43,
	hourly: 12.09,
	daily:	96.69,
	weekly: 483.45,
	phoneNumber: "(717) 214-6648",
	capacity: "50 has tables too",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Projector", "Wireless Internet", "PC"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7A",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7A",
	size: "280 sq ft",
	amRate: 13.70,
	pmRate: 13.70,
	hourly: 2.74,
	daily:	21.92,
	weekly: 109.61,
	phoneNumber: "(717) 705-9172",
	capacity: "8 to 10",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Projector", "Wireless Internet", "PC", "Poly Com"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7B",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7B",
	size: "192 sq ft",
	amRate: 9.40,
	pmRate: 9.40,
	hourly: 1.88,
	daily:	15.03,
	weekly: 75.16,
	phoneNumber: "(717) 705-9274",
	capacity: "8 to 10",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC", "Poly Com"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7B1",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7B1",
	size: "192 sq ft",
	amRate: 9.40,
	pmRate: 9.40,
	hourly: 1.88,
	daily:	15.03,
	weekly: 75.16,
	phoneNumber: "(717) 705-9832",
	capacity: "6",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7C",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7C",
	size: "444 sq ft",
	amRate: 21.73,
	pmRate: 21.73,
	hourly: 4.25,
	daily:	34.76,
	weekly: 173.81,
	phoneNumber: "(717) 705-9175",
	capacity: "16 to 18",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC", "Poly Com", "Projector"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7C1",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7C1",
	size: "154 sq ft",
	amRate: 7.54,
	pmRate: 7.54,
	hourly: 1.51,
	daily:	12.06,
	weekly: 60.28,
	phoneNumber: "(717) 214-6650",
	capacity: "6",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7D",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7D",
	size: "267 sq ft",
	amRate: 13.06,
	pmRate: 13.06,
	hourly: 2.61,
	daily:	20.90,
	weekly: 104.52,
	phoneNumber: "(717) 705-9241",
	capacity: "12 to 14",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC", "Poly Com"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7E",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7E",
	size: "258 sq ft",
	amRate: 12.62,
	pmRate: 12.62,
	hourly: 2.52,
	daily:	20.20,
	weekly: 101.00,
	phoneNumber: "(717) 705-9214",
	capacity: "12 to 14",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC", "Poly Com"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7I",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7I",
	size: "288 sq ft",
	amRate: 14.09,
	pmRate: 14.09,
	hourly: 2.82,
	daily:	22.55,
	weekly: 112.74,
	phoneNumber: "(717) 525-5568",
	capacity: "8 to 10",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC", "Poly Com", "Projector"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-7J",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	floor: "7th",
	room: "Conference Rm 7J",
	size: "192 sq ft",
	amRate: 9.40,
	pmRate: 9.40,
	hourly: 1.88,
	daily:	15.03,
	weekly: 75.16,
	phoneNumber: "(717) 214-4132",
	capacity: "6",
	pointOfContact: "JoJerome@pa.gov",
	inventory: ["Wireless Internet", "PC"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-T1",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	room: "Training Rm 1",
	size: "790 sq ft",
	amRate: 38.66,
	pmRate: 38.66,
	hourly: 7.73,
	daily:	61.85,
	weekly: 309.25,
	phoneNumber: "(717) 214-6652",
	capacity: "16",
	pointOfContact: "ra-eitt@pa.gov",
	inventory: ["Wireless Internet", "PC", "Projector"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-T2",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	room: "Training Rm 2",
	size: "771 sq ft",
	amRate: 37.73,
	pmRate: 37.73,
	hourly: 7.55,
	daily:	60.36,
	weekly: 301.82,
	phoneNumber: "(717) 214-6651",
	capacity: "16",
	pointOfContact: "ra-eitt@pa.gov",
	inventory: ["Wireless Internet", "PC", "Projector"],
	bookedOn: [{reservation: '04102015AM', date: testDate, block: 'AM'}]
});

db.workspaces.insert({
	_id: "FP-7-CR-T3",
	type: "Conference Room",
	agency: "Administration",
	building: "Forum Place",
	room: "Training Rm 3",
	size: "775 sq ft",
	amRate: 37.92,
	pmRate: 37.92,
	hourly: 7.58,
	daily:	60.68,
	weekly: 303.38,
	phoneNumber: "No Phone",
	capacity: "16",
	pointOfContact: "ra-eitt@pa.gov",
	inventory: ["Wireless Internet", "PC", "Projector"]
});
