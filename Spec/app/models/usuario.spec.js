var Usuario = require("../../../App/Models/Usuario");
described("modelo de usuarios",function(){
    it("deve contar os atributos id,nome,login,senha,email",function(){
        var user=new Usuario();
        expect(user.ID).toBe(0);
        expect(user.nome).toBe(0);
        expect(user.login).toBe("");
        expect(user.senha).toBe("");
        expect(user.email).toBe("");
    });
});