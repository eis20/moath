var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
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

module.exports = router;
