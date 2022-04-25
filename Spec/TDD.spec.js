const { describe, it } = require("mocha");
var chai=require("chai");
var expect=chai.expect;
var Usuario = require("../App/Models/Usuario");


//Instantia da class Usuarios
var p=new Usuario();
 p.nome="TDD";
 p.login="tdd";
 p.senha="tdd123";
 p.email="gang123@gmail.com";


 //Iniciando os Testes

describe("Testando Dados de Usuario",function(){
   
 /*it("Verificando Nome",function(){
    expect(p.nome).to.equal("Mário");

 });*/


 describe("Incluiindo no Banco de dados",function(){

   it("Cadastrado um Usuario novo",function(done){
      p.Salvar(function(retorno){
         expect(retorno.error).to.equal(false);
         done();
      });
      
   });
 });

 describe("Selecionando todos no Banco de dados",function(){

   it("Pegando todos os usuarios",function(done){
      Usuario.Todos(function(retorno){
         expect(retorno.error).to.equal(false);
         expect(retorno.usuarios.length).to.equal(1);
         done(); 
      });
      
   });
 });


 describe("Atualizando Usuario no Banco de dados",function(){

   it("Update usuarios",function(done){ 
      Usuario.Todos(function(retorno){
         p.ID=retorno.usuarios[0].idusuarios;
         p.nome="Dario";
         p.Atualizar(function(retorno){
            expect(retorno.error).to.equal(false);
            done();
         });
      }); 
         
   
   });
 });

 describe("Excluindo no Banco de dados",function(){

   it("Apagar todos os usuarios",function(done){
      Usuario.ExcluirTodos(function(retorno){
         expect(retorno.error).to.equal(false);
         done();
      });
     
   });
 });

});



