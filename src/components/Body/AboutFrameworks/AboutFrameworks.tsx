
import { useState } from 'react';
import styles from './AboutFrameworks.module.scss';
import ButtonShow from '../../ButtonShow/ButtonShow';
import AboutLanguage from '../AboutLanguages/AboutLanguage/AboutLanguage';

function AboutFrameworks() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.about}>
            <div className={styles.aboutheader}>
                <h2>Frameworks/Librerias</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            {isOpen && (
                <div className={styles.aboutframeworks}>
                    <AboutLanguage imgSrc="src/assets/frameworks/react.svg" imgAlt="ReactJS"/>
                    <AboutLanguage imgSrc="src/assets/frameworks/angular.svg" imgAlt="AngularJS"/>
                    <AboutLanguage imgSrc="src/assets/frameworks/express.svg" imgAlt="ExpressJS"/>
                    <AboutLanguage imgSrc="src/assets/frameworks/spring.svg" imgAlt="Spring"/>
                    <AboutLanguage imgSrc="src/assets/frameworks/net.svg" imgAlt=".NET Framework"/>
                </div>
            )}
        </div>
    )
}

export default AboutFrameworks;