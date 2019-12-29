import * as pdfController from "../controllers/pdf"

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', pdfController.convert());

module.exports = router;
