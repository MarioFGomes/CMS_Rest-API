const res = require("express/lib/response");
var Usuario = require("../Models/Usuario");
var homeController={

    Index:function(req, res, next) {
        res.render('index', { title: 'Express' });
      },

      Usuario:function(req,res,next) {
          var usuario=new Usuario();
          usuario.ID=5;
          usuario.nome="mario";
          usuario.login="mg";
          usuario.senha="123456";
          usuario.email="marioferreiragomes333@gmail.com";
          usuario.Salvar();
        res.send("Ola usuario");
      }
}


module.exports =homeController;