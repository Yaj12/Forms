var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/results', function (req, res){
  console.log(req.body.description);
  console.log(req.body.firstName);
  console.log(req.body.type);
  console.log(req.body.dateOfBirth);
  console.log(req.body.Yes);
  console.log(req.body.No);
  res.render('index')
})


module.exports = router;
