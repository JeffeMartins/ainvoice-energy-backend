import { Multer } from 'multer';
import express from 'express';

interface Client {
    numberClient: number | bigint | string;
    name: string;
    address: string;
    additionalAddress: string | null;
  }
  
  export interface IInvoice {
    id: number;
    numberClient: number | bigint | string;
    referenceMonth: string;
    electricalEnergyQuantity: number | boolean | any;
    electricalEnergyValue: number | boolean | any;
    energySCEEEWithoutICMSQuantity: number | boolean | any;
    energySCEEEWithoutICMSValue: number | boolean | any;
    compensatedEnergyGDQuantity: number | boolean | any;
    compensatedEnergyGDValue: number | boolean | any;
    contribMunicipalPublicLightValue: number | boolean | any;
    urlAccount: string;
    createdAt: Date;
    updatedAt: Date;
    client: Client;
  }

  
declare global {
  namespace Express {
      interface Request {
          file?: Multer.File;
          userId?: string;
      }
  }
}
