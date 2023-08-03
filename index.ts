import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import './connect';
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();


require("./src/models/user.model");

const api = require('./src/controllers');

const app: Express = express();

app.use(morgan('combined'));
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use(express.json());

app.use(cors(corsOptions));

app.use(api);


app.listen(process.env.PORT || 8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 8080}`);
});