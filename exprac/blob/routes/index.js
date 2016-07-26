var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:id', function(req, res) {
  res.send('a blog', + req.params.id);
});

module.exports = router;
