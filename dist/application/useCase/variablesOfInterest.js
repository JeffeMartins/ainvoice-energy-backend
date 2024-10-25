import { VariablesOfInterestService } from "../../domain/service/VariablesOfInterest";
export class VariablesOfInterest {
    async execute(invoice) {
        try {
            // Passando os dados para o serviço de variáveis de interesse
            const variablesService = new VariablesOfInterestService(invoice);
            // Certifique-se de que este método retorne IInvoice[]
            const variablesOfInterestData = await variablesService.variablesOfInterestFactory();
            // Retorne os dados no formato correto
            return variablesOfInterestData;
        }
        catch (error) {
            console.error('Error in execute method of GetAllInvoices:', error);
            throw error;
        }
    }
}
//# sourceMappingURL=VariablesOfInterest.js.map