
import styles from './Mail.module.scss';

function Mail() {
    return (
        <a className={styles.mail} href="mailto:carlorenosto15@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className={`material-icons ${styles.mailicon}`}>
                mail_outline
            </span>
            <p className={styles.mail}>carlorenosto15@gmail.com</p>
        </a>
    )
}

export default Mail;