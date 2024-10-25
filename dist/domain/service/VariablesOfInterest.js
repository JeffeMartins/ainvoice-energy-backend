export class VariablesOfInterestService {
    constructor(invoices) {
        this.invoices = invoices;
    }
    async variablesOfInterestFactory() {
        const totalValueWithoutGD = this.invoices.electricalEnergyValue + this.invoices.energySCEEEWithoutICMSValue + this.invoices.contribMunicipalPublicLightValue;
        const electricalEnergyConsumption = this.invoices.electricalEnergyValue + this.invoices.energySCEEEWithoutICMSValue;
        const dataValiableInterest = {
            electricalEnergyConsumption,
            compensatedEnergy: this.invoices.compensatedEnergyGDQuantity,
            totalValueWithoutGD,
            economyDG: this.invoices.compensatedEnergyGDValue
        };
        return dataValiableInterest; // Suponha que você processa e retorna o array
    }
}
//# sourceMappingURL=VariablesOfInterest.js.map