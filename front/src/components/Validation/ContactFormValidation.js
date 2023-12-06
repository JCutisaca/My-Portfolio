const regexCharacters = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ, ]+$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const validateFullName = (form, setErrors, errors) => {
    const fullName = form.fullName.trim();
    if (!fullName.length) {
        setErrors({
            ...errors,
            fullName: "errors.fullNameEmpty"
        })
        return;
    }
    if (fullName.length < 5) {
        setErrors({
            ...errors,
            fullName: "errors.fullNameShort"
        })
        return;
    }
    if (!regexCharacters.test(fullName)) {
        setErrors({
            ...errors,
            fullName: "errors.fullNameInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            fullName: ""
        })
    }
}
export const validateEmail = (form, setErrors, errors) => {
    const email = form.email.trim();
    if (!email.length) {
        setErrors({
            ...errors,
            email: "errors.emailEmpty"
        })
        return;
    }
    if (!regexEmail.test(email)) {
        setErrors({
            ...errors,
            email: "errors.emailInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            email: ""
        })
    }
}

export const validateSubject = (form, setErrors, errors) => {
    const subject = form.subject.trim();
    if (!subject) {
        setErrors({
            ...errors,
            subject: "errors.subjectEmpty"
        })
        return;
    }
    if (subject.length < 5) {
        setErrors({
            ...errors,
            subject: "errors.subjectShort"
        })
        return;
    }
    if (!regexCharacters.test(subject)) {
        setErrors({
            ...errors,
            subject: "errors.subjectInvalid"
        })
        return;
    } else {
        setErrors({
            ...errors,
            subject: ""
        })
    }
}

export const validateMessage = (form, setErrors, errors) => {
    const message = form.message.replace(/<(.|\n)*?>/g, '').trim();
    if (!message.length) {
        setErrors({
            ...errors,
            message: "errors.messageEmpty"
        })
    }
    if (message.length < 10) {
        setErrors({
            ...errors,
            message: "errors.messageShort"
        })
    } 
    if (message.length > 1000) {
        setErrors({
            ...errors,
            message: "errors.messageLong"
        })
    } else {
        setErrors({
            ...errors,
            message: ""
        })
    }
}