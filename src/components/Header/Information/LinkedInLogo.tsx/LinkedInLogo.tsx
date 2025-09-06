
import styles from './LinkedInLogo.module.scss';
import linkedinWhiteLogo from '../../../../assets/contact/linkedinwhite.svg';
import linkedinBlackLogo from '../../../../assets/contact/linkedinblack.svg';

type LinkedInLogoProps = {
    imgTheme: String;
}

function LinkedInLogo({ imgTheme }: LinkedInLogoProps) {
    return (
        <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
            <img className={styles.linkedinicon} src={imgTheme === "white" ? linkedinWhiteLogo : linkedinBlackLogo} alt="LinkedIn"/>
        </a>
    )
}

export default LinkedInLogo;