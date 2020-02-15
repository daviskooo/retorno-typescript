namespace enterprise {
    export class Employee extends People {
        private idEmployee: number | undefined;
        private dayValue: number | undefined;

        getIdEmployee(): number | undefined {
            return this.idEmployee;
        }

        setIdEmployee(idEmployee: number | undefined): void {
            this.idEmployee = idEmployee;
        }

        getDayValue(): number | undefined {
            return this.dayValue;
        }

        setDayValue(dayValue: number | undefined): void {
            this.dayValue = dayValue;
        }

        SalaryCalc(): number {
            return this.dayValue * 30;
        }
    }
}