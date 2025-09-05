
import styles from './GitHub.module.scss';

function GitHub() {
    return (
        <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
            <img className={styles.githubicon} src="src/assets/contact/github_white.svg" alt="GitHub"/>
            <p>GitHub</p>
        </a>
    )
}

export default GitHub;