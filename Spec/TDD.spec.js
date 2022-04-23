const { describe, it } = require("mocha");
var chai=require("chai");
var expect=chai.expect;
var Usuario = require("../App/Models/Usuario");


//Instantia da class Usuarios
var p=new Usuario();
 p.nome="Mário";

describe("Testando Dados de Usuario",function(){
   
 it("Verificando Nome",function(){
    expect(p.nome).to.equal("Mário");
 });

})