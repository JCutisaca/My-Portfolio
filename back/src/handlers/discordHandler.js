const getStatus = require("../controllers/discordController/getStatus")


const getStatusHandler = async (req, res) => {
    try {
        const response = await getStatus();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getStatusHandler
}