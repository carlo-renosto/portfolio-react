
import { useState } from "react";
import styles from './EducationLanguages.module.scss';
import ButtonShow from "../../../ButtonShow/ButtonShow";
import EducationLanguage from "./EducationLanguage/EducationLanguage";

function EducationLanguages() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.education}>
            <div className={styles.educationheader}>
                <h2>Idiomas</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.educationschools}>
                {isOpen && (
                    <div>
                        <EducationLanguage 
                            language="Español"
                            proficiency="Nativo"
                        />
                         <EducationLanguage 
                            language="Inglés"
                            academy="Laboratorio de Idiomas (UBA)"
                            certification="/certifications/certificado_inglesb2.pdf"
                            proficiency="Upper Intermediate (B2)"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EducationLanguages;