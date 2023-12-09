const {Router} = require('express');
const { postProjectHandler, getAllProjectsHandler } = require('../handlers/projectsHandler');

const projectsRouter = Router();

projectsRouter.post("/create", postProjectHandler)
projectsRouter.get("/", getAllProjectsHandler)

module.exports = projectsRouter;