namespace enterprise {
    export class Manager extends Employee {
        private sector: string | undefined;

        setSector(sector: string | undefined): void {
            this.sector = sector;
        }

        getSector(): string | undefined {
            return this.sector;
        }

        SalaryCalc(): number {
            return (this.getDayValue() * 30) + (this.getDayValue() * 0.3);
        }
    }
}