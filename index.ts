import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import './connect';
import cors from "cors";

dotenv.config();


const sequelize = require("./connect");
const User = require("./src/models/user.model");

sequelize.sync({force:true})

const app: Express = express();

app.use(morgan('combined'));
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(cors(corsOptions));

app.listen(process.env.PORT || 8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 8080}`);
});