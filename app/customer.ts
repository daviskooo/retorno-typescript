namespace enterprise {
    class Customer extends People {
        private balance: number | undefined;
        private limit: number | undefined;
        private id: number | undefined;

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