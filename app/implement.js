"use strict";
var enterprise;
(function (enterprise) {
    var p = new enterprise.People("Davi", "123.456.789-00");
    p.setAge(19);
    // O TS vai indicar que o name possívelmente pode ser null.
    document.getElementById("name").textContent = p.getName();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("age").textContent = p.getAge();
    var c = new enterprise.Customer("Davi", "123.123.123.12", 1);
    c.setAge(19);
    c.setLimit(1000);
    c.setBalance(250);
    document.getElementById("customerId").textContent = c.getId();
    document.getElementById("limit").textContent = c.getLimit();
    document.getElementById("balance").textContent = c.getBalance();
    document.getElementById("customerName").textContent = c.getName();
    document.getElementById("customerCpf").textContent = c.getCpf();
})(enterprise || (enterprise = {}));
