var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node-js'
});

connection.connect(function(err) {
  if (err){
    console.log('Error connecting to Db');
  }
  else{
    console.log('Connection established');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.post('/processing', function(req, res, next) {
 console.log(req.body);
 var a = req.body.name;
 var b = req.body.age;
 var c = req.body.enroll;
   var d = req.body.address;
 connection.query('INSERT INTO nodews (name, age,enroll, address) VALUES (?, ?,?,?)', [a,b,c,d], function (err, result, field) {
   
   res.render('ans',{mya:a, myb:b, myc:c, myd:d});
//  res.render('ans',{mya:a, myb:b});
 })
});

module.exports = router;
