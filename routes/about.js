var express = require('express');
var router = express.Router();
var func = require('../inc/function.js');

/* canvas 列表页面 */
router.get('/', function(req, res, next) {
  res.render('about', func.PageHeadInfor('关于本站','关于本站','关于本站',4));
});


module.exports = router;
