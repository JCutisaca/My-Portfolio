const transporter = require('../../config/transporter');
const { EMAIL_USER, USER_RECIPIENT } = process.env;

const sendEmail = async ({ fullName, email, subject, message }) => {
    if (!(fullName || email || subject || message)) throw Error("Missing information. Please provide all required details.");

    await transporter.sendMail({
        from: EMAIL_USER,
        to: USER_RECIPIENT,
        subject: subject,
        html: `
        <span>Email sent from ${email}<span/>
        <br />
        <br />
        <span>${fullName}<span/>
        <br />
        <br />
        <span>${subject}<span/>
        <br />
        <br />
        <span>${message}<span/>`
    })

    return "Email sent successfully.";
}

module.exports = sendEmail;