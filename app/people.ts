namespace enterprise {
    class People {
        // Criação de atributo com conceito de union types.
        private name:string|undefined;
        private cpf:string|undefined;
        private age:number|undefined;

        getName():string|undefined{
            return this.name;
        }

        setName(name:string):void{
            this.name = name;
        }
    }
}