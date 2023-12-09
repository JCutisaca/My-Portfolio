const { Project } = require('../../db')

const getAlProjects = async () => {
    const allProjects = await Project.findAll();
    if (!allProjects.length) throw Error('No projects found.');
    return allProjects;
}

module.exports = getAlProjects;