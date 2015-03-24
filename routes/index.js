var express = require('express');
var router = express.Router();

exports.index = function(req, res) {
  res.render('layout');
};

exports.partials = function(req,res) {
  var test = req.params.test;
  res.render('partials/' + test);
};



