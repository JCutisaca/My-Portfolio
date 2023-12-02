import styles from './ContactForm.module.css';

export default function ContactForm() {

    return (
        <div className={styles.container}>
            <div className={styles.containerForm}>
                <form className={styles.form} action="/enviar-formulario" method="post">
                    <label for="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label for="asunto">Asunto:</label>
                    <input type="text" id="asunto" name="asunto" required />
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                    <label for="telefono">Teléfono (Opcional):</label>
                    <input type="tel" id="telefono" name="telefono" />
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}