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
    let e =  new Employee("Funcionário 1", "000.000.000-00");
    e.setAge(20);
    e.setIdEmployee(1);
    e.setDayValue(100);

    document.getElementById("employeeId").textContent = e.getIdEmployee().toString();
    document.getElementById("dayValue").textContent = e.getDayValue();
    document.getElementById("salary").textContent = e.SalaryCalc();
    document.getElementById("employeeName").textContent = e.getName();
    document.getElementById("employeeCpf").textContent = e.getCpf();

    let m = new Manager("Gerente 1", "001.001.001-01");
    m.setAge(20);
    m.setIdEmployee(2);
    m.setDayValue(200);
    m.setSector("Financial");

    document.getElementById("managerId").textContent = m.getIdEmployee().toString();
    document.getElementById("dayValue").textContent = m.getDayValue();
    document.getElementById("salaryManager").textContent = m.SalaryCalc();
    document.getElementById("managerName").textContent = m.getName();
    document.getElementById("managerCpf").textContent = m.getCpf();
    document.getElementById("sector").textContent = m.getSector();

    // Enterprise

    let en = new Entreprise();
    en.setName("Mercúrio");
    en.setCity("São Paulo");
    en.setActivity("T.I");
    en.addCustomer(c);
    en.addEmployee(e);
    en.addEmployee(m);

    document.getElementById("enterpriseName").textContent = en.getName();
    document.getElementById("enterpriseCity").textContent = en.getCity();
    document.getElementById("enterpriseActivity").textContent = en.getActivity();

    let enterpriseEmployee = document.getElementById("enterpriseEmployee");
    en.getEmployee().forEach(e => {
        let name = e.getName();
        if(e instanceof Manager) name += "- Gerente";
        let create = "<h6>Nome:</h6><p>"+ name +"</p>";
        enterpriseEmployee.innerHTML += create;
    });
}