namespace enterprise {
    class Entreprise {
        private enterpriseName: string;
        private activity: string;
        private city: string;
        private customers: Array<Cus> = [];
        private employees: Array<Employee> = [];

        getName():string {
            return this.enterpriseName;
        }

        setName(enterpriseName: string):void {
            this.enterpriseName = enterpriseName;
        }

        getActivity():string {
            return this.activity;
        }

        setActivity(activity: string):void {
            this.activity = activity;
        }

        getCity():string {
            return this.city;
        }

        setCity(city: string):void {
            this.city = city;
        }

        addCustomer(customers: Customer):void{
            this.customers.push(customers);
        }

        addEmployee(employees: Employee):void{
            this.employees.push(employees);
        }

        getCustomer(){
            return this.customers;
        }

        getEmployee(){
            return this.employees;
        }
    }
}