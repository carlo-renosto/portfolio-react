
import styles from './GitHub.module.scss';
import githubWhiteLogo from '../../../assets/contact/githubwhite.svg';
import githubBlackLogo from '../../../assets/contact/githubblack.svg';

type GitHubProps = {
    imgTheme: String;
}

function GitHub({ imgTheme }: GitHubProps) {
    return (
        <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
            <img className={styles.githubicon} src={imgTheme === "white" ? githubWhiteLogo : githubBlackLogo} alt="GitHub"/>
            <p>GitHub</p>
        </a>
    )
}

export default GitHub;