
import styles from './GitHubLogo.module.scss';

type GitHubLogoProps = {
    imgTheme: String;
}

function GitHubLogo({ imgTheme }: GitHubLogoProps) {
    return (
        <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
            <img className={styles.githubicon} src={"./assets/contact/github" + imgTheme + ".svg"} alt="GitHub"/>
        </a>
    )
}

export default GitHubLogo;