
import styles from './EducationLanguage.module.scss';

type EducationLanguageProps = {
    language: String;
    academy?: String | undefined;
    certification?: String | undefined;
    proficiency: String;
}

function EducationLanguage({ language, academy, certification, proficiency }: EducationLanguageProps) {
    return (
        <div className={styles.educationlanguage}>
            <h2>{language}</h2>
            {academy !== undefined && (
                <div className={styles.educationacademy}>
                    <span className="material-symbols-outlined">
                        school
                    </span>
                    <p>{academy}</p>
                </div>
            )}
            <div className={styles.educationproficiency}>
                <span className="material-symbols-outlined">
                    workspace_premium
                </span>
                <p>{proficiency}</p>
            </div>
            {academy !== undefined && certification !== undefined && (
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

export default EducationLanguage;