
import styles from './GitHubLogo.module.scss';
import githubWhiteLogo from '../../../assets/contact/githubwhite.svg';
import githubBlackLogo from '../../../assets/contact/githubblack.svg';

type GitHubLogoProps = {
    imgTheme: String;
}

function GitHubLogo({ imgTheme }: GitHubLogoProps) {
    return (
        <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
            <img className={styles.githubicon} src={imgTheme === "white" ? githubWhiteLogo : githubBlackLogo} alt="GitHub"/>
        </a>
    )
}

export default GitHubLogo;