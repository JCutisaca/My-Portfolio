const { Router } = require('express');
const spotifyRouter = require('./spotifyRouter');
const router = Router();

router.use("/", spotifyRouter)

module.exports = router;