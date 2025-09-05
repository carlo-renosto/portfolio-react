
import styles from './LinkedIn.module.scss';

function LinkedIn() {
    return (
        <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
            <img className={styles.linkedinicon} src="src/assets/contact/linkedin-white.svg" alt="LinkedIn"/>
            <p>LinkedIn</p>
        </a>
    )
}

export default LinkedIn;