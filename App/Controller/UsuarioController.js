var Usuario = require("../Models/Usuario");

var UserController={

    usuarios:function(req, res, next) {
           //Cross domain
           res.header('Access-Control-Allow-Origin', '*');
           res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,PATCH,OPTIONS');
           res.header('Access-Control-Allow-Headers','Content-Type');
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
                  if(result.usuarios[0]==null){
                     res.send("Lamentamos mais não encontramos este usuario na nossa lista");
                  }else{
                     res.status(200).send(result.usuarios);
                  }
                }
               });
        }
      
       
      },

      BuscarID:function(req, res, next){
        var ID=req.params.id;
        if(ID!==undefined){
         Usuario.BuscarPorID(ID,function(result){
            if(result.error){
               res.status(500).send({erro:'Erro ao buscar usuarios ('+result.error+')'});
            }else{
               if(result.usuarios[0]==null){
                  res.status(404).send("Lamentamos mais não encontramos este usuario na nossa lista");
               }else{
                  res.status(200).send(result.usuarios);
               }
               
            }
           });
        }
      },

      CriandoUsuario:function(req, res, next){
         
        var Nome=req.body.nome;
        var Login=req.body.login;
        var Senha=req.body.senha;
        var Email=req.body.email;

        if(Nome!==undefined && Login!==undefined && Senha!==undefined){
               var usuario=new Usuario();
               usuario.nome=Nome;
               usuario.login=Login;
               usuario.senha=Senha;
               usuario.email=Email;
               usuario.Salvar(function(result){
                  if(result.error){
                     res.status(500).send({erro:'Erro ao criar usuario ('+result.error+')'});
                  }else{
                     res.status(200).send("Usuario Cadastrado com sucesso");
                  }
               })
        }
        
       
       },

       Atualizar:function(req, res, next) {
         var ID=req.body.ID;
         var Nome=req.body.nome;
         var Login=req.body.login;
         var Senha=req.body.senha;
         var Email=req.body.email;

         if(ID===undefined){
            res.status(400).send("Bad request");
         }else{
            Usuario.BuscarPorID(ID,function(result){
               if(result.error){
                  res.status(500).send({erro:'Erro ao buscar usuarios ('+result.error+')'});
               }else{
                  if(result.usuarios[0]==null){
                     res.status(404).send("Lamentamos mais não encontramos este usuario na nossa lista");
                  }else{   
                     var usuario=new Usuario();
                     usuario.ID=ID;
                     usuario.nome=Nome;
                     usuario.login=Login;
                     usuario.senha=Senha;
                     usuario.email=Email;

                     usuario.Atualizar(function(result){
                        if(result.error){
                           res.status(500).send({erro:'Erro ao atualizar usuarios ('+result.error+')'});
                        }else{
                           res.status(200).send("Usuario Atualizado com sucesso");
                        }
                     })
                  }
                  
               }
              });
         }

       },


       AtualizarPorpacth:function(req, res, next){
          //Cross domain
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,PATCH,OPTIONS');
          res.header('Access-Control-Allow-Headers','Content-Type');
         var ID=req.params.id;        
         if(ID!==undefined){
            Usuario.BuscarPorID(ID,function(result){
              
               var usuarios=new Usuario(result.usuarios[0]);
               
              if(req.body.nome!==undefined && req.body.nome!==""){
              
               usuarios.nome=req.body.nome;
              }

              if(req.body.login!==undefined && req.body.login!==""){
               usuarios.login=req.body.login;
              }

              if(req.body.senha!==undefined && req.body.senha!==""){
               usuarios.senha=req.body.senha;
              }

              if(req.body.email!==undefined && req.body.email!==""){
               usuarios.email=req.body.email;
              }

              usuarios.Atualizar(function(result){
                  if(result.error){
                     res.status(500).send({erro:'Erro ao atualizar usuario ('+result.error+')'});
                  }else{
                     res.status(200).send("Usuario Atualizado com sucesso");
                  }
              });
            });
         }else{
            res.status(400).send("Erro ao atualizar, id de usuario não encontrado")
         }
       },

       Delete:function(req, res, next){
         var ID=req.params.id;
         if(ID!==undefined){
          Usuario.ExcluirPorID(ID,function(result){
             if(result.error){
                res.status(500).send({erro:'Erro ao tenntar deletar o usuario ('+result.error+')'});
             }else{
               
                res.status(204).send("Usuario Deletado com sucesso");             
             }
            });
         }
       },

       options:function(req, res, next){
          //Cross domain
         res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,PATCH,OPTIONS');
         res.header('Access-Control-Allow-Headers','Content-Type');

         res.status(200).send("");
         }

 }




module.exports=UserController;