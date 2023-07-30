import { Response, Request } from "express";

const User = require("../models/user.model");

async function register(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;
        const alreadyExistsUser = await User.findOne({ where: { email }});

        if(alreadyExistsUser){
            return res.json({
                "errorCode": 409,
                "message": "Email already exists!",
                "data": null,
            })
        }

        const newUser = new User({ email, password, name });
        const saveUser = await newUser.save(function(error: any){
            if(error){
                res.status(500).json({ error: "Cannot register user at the moment!" });
            }
        });

        if(saveUser){
            return res.json({
                "errorCode": 200,
                "message": "Thanks for registering",
                "data": null,
            })
        };
    } catch (error) {
        console.log(error);
        res.status(500).send("Not Found");
    }
}


module.exports = register;