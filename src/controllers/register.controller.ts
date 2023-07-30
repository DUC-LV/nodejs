import express, { Response, Request } from "express";

const User = require("../models/user.model");
const router = express.Router();

async function register(req: Request, res: Response) {
    try {
        
        return res.json({})
    } catch (error) {
        res.status(500).send("Not Found");
    }
}


module.exports = register;