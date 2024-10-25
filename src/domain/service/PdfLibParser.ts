import fs from 'fs';
import pdf from 'pdf-parse';

export class Invoice {
  constructor(
    public numberClient: number,
    public referenceMonth: string,
    public electricalEnergyQuantity: number,
    public electricalEnergyValue: number,
    public energySCEEEWithoutICMSQuantity: number,
    public energySCEEEWithoutICMSValue: number,
    public compensatedEnergyGDQuantity: number,
    public compensatedEnergyGDValue: number,
    public contribMunicipalPublicLightValue: number,
    public urlAccount: string,
    public name: string,
    public address: string,
    public additionalAddress: string
  ) {}
}

export class PdfLibParser {
  async extractData(filePath: string, fileName: string): Promise<Invoice> {
    const dataBuffer = fs.readFileSync(filePath); // Carrega o PDF em um buffer
    const data = await pdf(dataBuffer); // Usa o pdf-parse para extrair o texto do PDF
    const pdfText = data.text;

    const numberClientMatch = pdfText.match(/Nº DO CLIENTE\s+Nº DA INSTALAÇÃO\s+(\d+)/);
    const numberClient = numberClientMatch ? parseInt(numberClientMatch[1]) : 0;

    const referenceMonthMatch = pdfText.match(/\b[A-Z]{3}\/\d{4}\b/);
    const referenceMonth = referenceMonthMatch ? referenceMonthMatch[0] : '';

    const electricalEnergyQuantityMatch = pdfText.match(/Energia ElétricakWh\s+(\d+)/);
    const electricalEnergyQuantity = electricalEnergyQuantityMatch ? parseInt(electricalEnergyQuantityMatch[1], 10) : 0;

    const electricalEnergyValueMatch = pdfText.match(/Energia ElétricakWh\s+\d+\s+[\d.,]+\s+([\d.,]+)/);
    const electricalEnergyValue = electricalEnergyValueMatch ? parseFloat(electricalEnergyValueMatch[1].replace(',', '.')) : 0;

    const compensatedEnergyGDQuantityMatch = pdfText.match(/Energia compensada GD IkWh\s+(\d+)/);
    const compensatedEnergyGDQuantity = compensatedEnergyGDQuantityMatch ? parseInt(compensatedEnergyGDQuantityMatch[1], 10) : 0;

    const compensatedEnergyGDValueMatch = pdfText.match(/Energia compensada GD IkWh\s+\d+\s+[\d.,]+\s+(-?[\d.,]+)/);
    const compensatedEnergyGDValue = compensatedEnergyGDValueMatch ? parseFloat(compensatedEnergyGDValueMatch[1].replace(',', '.')) : 0;

    const contribMunicipalPublicLightValueMatch = pdfText.match(/Contrib Ilum Publica Municipal\s+([\d.,]+)/);
    const contribMunicipalPublicLightValue = contribMunicipalPublicLightValueMatch ? parseFloat(contribMunicipalPublicLightValueMatch[1].replace(',', '.')) : 0;

    const energySCEEEWithoutICMSMatch = pdfText.match(/Energia SCEE s\/ ICMSkWh\s+(\d+)\s+[\d.,]+\s+([\d.,]+)/);
    const energySCEEEWithoutICMSQuantity = energySCEEEWithoutICMSMatch ? parseInt(energySCEEEWithoutICMSMatch[1]) : 0;
    const energySCEEEWithoutICMSValue = energySCEEEWithoutICMSMatch ? parseFloat(energySCEEEWithoutICMSMatch[2].replace(',', '.')) : 0;

    const addressMatch = pdfText.match(/(?:RUA|AVENIDA)\s+[A-Z\s\d,.]+/i);
    const address = addressMatch ? addressMatch[0].trim() : '';

    const additionalAddressMatch = pdfText.match(/(\d{5}-\d{3}\s+[A-Z\s,]+)/);
    const additionalAddress = additionalAddressMatch ? additionalAddressMatch[0].trim() : '';

    const nameMatch = pdfText.match(/([A-Z\s]+)\s+\d{8}/);
    const name = nameMatch ? nameMatch[1].trim() : '';

    const urlAccount = `${process.env.URL_BASE}/view-pdf/${fileName}`;

    return new Invoice(
      numberClient,
      referenceMonth,
      electricalEnergyQuantity,
      electricalEnergyValue,
      energySCEEEWithoutICMSQuantity,
      energySCEEEWithoutICMSValue,
      compensatedEnergyGDQuantity,
      compensatedEnergyGDValue,
      contribMunicipalPublicLightValue,
      urlAccount,
      name,
      address,
      additionalAddress
    );
  }
}
