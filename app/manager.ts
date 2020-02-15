namespace enterprise {
    class Manager extends Employee {
        private sector: string | undefined;

        setSector(sector: string | undefined): void {
            this.sector = sector;
        }

        getSector(): string | undefined {
            return this.sector;
        }

    }
}