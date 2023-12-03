const sendEmail = require("../controllers/contactController/sendEmail")


const sendEmailHandler = async(req, res) => {
    try {
        const response = await sendEmail(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    sendEmailHandler
};