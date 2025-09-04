
import { useState } from 'react';
import styles from './EducationCourses.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import EducationCourse from './EducationCourse/EducationCourse';

function EducationCourses() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.education}>
            <div className={styles.educationheader}>
                <h2>Certificaciones</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.educationcourses}>
                {isOpen && (
                    <div> 
                        <EducationCourse 
                            title="Bootcamp COBOL/Mainframe"
                            place="Accenture"
                            from="Febrero 2025"
                            to="Marzo 2025"
                            description=" Capacitación intensiva en tecnologías mainframe, incluyendo COBOL, JCL, y herramientas de entorno z/OS"
                        />
                        <EducationCourse 
                            title="Transformación Digital e Inteligencia Artificial Generativa"
                            place="Universidad Nacional del Delta"
                            from="Septiembre 2024"
                            to="Diciembre 2024"
                            description="Formación en fundamentos de la inteligencia artificial generativa, utilizando herramientas como Google Cloud Console, Jupyter Lab y Vertex AI Workbench."
                        />
                        <EducationCourse 
                            title="Desarrollo Web Frontend - React.js"
                            place="Coderhouse"
                            from="Diciembre 2023"
                            to="Febrero 2024"
                            description="Formación en fundamentos del desarrollo web frontend y las SPA (single-page applications), utilizando el framework React.js."
                            project="https://github.com/carlo-renosto/ecommerce-react"
                            certification="/src/assets/certifications/certificado_reactjs.webp"
                        />
                        <EducationCourse 
                            title="Desarrollo Web Backend"
                            place="Coderhouse"
                            from="Agosto 2023"
                            to="Enero 2024"
                            description="Formación en fundamentos del desarrollo web backend, utilizando frameworks como Express.js."
                            project="https://github.com/carlo-renosto/ecommerce-backend"
                            certification="/src/assets/certifications/certificado_programacionbackend.webp"
                       />
                        <EducationCourse 
                            title="Argentina Programa 'Yo Programo'"
                            place="Ministerio de Economía de la Nación, de Educación y de Ciencia y Tecnología"
                            from="Octubre 2022"
                            to="Mayo 2023"
                            description="Formación en fundamentos del desarrollo web backend, utilizando frameworks como Express.js."
                            certification="/certifications/certificado_yoprogramo.pdf"
                        />
                        <EducationCourse 
                            title="Argentina Programa 'Sé Programar'"
                            place="Ministerio de Economía de la Nación, de Educación y de Ciencia y Tecnología"
                            from="Julio 2022"
                            to="Agosto 2022"
                            description=" Formación en fundamentos de la programación imperativa, estructuras de datos y lenguajes JavaScript y Ruby."
                            certification="/certifications/certificado_seprogramar.pdf"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EducationCourses;