import express from "express";

const router = express.Router();

const registerApi = require('./register.controller');
const loginApi = require('./login.controller');

router.use(registerApi);
router.use(loginApi);

module.exports = router;