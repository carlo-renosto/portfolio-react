
import styles from './EducationSchool.module.scss';

type EducationSchoolProps = {
    title: String;
    place: String;
    from: String;
    to: String;
}

function EducationSchool({ title, place, from, to }: EducationSchoolProps) {
    return (
        <div className={styles.educationschool}>
            <h2>{title}</h2>
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
        </div>
    )
}

export default EducationSchool;