
import styles from './EducationCourse.module.scss';

type EducationCourseProps = {
    title: String;
    place: String;
    from: String;
    to: String;
    description: String;
    project?: String | undefined;
    certification?: String | undefined;
}

function EducationCourse({ title, place, from, to, description, project, certification }: EducationCourseProps) {
    console.log(project)
    return (
        <div className={styles.educationcourse}>
            <div className={styles.educationheader}>
                <h2>{title}</h2>
            </div>
            <div className={styles.educationplace}>
                <span className="material-symbols-outlined">
                    school
                </span>
                <h4>{place}</h4>
            </div>
            <div className={styles.educationdate}>
                <span className="material-symbols-outlined">
                    date_range
                </span>
                <p>{from} - {to}</p>
            </div>
            <p className={styles.educationdescription}>{description}</p>
            {project !== undefined && (
                <div className={styles.educationproject}> 
                    <span className="material-symbols-outlined">
                        link
                    </span>
                    <a href={project?.toString()} target="_blank" rel="noopener noreferrer">Proyecto Final</a>
                </div> 
            )}
            {certification !== undefined && (
                <div className={styles.educationcertification}>
                    <span className="material-symbols-outlined">
                        download
                    </span>
                    <a href={certification?.toString()} target="_blank" rel="noopener noreferrer">Certificado</a>
                </div>
            )}
        </div>
    )
}

export default EducationCourse;