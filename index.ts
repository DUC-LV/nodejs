import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import './connect';
import cors from "cors";
import bodyParser from "body-parser";


dotenv.config();


const sequelize = require("./connect");
require("./src/models/user.model");

sequelize.sync({force:true})

const register = require("./src/controllers/register.controller");

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

// register
app.post("/register", register);


app.listen(process.env.PORT || 8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 8080}`);
});