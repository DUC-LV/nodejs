import express from "express";

const router = express.Router();

const registerApi = require('./register.controller');
const loginApi = require('./login.controller');
const updateTopicPlaylist = require('./updateTopicPlaylist.controller');

router.use(registerApi);
router.use(loginApi);
router.use(updateTopicPlaylist);

module.exports = router;