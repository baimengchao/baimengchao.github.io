var express = require('express');
var router = express.Router();
var func = require('../inc/function.js');

/* canvas 列表页面 */
router.get('/', function(req, res, next) {
  res.render('myWorks', func.PageHeadInfor('项目案例','项目案例','项目案例',3));
});

module.exports = router;
