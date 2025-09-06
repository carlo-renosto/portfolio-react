
import styles from './GitHub.module.scss';

type GitHubProps = {
    imgTheme: String;
}

function GitHub({ imgTheme }: GitHubProps) {
    return (
        <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
            <img className={styles.githubicon} src={"./assets/contact/github" + imgTheme + ".svg"} alt="GitHub"/>
            <p>GitHub</p>
        </a>
    )
}

export default GitHub;