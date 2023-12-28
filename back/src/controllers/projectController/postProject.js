const { Project } = require('../../db');

const postProject = async ({ name, descriptionEnglish, descriptionSpanish, image, website, gitHub, technologies }) => {
    if (!(name?.length && descriptionEnglish?.length && descriptionSpanish?.length && image?.length && website?.length && gitHub?.length && technologies?.length)) throw Error("All variables must be provided with valid values")
    const createProject = await Project.create({
        name,
        descriptionEnglish,
        descriptionSpanish,
        image,
        website,
        gitHub,
        technologies
    })
    return "Project created successfully!"
}

module.exports = postProject;