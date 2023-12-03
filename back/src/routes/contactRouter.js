const { Router } = require('express');
const { sendEmailHandler } = require('../handlers/contactHandler');

const contactRouter = Router();

contactRouter.post("/send", sendEmailHandler)

module.exports = contactRouter;