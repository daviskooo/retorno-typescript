"use strict";
var enterprise;
(function (enterprise) {
    var People = /** @class */ (function () {
        // Quando a classe for construída, é obrigatório que haja o valor de CPF. Assim pode-se retirar o union type do cpf.
        function People(cpf) {
            this.cpf = cpf;
        }
        People.prototype.getName = function () {
            return this.name;
        };
        People.prototype.setName = function (name) {
            this.name = name;
        };
        People.prototype.getAge = function () {
            return this.age;
        };
        People.prototype.setAge = function (age) {
            this.age = age;
        };
        // Criando apenas um get para o CPF pois na regra não será possível alterar o valor deste.
        People.prototype.getCpf = function () {
            return this.cpf;
        };
        return People;
    }());
})(enterprise || (enterprise = {}));
