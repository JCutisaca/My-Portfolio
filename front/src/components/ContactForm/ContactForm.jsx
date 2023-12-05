import { useEffect, useState } from 'react';
import styles from './ContactForm.module.css';
import 'react-quill/dist/quill.snow.css';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function ContactForm() {

    const [t, i18n] = useTranslation("global");
    const [message, setMessage] = useState('');
    const handleMessage = (value) => {
        setMessage(value)
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
            <form className={styles.form} action="/enviar-formulario" method="post">
                <label htmlFor="name">{t("contact.name")}:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">{t("contact.email")}:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="subject">{t("contact.subject")}:</label>
                <input type="text" id="subject" name="subject" required />
                <label htmlFor="message">{t("contact.message")}:</label>
                <ReactQuill
                    className={`${styles.message} bg-[#282828] dark:bg-[#282828] color-[#282828] dark:color-[#FFF]`}
                    theme="snow"
                    value={message}
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
                <label htmlFor="phone">{t("contact.phone")}:</label>
                <input type="tel" id="phone" name="phone" />
                <button type="submit">{t("contact.submit")}</button>
            </form>
        </div>
    )
}