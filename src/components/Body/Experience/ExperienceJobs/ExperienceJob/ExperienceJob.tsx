
import styles from './ExperienceJob.module.scss';

type ExperienceJobProps = {
    title: String;
    employer: String;
    from: String;
    to: String;
    description: String;
}

function ExperienceJob({ title, employer, from, to, description }: ExperienceJobProps) {
    return (
        <div className={styles.experiencejob}>
            <h2>{title}</h2>
            <div className={styles.experienceemployer}>
                <span className="material-symbols-outlined">
                    business_center
                </span>
                <p>{employer}</p>
            </div>
            <div className={styles.experiencedate}>
                <span className="material-symbols-outlined">
                    date_range
                </span>
                <p>{from} - {to}</p>
            </div>
            <p className={styles.experiencedesc}>{description}</p>
        </div>
    )
}

export default ExperienceJob;