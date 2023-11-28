const { Router } = require('express');
const spotifyRouter = require('./spotifyRouter');
const weatherRouter = require('./weatherRouter');

const router = Router();

router.use("/spotify", spotifyRouter)
router.use("/weather", weatherRouter)

module.exports = router;