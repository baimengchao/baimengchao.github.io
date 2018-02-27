var express = require('express');
var router = express.Router();
var func = require('../inc/function.js');

/* canvas 列表页面 */
router.get('/', function(req, res, next) {
  res.render('canvas/canvaslist', func.PageHeadInfor('canvas动画','canvas动画','canvas动画',2));
});

router.get('/canvas_1', function(req, res, next) {
  res.render('canvas/canvas_1', func.PageHeadInfor('canvas动画','canvas动画','canvas动画',2));
});

router.get('/canvas_2', function(req, res, next) {
  res.render('canvas/canvas_2', func.PageHeadInfor('canvas动画','canvas动画','canvas动画',2));
});

router.get('/canvas_3', function(req, res, next) {
  res.render('canvas/canvas_3', func.PageHeadInfor('canvas动画','canvas动画','canvas动画',2));
});

module.exports = router;
