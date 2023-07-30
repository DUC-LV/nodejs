import express, { Response, Request } from "express";
import dotenv from 'dotenv';

dotenv.config();


const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/login', async function (req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const userWithEmail = User.findOne({
            where: {
                email: email,
                password: password,
            }
        }, function(error: any){
            if(error){
                res.status(500).json({ error: "Not User" });
            }
        })

        if(!userWithEmail){
            return res.status(400).json({
                "message": "Email or password does not match!"
            })
        }

        const jwtToken = jwt.sign(
            { id: userWithEmail.id, email: userWithEmail.email },
            process.env.JWT_SECRET
        );
        return res.json({
            "errorCode": 200,
            "message": "Welcome Back!",
            "data": {
                "email": email,
            },
            "token": jwtToken,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;