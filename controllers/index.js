let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

module.exports = router;

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;


/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

module.exports = router;
