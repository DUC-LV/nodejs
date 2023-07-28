import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";

dotenv.config();
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use(morgan('combined'));

app.listen(process.env.PORT || 8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 8080}`);
});