var Usuario = require("../Models/Usuario");

var UserController={

    usuarios:function(req, res, next) {
        var NomeBusca=req.query.nome;
        if(NomeBusca==undefined){
            Usuario.Todos(function(result){
                if(result.error){
                   res.status(500).send({erro:'Erro ao buscar usuarios ('+result.error+')'});
                }else{
                   res.status(200).send(result.usuarios);
                }
               });
        }else{
            Usuario.BuscarPornome(NomeBusca,function(result){
                if(result.error){
                   res.status(500).send({erro:'Erro ao buscar usuarios ('+result.error+')'});
                }else{
                   res.status(200).send(result.usuarios);
                }
               });
        }
      
       
      }

  

}


module.exports=UserController;