
import styles from './Header.module.scss';
import Information from "./Information/Information";

function Header() {
    return (
        <header className={styles.header}>
            <Information />
            <div className={styles.logos}>
                <a className={styles.linkedin} href="https://www.linkedin.com/in/carlo-renosto-17a589283/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.linkedinicon} src="src/assets/contact/linkedin-white.svg" alt="LinkedIn"/>
                </a>
                <a className={styles.github} href="https://github.com/carlo-renosto" target="_blank" rel="noopener noreferrer">
                    <img className={styles.githubicon} src="src/assets/contact/github_white.svg" alt="GitHub"/>
                </a>
            </div>
        </header>
    )
}

export default Header;