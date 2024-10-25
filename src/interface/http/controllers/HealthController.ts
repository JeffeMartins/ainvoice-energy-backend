import { Request, Response } from 'express';
import { CheckHealthStatus } from '../../../application/useCase/CheckHealthStatus';
import { promises } from 'dns';

export class HealthController {

  getHealthStatus(_: Request, res: Response): void {

    const { execute } = new CheckHealthStatus();
    const status = execute();
    res.status(200).json({ status });
  }
}
