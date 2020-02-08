namespace enterprise {
    export class People {
        // Criação de atributo com conceito de union types.
        private name:string|undefined;
        private cpf:string;
        private age:number|undefined;

        // Quando a classe for construída, é obrigatório que haja o valor de CPF. Assim pode-se retirar o union type do cpf.
        constructor(cpf:string){
            this.cpf = cpf;
        }

        getName():string|undefined{
            return this.name;
        }

        setName(name:string):void{
            this.name = name;
        }

        getAge():number|undefined{
            return this.age;
        }

        setAge(age:number):void{
            this.age = age;
        }

        // Criando apenas um get para o CPF pois na regra não será possível alterar o valor deste.
        getCpf():string{
            return this.cpf;
        }
    }
}