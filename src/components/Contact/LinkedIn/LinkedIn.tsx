
import styles from './LinkedIn.module.scss';
import linkedinWhiteLogo from '../../../assets/contact/linkedinwhite.svg';
import linkedinBlackLogo from '../../../assets/contact/linkedinblack.svg';

type LinkedInProps = {
    imgTheme: String;
}

function LinkedIn({ imgTheme }: LinkedInProps) {
    return (
        <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
            <img className={styles.linkedinicon} src={imgTheme === "white" ? linkedinWhiteLogo : linkedinBlackLogo} alt="LinkedIn"/>
            <p>LinkedIn</p>
        </a>
    )
}

export default LinkedIn;