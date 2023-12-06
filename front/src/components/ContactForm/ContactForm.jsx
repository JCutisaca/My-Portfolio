import { useEffect, useState } from 'react';
import styles from './ContactForm.module.css';
import 'react-quill/dist/quill.snow.css';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { validateEmail, validateFullName, validateMessage, validateSubject } from '../Validation/ContactFormValidation';
import { postContact } from '@/apiRequests/postContact';
import Swal from 'sweetalert2';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function ContactForm() {

    const [t, i18n] = useTranslation("global");

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleBlurFullName = () => {
        validateFullName(form, setErrors, errors)
    }
    const handleBlurEmail = () => {
        validateEmail(form, setErrors, errors)
    }
    const handleBlurSubject = () => {
        validateSubject(form, setErrors, errors)
    }
    const handleBlurMessage = () => {
        validateMessage(form, setErrors, errors)
    }

    const handleMessage = (value) => {
        setForm({
            ...form,
            message: value
        })
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await postContact(form)
            Swal.fire({
                title: t("contact.sentTitle"),
                text: t("contact.sentMessage"),
                icon: "success"
            });
        } catch (error) {
            console.log(error.response.data);
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: t("errors.errorTitle"),
                text: t("errors.errorMessage")
            });
        }
    }

    useEffect(() => {
        setInterval(() => {

            const buttons = document.querySelectorAll('.ql-toolbar button');
            const alignButton = document.querySelector('.ql-toolbar span.ql-align');
            const alignOptions = document.querySelectorAll('.ql-toolbar .ql-align .ql-picker-item');
            const names = {
                'bold': t("textToolbar.bold"),
                'italic': t("textToolbar.italic"),
                'underline': t("textToolbar.underline"),
                'align': t("textToolbar.align"),
                'align=': t("textToolbar.alignLeft"),
                'align=center': t("textToolbar.alignCenter"),
                'align=right': t("textToolbar.alignRight"),
                'list=ordered': t("textToolbar.list"),
                'list=bullet': t("textToolbar.bullet"),
                'blockquote': t("textToolbar.blockquote"),
                'strike': t("textToolbar.strike"),
                'clean': t("textToolbar.clean")
            };

            buttons.forEach((button) => {
                const classes = Array.from(button.classList);
                const className = classes.find(cls => names.hasOwnProperty(cls.replace('ql-', '')));
                const newClass = classes.find(cls => names.hasOwnProperty(cls.replace('ql-', '') + '=' + button.value));
                if (newClass) {
                    const name = names[newClass?.replace('ql-', '') + '=' + button.value];
                    button.setAttribute('title', name);
                } else {
                    const name = names[className?.replace('ql-', '')];
                    button.setAttribute('title', name);
                }
            });

            if (alignButton) {
                alignButton.setAttribute('title', names['align']);
            }

            alignOptions.forEach((option) => {
                const value = option.getAttribute('data-value');
                if (value !== null) {
                    const name = names['align=' + value];
                    option.setAttribute('title', name);
                }
            });
        }, 3000)
    }, [i18n.language]);

    return (
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="name">{t("contact.name")}:</label>
                <input maxLength="30" value={form.fullName} onBlur={handleBlurFullName} onChange={handleChange} type="text" id="fullName" name="fullName" required />
                {errors.fullName ? <p className={styles.errorMessage}>{t(`${errors.fullName}`)}</p> : <p>&nbsp;</p>}
                <label htmlFor="email">{t("contact.email")}:</label>
                <input maxLength="50" value={form.email} onBlur={handleBlurEmail} onChange={handleChange} type="email" id="email" name="email" required />
                {errors.email ? <p className={styles.errorMessage}>{t(`${errors.email}`)}</p> : <p>&nbsp;</p>}
                <label htmlFor="subject">{t("contact.subject")}:</label>
                <input maxLength="30" value={form.subject} onBlur={handleBlurSubject} onChange={handleChange} type="text" id="subject" name="subject" required />
                {errors.subject ? <p className={styles.errorMessage}>{t(`${errors.subject}`)}</p> : <p>&nbsp;</p>}
                <label htmlFor="message">{t("contact.message")}:</label>
                <ReactQuill
                    className={`${styles.message} bg-[#282828] dark:bg-[#282828] color-[#282828] dark:color-[#FFF]`}
                    theme="snow"
                    value={form.message}
                    onBlur={handleBlurMessage}
                    onChange={handleMessage}
                    modules={{
                        toolbar: [
                            'bold',
                            'italic',
                            'underline',
                            { 'align': ['', 'center', 'right'] },
                            { 'list': 'ordered' },
                            { 'list': 'bullet' },
                            'blockquote',
                            'strike',
                            'clean'
                        ]
                    }}
                />
                {errors.message ? <p className={styles.errorMessage}>{t(`${errors.message}`)}</p> : <p>&nbsp;</p>}
                <button type="submit">{t("contact.submit")}</button>
            </form>
        </div>
    )
}