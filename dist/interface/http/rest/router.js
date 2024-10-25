import express, { Router } from 'express';
import path from 'path';
import { HealthController } from '../controllers/HealthController';
import { InvoiceController } from '../controllers/InvoiceController';
import { uploadMiddleware } from '../middleware/index';
export class InitializeRoutes {
    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use('/uploads', express.static(path.resolve(__dirname, '../../uploads')));
        const healthController = new HealthController();
        const invoiceController = new InvoiceController();
        this.router.get('/health', (req, res) => healthController.getHealthStatus(req, res));
        this.router.get('/invoices', (req, res) => invoiceController.getAllInvoices(req, res));
        this.router.post('/upload', uploadMiddleware, (req, res) => invoiceController.uploadInvoice(req, res));
        this.router.get('/view-pdf/:filename', (req, res) => invoiceController.viewPdf(req, res));
        this.router.get('/getVariablesOfInterest', (req, res) => invoiceController.getVariablesOfInterest(req, res));
    }
}
//# sourceMappingURL=router.js.map