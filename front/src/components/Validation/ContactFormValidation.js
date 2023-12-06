

export const validateFullName = (form, setErrors, errors) => {
    const fullName = form.fullName.trim();
    if (!fullName.length) {
        setErrors({
            ...errors,
            fullName: "errors.fullNameEmpty"
        })
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
    } else {
        setErrors({
            ...errors,
            message: ""
        })
    }
}

export const validatePhone = (form, setErrors, errors) => {
    const phone = form.phone.trim();
    if (!phone.length) {
        setErrors({
            ...errors,
            phone: "errors.phoneLength"
        })
    } else {
        setErrors({
            ...errors,
            phone: ""
        })
    }
}