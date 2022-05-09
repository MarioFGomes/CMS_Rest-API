var App= require('../Config/db');
var uuid=require('uuid')

var Token =function(Token){ 

if(Token!==undefined && Token!==""){
this.ID=Token.id;
this.token=Token.token;

}else{
this.ID=0;
this.token="";

}

var query="";
this.criar=function(callback){    

        query="INSERT INTO cms.usuarios(nome,login,senha,email) VALUES('"+this.nome+"','"+this.login+"','"+this.senha+"','"+this.email+"')";
        App.banco.cnn.exec(query,function(results,error){
            if(error!=undefined){
             
                callback.call(null,{error:true});
            }else{
       
                callback.call(null,{error:false});
            }
        });
    
    
};




};


Token.ExcluirTodos=function(callback){

    query="delete from cms.usuarios";
    App.banco.cnn.exec(query,function(results,error){
        if(error!=undefined && error!=null){
          
            callback.call(null,{error:true});
        }else{
           
            callback.call(null,{error:false});
        }
    });
 }


 


 

module.exports = Usuario;