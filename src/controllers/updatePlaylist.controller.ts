import express, { Response, Request } from "express";

const Playlist = require("../models/playlist.model");
const router = express.Router();

router.post('/update/playlist', async function(req: Request, res: Response) {
    try {
        const { thumbnail, thumbnailM, title, sortDescription, artistsNames} = req.body;

        const alreadyExistsPlaylist = await Playlist.findOne({ where: { title }}, function(error: any){
            if(error){
                res.status(500).json({ error: "Not User" });
            }
        });

        if(alreadyExistsPlaylist){
            return res.json({
                "errorCode": 409,
                "message": "playlist already exists!",
                "data": null,
            })
        };

        const newPlaylist = new Playlist({ thumbnail, thumbnailM, title, sortDescription, artistsNames });
        const savePlaylist = await newPlaylist.save(function(error: any){
            if(error){
                res.status(500).json({ error: "Cannot update playlist at the moment!" });
            }
        });

        if(savePlaylist){
            return res.json({
                "errorCode": 200,
                "message": "successful update",
                "data": null,
            })
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;