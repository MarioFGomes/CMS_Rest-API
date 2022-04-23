var App= require('../Config/db');

var Usuario=function(){ 
this.ID=0;
this.nome="";
this.login="";
this.senha="";
this.email="";
var query="";
this.Salvar=function(){

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
                console.log("Erro ao salvar dados do usuario");
            }else{
                console.log("Usuario cadastrado com sucesso");
            }
        });
    }else{
        query="update cms.usuarios set nome='"+this.nome+"', login='"+this.login+"', senha='"+this.senha+"',email='"+this.email+"' where idusuarios='"+this.ID+"'";
        App.banco.cnn.exec(query,function(results,error){
            if(error!=undefined){
                console.log("Erro ao atualizar dados do usuario");
            }else{
                console.log("Usuario atualizado com sucesso");
            }
        });
    }
};


};




module.exports = Usuario;