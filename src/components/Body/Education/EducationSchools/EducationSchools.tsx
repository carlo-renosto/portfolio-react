
import { useState } from "react";
import styles from './EducationSchools.module.scss';
import ButtonShow from "../../../ButtonShow/ButtonShow";
import EducationSchool from "./EducationSchool/EducationSchool";

function EducationSchools() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.education}>
            <div className={styles.educationheader}>
                <h2>Formación Académica</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.educationschools}>
                {isOpen && (
                    <div>
                        <EducationSchool
                            title="Tecnicatura Universitaria en Sistemas Informáticos"
                            place="Universidad Tecnológica Nacional - Facultad Regional General Pacheco"
                            from="Marzo 2024"
                            to="Diciembre 2024"
                        />
                        <EducationSchool
                            title="Tecnicatura Universitaria en Programación"
                            place="Universidad Tecnológica Nacional - Facultad Regional General Pacheco"
                            from="Marzo 2021"
                            to="Julio 2023"
                        />
                        <EducationSchool
                            title="Bachillerato con Orientación en Ciencias Económicas"
                            place="Escuela Don Orione"
                            from="Marzo 2018"
                            to="Diciembre 2020"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EducationSchools;