const transporter = require('../../config/transporter');
const { EMAIL_USER, USER_RECIPIENT } = process.env;

const sendEmail = async ({ fullName, email, subject, message }) => {
    const regexCharacters = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ, ]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const newFullname = fullName.trim();
    const newEmail = email.trim();
    const newSubject = message.replace(/<(.|\n)*?>/g, '').trim();
    const newMessage = message.replace(/<(.|\n)*?>/g, '').trim();

    if (!(fullName || email || subject || message)) throw Error("Missing information. Please provide all required details.");
    if (!form.fullName.trim().length) throw Error("Full Name is required. Please provide your full name.")
    if (!form.email.trim().length) throw Error("Email is required. Please provide your email address.")
    if (!form.subject.trim().length) throw Error("Subject is required. Please provide a subject.")
    if (!form.message.replace(/<(.|\n)*?>/g, '').trim().length) throw Error("Message is required. Please provide a message.")

    if (!regexCharacters.test(newFullname)) throw Error("Name cannot contain special characters.")

    if (!regexEmail.test(newEmail)) throw Error("Invalid email address entered.")

    if (newSubject.length < 5) throw Error("Subject must be at least 5 characters long.")

    if (!regexCharacters.test(newSubject)) throw Error("Subject cannot contain special characters.")

    if (newMessage.length < 10) throw Error("Message must be at least 10 characters long.")

    if (newMessage.length > 1000) throw Error("Message cannot exceed 1000 characters.")


    await transporter.sendMail({
        from: EMAIL_USER,
        to: USER_RECIPIENT,
        subject: subject,
        html: `
        <span>Email sent from ${newEmail}<span/>
        <br />
        <br />
        <span>${newFullname}<span/>
        <br />
        <br />
        <span>${newSubject}<span/>
        <br />
        <br />
        <span>${message}<span/>`
    })

    return "Email sent successfully.";
}

module.exports = sendEmail;