import express, { Response, Request } from "express";

const TopicPlaylist = require("../models/topicPlaylist.model");
const router = express.Router();

router.post('/update/topic-playlist',async function (req: Request, res: Response) {
    try {
        const { title } = req.body;

        const alreadyExistsTopicPlaylist = await TopicPlaylist.findOne({ where: { title }}, function(error: any){
            if(error){
                res.status(500).json({ error: "Not User" });
            }
        });

        if(alreadyExistsTopicPlaylist){
            return res.json({
                "errorCode": 409,
                "message": "topic already exists!",
                "data": null,
            })
        };

        const newTopicPlaylist = new TopicPlaylist({ title });
        const saveTopicPlaylist = await newTopicPlaylist.save(function(error: any){
            if(error){
                res.status(500).json({ error: "Cannot update topic playlist at the moment!" });
            }
        });

        if(saveTopicPlaylist){
            return res.json({
                "errorCode": 200,
                "message": "successful update",
                "data": null,
            })
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;