import { CheckHealthStatus } from '../../../application/useCase/CheckHealthStatus';
export class HealthController {
    getHealthStatus(_, res) {
        const { execute } = new CheckHealthStatus();
        const status = execute();
        res.status(200).json({ status });
    }
}
//# sourceMappingURL=HealthController.js.map