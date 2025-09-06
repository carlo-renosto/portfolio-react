
import styles from './Resume.module.scss';

function Resume() {
    return (
        <a className={styles.resume} href={`${import.meta.env.BASE_URL}cv-carlo-renosto.pdf`} target="_blank" rel="noopener noreferrer">
            <span className={`material-symbols-outlined ${styles.resumeicon}`}>
                assignment
            </span>
            <p>Ver mi CV</p>
        </a>
    )
}

export default Resume;