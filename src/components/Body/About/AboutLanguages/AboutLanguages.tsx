
import { useState } from 'react';
import styles from './AboutLanguages.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import AboutLanguage from './AboutLanguage/AboutLanguage';

function AboutLanguages() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={styles.about}>
            <div className={styles.aboutheader}>
                <h2>Lenguajes</h2>

                <ButtonShow 
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(!isOpen)}
                />
            </div>
            <hr className={styles.hr}/>
            {isOpen && (
                <div className={styles.aboutlanguages}>
                    <AboutLanguage imgSrc="./src/assets/languages/typescript.svg" imgAlt="TypeScript"/>
                    <AboutLanguage imgSrc="./src/assets/languages/javascript.svg" imgAlt="JavaScript"/>
                    <AboutLanguage imgSrc="./src/assets/languages/java.svg" imgAlt="Java"/>
                    <AboutLanguage imgSrc="./src/assets/languages/csharp.svg" imgAlt="C#"/>
                    <AboutLanguage imgSrc="./src/assets/languages/vbnet.svg" imgAlt="VB.NET"/>
                    <AboutLanguage imgSrc="./src/assets/languages/c.svg" imgAlt="C"/>
                    <AboutLanguage imgSrc="./src/assets/languages/c++.svg" imgAlt="C++"/>
                    <AboutLanguage imgSrc="./src/assets/languages/python.svg" imgAlt="Python"/>
                </div>
            )}
        </div>
    )
}

export default AboutLanguages;