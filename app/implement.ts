namespace enterprise {
    let p = new People("Davi", "123.456.789-00");
    p.setAge(19);

    // O TS vai indicar que o name possívelmente pode ser null.
    document.getElementById("name").textContent = p.getName();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("age").textContent = p.getAge();

    let c = new Customer("Davi", "123.123.123.12", 1);
    c.setAge(19);
    c.setLimit(1000);
    c.setBalance(250);

    document.getElementById("customerId").textContent = c.getId();
    document.getElementById("limit").textContent = c.getLimit();
    document.getElementById("balance").textContent = c.getBalance();
    document.getElementById("customerName").textContent = c.getName();
    document.getElementById("customerCpf").textContent = c.getCpf();

    //  Funcionário
    let f =  new Employee("Funcionário 1", "000.000.000-00");
    f.setAge(20);
    f.setIdEmployee(1);
    f.setDayValue(100);

    document.getElementById("employeeId").textContent = f.getIdEmployee().toString();
    document.getElementById("dayValue").textContent = f.getDayValue();
    document.getElementById("salary").textContent = f.SalaryCalc();
    document.getElementById("employeeName").textContent = f.getName();
    document.getElementById("employeeCpf").textContent = f.getCpf();
}