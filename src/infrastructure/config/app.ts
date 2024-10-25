import express from 'express';
import path from 'path';
import { json } from 'body-parser';
import { InitializeRoutes } from '../../interface/http/rest/router';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

export class App {
    application() {
        app.use('/uploads', express.static(path.resolve(__dirname, '../../uploads')));
        app.use(json());
        app.use(cors());

        const routes = new InitializeRoutes();
        app.use(routes.router);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
}
