import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class PrismaInvoiceRepository {
    async save(invoice) {
        try {
            await prisma.client.upsert({
                where: { numberClient: Number(invoice.numberClient) },
                update: {},
                create: {
                    numberClient: Number(invoice.numberClient),
                    name: invoice.name,
                    address: invoice.address,
                    additionalAddress: invoice.additionalAddress,
                },
            });
            await prisma.accountData.create({
                data: {
                    numberClient: Number(invoice.numberClient),
                    referenceMonth: invoice.referenceMonth.toString(),
                    electricalEnergyQuantity: invoice.electricalEnergyQuantity,
                    electricalEnergyValue: invoice.electricalEnergyValue,
                    energySCEEEWithoutICMSQuantity: invoice.energySCEEEWithoutICMSQuantity,
                    energySCEEEWithoutICMSValue: invoice.energySCEEEWithoutICMSValue,
                    compensatedEnergyGDQuantity: invoice.compensatedEnergyGDQuantity,
                    compensatedEnergyGDValue: invoice.compensatedEnergyGDValue,
                    contribMunicipalPublicLightValue: invoice.contribMunicipalPublicLightValue,
                    urlAccount: invoice.urlAccount,
                },
            });
            console.log('Invoice data saved successfully', invoice);
        }
        catch (error) {
            console.error('Error saving invoice data:', error);
            throw error;
        }
    }
    async findAllInvoices() {
        try {
            const data = await prisma.accountData.findMany({
                distinct: ['numberClient', 'referenceMonth'],
                include: {
                    client: true,
                },
            });
            return data;
        }
        catch (error) {
            console.error('Error in findAllInvoices:', error);
            throw error;
        }
    }
}
//# sourceMappingURL=InvoiceRepository.js.map