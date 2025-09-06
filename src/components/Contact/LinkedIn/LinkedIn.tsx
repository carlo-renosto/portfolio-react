
import styles from './LinkedIn.module.scss';

type LinkedInProps = {
    imgTheme: String;
}

function LinkedIn({ imgTheme }: LinkedInProps) {
    return (
        <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
            <img className={styles.linkedinicon} src={"./assets/contact/linkedin" + imgTheme + ".svg"} alt="LinkedIn"/>
            <p>LinkedIn</p>
        </a>
    )
}

export default LinkedIn;