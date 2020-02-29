namespace enterprise {
    class Subsidiary {
        private city: string;
        private idSubsidiary: number;
        private enterprise: Entreprise;

        constructor(enterprise: Enterprise) {
            this.enterprise = enterprise;
        }

        getCity():string {
            return this.city;
        }

        setCity(city: string):void {
            this.city = city;
        }

        getIdSubsidiary():number {
            return this.idSubsidiary;
        }

        setIdSubsidiary(idSubsidiary: number):void {
            this.idSubsidiary = idSubsidiary;
        }

        getEnterprise():Entreprise{
            return this.enterprise;
        }
    }
}