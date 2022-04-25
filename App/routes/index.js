var express = require('express');
var router = express.Router();
var homeController=require('../controller/homeController');
var UserController=require('../controller/UsuarioController');
/* GET home page. */
router.get('/', homeController.Index);

/*Get User Page. */
router.get('/user', homeController.Usuario);

/*Get User Page. */
router.get('/usuarios.json', UserController.usuarios);


module.exports = router;
