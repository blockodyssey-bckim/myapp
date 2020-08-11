var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postLogin', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);
  res.send('ok');
});

module.exports = router;
