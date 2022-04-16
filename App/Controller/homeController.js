const res = require("express/lib/response");

var homeController={

    Index:function(req, res, next) {
        res.render('index', { title: 'Express' });
      },

      Usuario:function(req,res,next) { 
        res.send("Ola usuario");
      }
}


module.exports =homeController;