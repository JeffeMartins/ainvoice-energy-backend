import { IInvoice } from "../../@types";
import { PrismaInvoiceRepository } from "../../infrastructure/repositories/InvoiceRepository";

export class GetInvoices {

  async findAll(): Promise<IInvoice[]> {

    const { findAllInvoices } = new PrismaInvoiceRepository()

    try {
      return await findAllInvoices();
    } catch (error) {
      console.error('Error in execute method of GetAllInvoices:', error);
      throw error;
    }
  }

  async findAllNumberClient(): Promise<any> {

    const { findAllNClient } = new PrismaInvoiceRepository()

    try {
      const response = await findAllNClient();

      const result = response.map(record => record.numberClient.toString());
      return result
    } catch (error) {
      console.error('Error in execute method of GetAllInvoices:', error);
      throw error;
    }
  }
}
