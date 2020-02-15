namespace enterprise {
    export class Customer extends People {
        private balance: number | undefined;
        private limit: number | undefined;
        private id: number | undefined;

        constructor(name:string, cpf:string, id:number) {
            super(name, cpf); // Sobrescrita de construtor.
            this.id = id;
        }

        getBalance(): number | undefined {
            return this.balance;
        }

        setBalance(balance: number | undefined) : void {
            this.balance = balance;
        }

        getLimit(): number | undefined {
            return this.limit;
        }

        setLimit(limit: number | undefined) : void {
            this.limit = limit;
        }

        getId(): number|undefined {
            return this.id;
        }

        setId(id: number | undefined) : void {
            this.id  = id ;
        }
    }
}