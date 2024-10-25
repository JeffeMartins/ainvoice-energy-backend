import express from 'express';
import path from 'path';
import { json } from 'body-parser';
import { InitializeRoutes } from '../../interface/http/rest/router';
const app = express();
const PORT = process.env.PORT || 3000;
export class App {
    application() {
        app.use('/uploads', express.static(path.resolve(__dirname, '../../uploads')));
        app.use(json());
        const routes = new InitializeRoutes();
        app.use(routes.router);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
}
//# sourceMappingURL=app.js.map