
import { useState } from 'react';
import styles from './AboutLanguages.module.scss';
import ButtonShow from '../../../ButtonShow/ButtonShow';
import AboutLanguage from './AboutLanguage/AboutLanguage';
import typescriptLogo from '../../../../assets/languages/typescript.svg';
import javascriptLogo from '../../../../assets/languages/javascript.svg';
import javaLogo from '../../../../assets/languages/java.svg';
import csharpLogo from '../../../../assets/languages/csharp.svg';
import vbnetLogo from '../../../../assets/languages/vbnet.svg';
import cLogo from '../../../../assets/languages/c.svg';
import cppLogo from '../../../../assets/languages/c++.svg';
import pythonLogo from '../../../../assets/languages/python.svg';

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
                    <AboutLanguage imgSrc={typescriptLogo} imgAlt="TypeScript"/>
                    <AboutLanguage imgSrc={javascriptLogo} imgAlt="JavaScript"/>
                    <AboutLanguage imgSrc={javaLogo} imgAlt="Java"/>
                    <AboutLanguage imgSrc={csharpLogo} imgAlt="C#"/>
                    <AboutLanguage imgSrc={vbnetLogo} imgAlt="VB.NET"/>
                    <AboutLanguage imgSrc={cLogo} imgAlt="C"/>
                    <AboutLanguage imgSrc={cppLogo} imgAlt="C++"/>
                    <AboutLanguage imgSrc={pythonLogo} imgAlt="Python"/>
                </div>
            )}
        </div>
    )
}

export default AboutLanguages;