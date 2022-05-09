var App= require('../Config/db');

var Usuario=function(usuarios){ 

if(usuarios!==undefined && usuarios!==""){
this.ID=usuarios.idusuarios;
this.nome=usuarios.nome;
this.login=usuarios.login;
this.senha=usuarios.senha;
this.email=usuarios.email;
}else{
this.ID=0;
this.nome="";
this.login="";
this.senha="";
this.email="";
}

var query="";
this.Salvar=function(callback){

    if(this.nome=="" || this.nome==undefined){
        console.log("Nome de usuario é obrigatorio");
        return;
    }

    if(this.login=="" || this.login==undefined){
        console.log("username é obrigatorio");
        return;
    }

    if(this.senha=="" || this.senha==undefined){
        console.log("senha de usuario é obrigatorio");
        return;
    }
    
    if(this.ID==0 || this.ID=="" || this.ID==undefined){
       
        query="INSERT INTO cms.usuarios(nome,login,senha,email) VALUES('"+this.nome+"','"+this.login+"','"+this.senha+"','"+this.email+"')";
        App.banco.cnn.exec(query,function(results,error){
            if(error!=undefined){
             
                callback.call(null,{error:true});
            }else{
       
                callback.call(null,{error:false});
            }
        });
    }
    
};

this.Atualizar=function(callback){
var query="update cms.usuarios set nome='"+this.nome+"', login='"+this.login+"', senha='"+this.senha+"',email='"+this.email+"' where idusuarios='"+this.ID+"'";
        App.banco.cnn.exec(query,function(results,error){
            if(error!=undefined && error!=null){
               
                callback.call(null,{error:true});
            }else{
               
                callback.call(null,{error:false});
            }
        });
    
}


};


 Usuario.ExcluirTodos=function(callback){

    query="delete from cms.usuarios";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
          
            callback.call(null,{error:true});
        }else{
           
            callback.call(null,{error:false});
        }
    });
 }


 
 Usuario.ExcluirPorID=function(id,callback){

    query="delete from cms.usuarios where  idusuarios="+id+"";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
          
            callback.call(null,{error:true});
        }else{       
            callback.call(null,{error:false});
        }
    });
 }

 Usuario.Todos=function(callback){

    query="select * from cms.usuarios";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
            callback.call(null,{error:true});
        }else{
           
            callback.call(null,{error:false,usuarios:results});
        }
    });
 }

 
 Usuario.BuscarPornome=function(nome,callback){
  
    query="SELECT * FROM cms.usuarios where nome like '%"+nome+"%'";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
            callback.call(null,{error:true});
        }else{
           
            callback.call(null,{error:false,usuarios:results});
        }
    });
 }


 Usuario.BuscarPorID=function(id,callback){

    query="SELECT * FROM cms.usuarios where  idusuarios="+id+"";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
            callback.call(null,{error:true});
        }else{
           
            callback.call(null,{error:false,usuarios:results});
        }
    });
 }

module.exports = Usuario;