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


/*Get Buscar Usuario por ID */
router.get('/usuarios/:id', UserController.BuscarID);


/*POST Cadastrando usuario. */
router.post('/usuarios.json', UserController.CriandoUsuario);

/*PUT atualizando usuario. */
router.put('/usuarios.json', UserController.Atualizar);

/*PATCH atualizando usuario. */
router.patch('/usuarios/:id', UserController.AtualizarPorpacth);

/*DELETE Deletar usuario. */
router.delete('/usuarios/:id', UserController.Delete);

/* Options para corss domain. */
router.options('/usuarios/:id', UserController.options);

/* Options para corss domain. */
router.options('/usuarios.json', UserController.options);
 
module.exports = router;
