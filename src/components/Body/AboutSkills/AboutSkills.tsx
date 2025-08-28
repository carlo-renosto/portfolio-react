
import { useState } from 'react';
import ButtonShow from '../../ButtonShow/ButtonShow';
import styles from './AboutSkills.module.scss';
import AboutSkill from './AboutSkill/AboutSkill';

function AboutSkills() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.about}>
            <div className={styles.aboutheader}>
                <h2>Habilidades</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            <div className={styles.aboutskills}>
                {isOpen && (
                    <div> 
                        <AboutSkill
                            imgSrc="src/assets/frontendwhite.webp"
                            skillTitle="Frontend Development"
                        >
                            <ul className={styles.aboutul}>
                                <li>
                                    React & Vite: Desarrollo de interfaces rápidas y modulares con enfoque en rendimiento y escalabilidad, aprovechando el ecosistema moderno de React y el bundling optimizado de Vite.
                                </li>
                                <br></br>
                                <li>
                                    Angular: Creación de aplicaciones robustas y mantenibles mediante arquitectura basada en componentes y TypeScript, con especial atención en la organización y reutilización de código.
                                </li>
                                <br></br>
                                <li>
                                    TypeScript/JavaScript: Implementación de soluciones seguras y tipadas en TypeScript, así como desarrollo ágil y flexible en JavaScript para mejorar la experiencia de usuario.
                                </li>
                            </ul>
                        </AboutSkill>
                        <AboutSkill 
                            imgSrc="src/assets/backendwhite.webp"
                            skillTitle="Backend Development"
                        >
                            <ul className={styles.aboutul}>
                                <li>
                                    Node.js & Express.js: Construcción de APIs REST eficientes y escalables, integrando middleware personalizado y control de flujos de datos en tiempo real.
                                </li>
                                <br></br>
                                <li>
                                    Java & Spring: Desarrollo de aplicaciones empresariales con Spring Framework, incluyendo seguridad, persistencia de datos y servicios distribuidos.
                                </li>
                            </ul>
                        </AboutSkill>
                        <AboutSkill 
                            imgSrc="src/assets/desktopwhite.webp"
                            skillTitle="Desktop Development"
                        >
                            <ul className={styles.aboutul}>
                                <li>
                                    C# & WinForms: Creación de aplicaciones de escritorio intuitivas con interfaces gráficas dinámicas y conexión a bases de datos locales/remotas.
                                </li>
                                <br></br>
                                <li>
                                    VB.NET: Mantenimiento y modernización de sistemas legados en entornos empresariales, asegurando compatibilidad y optimización de procesos internos.
                                </li>
                            </ul>
                        </AboutSkill>
                        <AboutSkill 
                            imgSrc="src/assets/mobilewhite.webp"
                            skillTitle="Mobile Development"
                        >
                            <ul className={styles.aboutul}>
                                <li>
                                    Java/Kotlin (Android): Desarrollo de aplicaciones móviles nativas con integración de servicios externos (APIs, Firebase) y enfoque en usabilidad y rendimiento.
                                </li>
                            </ul>
                        </AboutSkill>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutSkills;