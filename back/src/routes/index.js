const { Router } = require('express');
const spotifyRouter = require('./spotifyRouter');
const weatherRouter = require('./weatherRouter');
const contactRouter = require('./contactRouter');
const projectsRouter = require('./projectsRouter');

const router = Router();

router.use("/spotify", spotifyRouter)
router.use("/weather", weatherRouter)
router.use("/contact", contactRouter)
router.use("/projects", projectsRouter)

module.exports = router;