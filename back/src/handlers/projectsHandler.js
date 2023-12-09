const getAlProjects = require("../controllers/projectController/getAllProjects");
const postProject = require("../controllers/projectController/postProject")


const postProjectHandler = async (req, res) => {
    try {
        const response = await postProject(req.body);
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getAllProjectsHandler = async(req, res) => {
    try {
        const response = await getAlProjects();
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    postProjectHandler,
    getAllProjectsHandler
}