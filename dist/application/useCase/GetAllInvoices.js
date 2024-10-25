import { PrismaInvoiceRepository } from "../../infrastructure/repositories/InvoiceRepository";
export class GetAllInvoices {
    async execute() {
        const { findAllInvoices } = new PrismaInvoiceRepository();
        try {
            return await findAllInvoices();
        }
        catch (error) {
            console.error('Error in execute method of GetAllInvoices:', error);
            throw error;
        }
    }
}
//# sourceMappingURL=GetAllInvoices.js.map