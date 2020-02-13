namespace enterprise {
    let p = new People("Davi", "123.456.789-00");
    p.setAge(19);

    // O TS vai indicar que o name possívelmente pode ser null.
    document.getElementById("name").textContent = p.getName();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("age").textContent = p.getAge();
}