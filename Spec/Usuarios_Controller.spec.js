const { describe, it } = require("mocha");
var chai=require("chai");
var expect=chai.expect;
var request =require("request");

describe("Testando o Controller de Usuario",function(){

    describe("GET/usuarios.json",function(){

        it("Deve retornar status 200",function(done){
          request.get("http://localhost:3000/usuarios.json",function(req,res, next){
            if(res==undefined){
                console.log("Não foi possivel achar o Servidor");
                expect(503).to.equal(200);
            }else{
                expect(res.statusCode).to.equal(200);
            }
            done();
          });
         });
    });
  });