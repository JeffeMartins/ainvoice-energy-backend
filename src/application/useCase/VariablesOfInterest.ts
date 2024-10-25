import { IInvoice } from "../../@types";
import { VariablesOfInterestService } from "../../domain/service/VariablesOfInterest";

export class VariablesOfInterest {

    async execute(invoice: IInvoice[]) {
        try {

            const variablesService = new VariablesOfInterestService(invoice);

            const variablesOfInterestData = await variablesService.variablesOfInterestFactory();

            return variablesOfInterestData;

        } catch (error) {
            console.error('Error in execute method of GetAllInvoices:', error);
            throw error;
        }
    }
}
