
import { useState } from 'react';
import styles from './ExperienceJobs.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import ExperienceJob from './ExperienceJob/ExperienceJob';

function ExperienceJobs() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.experience}>
            <div className={styles.experienceheader}>
                <h2>Experiencia Laboral</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.experiencejobs}>
                {isOpen && (
                    <div>
                        <ExperienceJob 
                            title="Transcriptor Freelance con herramientas de IA"
                            employer="Autónomo"
                            from="Diciembre 2024"
                            to="Julio 2025"
                            description=" Transcripción de entrevistas periodísticas y académicas usando herramientas de reconocimiento de voz e inteligencia artificial."
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperienceJobs;