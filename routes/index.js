var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
  // res.send('hello')
});
router.get('/books', function(req, res, next) {
  res.render('books', { title: 'الكتب' });
});
router.get('/addbook', function(req, res, next) {
  res.render('addbook', { title: 'الكتب' });
});

router.get('/authers', function(req, res, next) {
  res.render('authers', { title: 'المؤلفون' });
});
router.get('/addauther', function(req, res, next) {
  res.render('addauther', { title: 'المؤلفون' });
});
router.get('/departments', function(req, res, next) {
  res.render('departments', { title: 'الاقسام' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'المنتجات' });
});
router.get('/addproduct', function(req, res, next) {
  res.render('addproduct', { title: 'المنتجات' });
});
router.get('/category', function(req, res, next) {
  res.render('category', { title: 'التصنيفات' });
});
router.get('/addcategory', function(req, res, next) {
  res.render('addcategory', { title: 'التصنيفات' });
});
router.get('/voices', function(req, res, next) {
  res.render('voices', { title: 'الصوتيات' });
});
router.get('/hatf', function(req, res, next) {
  res.render('hatf', { title: 'هتف القلوب ' });
});
router.get('/metrk', function(req, res, next) {
  res.render('metrk', { title: 'شجرة ذوي مترك ' });
});
router.get('/record', function(req, res, next) {
  res.render('record', { title: 'شجرة ذوي مترك ' });
});

module.exports = router;
