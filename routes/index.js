var express = require('express');
var router = express.Router();
var func = require('../inc/function.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', func.PageHeadInfor('我的主页','我的主页','我的主页',1));
});

module.exports = router;
