
import { useState } from 'react';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import styles from './AboutMe.module.scss';

function AboutMe() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.about}>
            <div className={styles.aboutheader}>
                <h2>Sobre Mí</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.aboutme}>
                {isOpen && (
                    <p className={styles.aboutmedescription}>
                        Mi nombre es Carlo Renosto, tengo 22 años y vivo en Tigre, Buenos Aires (AMBA). Me gradué como Técnico Universitario en Programación (TUP) en el año 2023, y posteriormente, como Técnico Universitario en Sistemas Informáticos en el año 2024, en la Universidad Tecnológica Nacional (UTN). También me certifiqué en Inglés en el Laboratorio de Idiomas UBA y en Transformación Digital e Inteligencia Artificial Generativa en la Universidad Nacional del Delta, además de haber realizado otros cursos. Estoy en búsqueda de una oportunidad laboral que me permita aplicar mis conocimientos, desarrollar nuevas habilidades y aportar valor a la organización. 
                        <br /><br />
                        Soy una persona comprometida, con una gran disposición para aprender y adaptarme a nuevos desafíos, y con el objetivo de crecer tanto profesional como personalmente en el ámbito de la programación.
                
                    </p>
                )}
            </div>
        </div>
    )
}

export default AboutMe;