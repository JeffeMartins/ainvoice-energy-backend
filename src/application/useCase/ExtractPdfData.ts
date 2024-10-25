import { PdfLibParser } from '../../domain/service/PdfLibParser';
import { PrismaInvoiceRepository } from '../../infrastructure/repositories/InvoiceRepository';

export class ExtractPdfData {
    async execute(filePath: string, fileName: string): Promise<any> {

        const { extractData } = new PdfLibParser();
        const { save } = new PrismaInvoiceRepository();

        if (!filePath) {
            throw new Error("File path is undefined");
        }

        if (!fileName) {
            throw new Error("fileName is undefined");
        }

        const invoice = await extractData(filePath, fileName);
        await save(invoice);
    }
}
