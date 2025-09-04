
import styles from './ExperienceProject.module.scss';
import type { Repo } from "../../../../../models/interfaces/Repo";

type ExperienceProjectProps = {
    repo: Repo;
}

function ExperienceProject({ repo }: ExperienceProjectProps) {
    return (
        <a className={styles.experienceaddress} href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <div key={repo.id} className={styles.experienceproject}>
                <div className={styles.experienceheader}>
                    <h2>{repo.name}</h2>
                    <span className={`material-symbols-outlined + ${styles.experiencestar}`}>
                        star
                    </span>
                    <p className={styles.experiencestarcount}>{repo.stargazers_count}</p>
                </div>       
                <p className={styles.experiencelanguage}>{repo.language}</p>
                <p className={styles.experiencedesc}>{repo.description}</p>
            </div>
        </a> 
    )
}

export default ExperienceProject;