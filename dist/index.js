"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
require("./connect");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:8080'
};
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)(corsOptions));
app.listen(process.env.PORT || 8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 8080}`);
});
