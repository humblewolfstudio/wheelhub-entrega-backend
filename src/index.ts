import express from "express";
import router from "./routes/api.routes";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { user } from "./entity/User";
import cors from 'cors';
import bodyParser from "body-parser";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import options from "./swagger_options";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.db",
    entities: [user],
    synchronize: true
});

const app = express();
const port = 8080;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use('/api', router);

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
})
    .catch((error) => console.log(error));