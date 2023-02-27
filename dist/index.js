"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_options_1 = __importDefault(require("./swagger_options"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.db",
    entities: [User_1.user],
    synchronize: true
});
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
app.use('/api', api_routes_1.default);
const specs = (0, swagger_jsdoc_1.default)(swagger_options_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, { explorer: true }));
exports.AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map