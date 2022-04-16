var express = require('express');
var router = express.Router();
var homeController=require('../controller/homeController');
/* GET home page. */
router.get('/', homeController.Index);

/*Get User Page. */
router.get('/user', homeController.Usuario);

module.exports = router;
