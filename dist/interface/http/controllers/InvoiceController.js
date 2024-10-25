import path from 'path';
import fs from 'fs';
import { GetAllInvoices } from '../../../application/useCase/GetAllInvoices';
import { ExtractPdfData } from '../../../application/useCase/ExtractPdfData';
import { VariablesOfInterest } from '../../../application/useCase/variablesOfInterest';
const getAllInvoices = new GetAllInvoices();
const pdfLibParser = new ExtractPdfData();
const variablesOfInterest = new VariablesOfInterest();
export class InvoiceController {
    async uploadInvoice(req, res) {
        try {
            const filePath = req.file?.path;
            const fileName = req.file?.filename;
            if (!filePath || !fileName) {
                res.status(400).json({ message: 'No file uploaded' });
                return;
            }
            await pdfLibParser.execute(filePath, fileName);
            res.status(200).json({ message: 'Invoice uploaded and processed successfully' });
        }
        catch (error) {
            console.error('Error processing invoice:', error);
            res.status(500).json({ message: 'Error processing invoice' });
        }
    }
    async getAllInvoices(_, res) {
        try {
            const invoices = await getAllInvoices.execute();
            const bigIntReplacer = (_key, value) => typeof value === 'bigint' ? value.toString() : value;
            res.status(200).json(JSON.parse(JSON.stringify(invoices, bigIntReplacer)));
        }
        catch (error) {
            console.error('Error fetching invoices:', error);
            res.status(500).json({ message: 'Error fetching invoices', error });
        }
    }
    viewPdf(req, res) {
        const filename = req.params.filename;
        const filepath = path.resolve(__dirname, '../../../../uploads', filename);
        if (fs.existsSync(filepath)) {
            res.setHeader('Content-Type', 'application/pdf');
            res.sendFile(filepath);
        }
        else {
            res.status(404).json({ message: 'File not found' });
        }
    }
    async getVariablesOfInterest(req, res) {
        const data = await getAllInvoices.execute();
        const bigIntReplacer = (_key, value) => typeof value === 'bigint' ? value.toString() : value;
        const invoices = JSON.parse(JSON.stringify(data, bigIntReplacer));
        variablesOfInterest.execute(invoices);
        res.status(200).json(invoices);
    }
}
//# sourceMappingURL=InvoiceController.js.map