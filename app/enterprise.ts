namespace enterprise {
    export class Entreprise {
        private enterpriseName: string | undefined;
        private activity: string;
        private city: string;
        private customers: Array<Customer> = [];
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