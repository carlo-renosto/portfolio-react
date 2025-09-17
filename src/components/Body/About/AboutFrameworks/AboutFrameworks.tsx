
import { useState } from 'react';
import styles from './AboutFrameworks.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import AboutLanguage from '../AboutLanguages/AboutLanguage/AboutLanguage';
import reactLogo from '../../../../assets/frameworks/react.svg';
import angularLogo from '../../../../assets/frameworks/angular.svg';
import expressLogo from '../../../../assets/frameworks/express.webp';
import springLogo from '../../../../assets/frameworks/spring.svg';
import netLogo from '../../../../assets/frameworks/net.svg';

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
                    <AboutLanguage imgSrc={reactLogo} imgAlt="ReactJS"/>
                    <AboutLanguage imgSrc={angularLogo} imgAlt="AngularJS"/>
                    <AboutLanguage imgSrc={expressLogo} imgAlt="ExpressJS"/>
                    <AboutLanguage imgSrc={springLogo} imgAlt="Spring"/>
                    <AboutLanguage imgSrc={netLogo} imgAlt=".NET Framework"/>
                </div>
            )}
        </div>
    )
}

export default AboutFrameworks;