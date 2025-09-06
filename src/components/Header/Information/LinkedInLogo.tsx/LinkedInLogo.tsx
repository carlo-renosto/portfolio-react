
import styles from './LinkedInLogo.module.scss';

type LinkedInLogoProps = {
    imgTheme: String;
}

function LinkedInLogo({ imgTheme }: LinkedInLogoProps) {
    return (
        <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
            <img className={styles.linkedinicon} src={"./src/assets/contact/linkedin" + imgTheme + ".svg"} alt="LinkedIn"/>
        </a>
    )
}

export default LinkedInLogo;