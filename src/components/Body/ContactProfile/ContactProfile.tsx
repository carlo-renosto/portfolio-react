
import { useEffect, useState } from 'react';
import GitHub from '../../Contact/GitHub/GitHub';
import LinkedIn from '../../Contact/LinkedIn/LinkedIn';
import Mail from '../../Contact/Mail/Mail';
import Phone from '../../Contact/Phone/Phone';
import Resume from '../../Contact/Resume/Resume';
import styles from './ContactProfile.module.scss';

function ContactProfile() {
    var htmlTheme = document.documentElement.getAttribute("data-theme");
    htmlTheme = htmlTheme === "dark" ? "white" : "black";
    const [theme, setTheme] = useState(htmlTheme);
        
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            setTheme(currentTheme === "dark" ? "white" : "black");
        });
        
        observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
    });
        
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.contact}>
            <div className={styles.contactheader}>
                <h2>Contacto</h2>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.contactinfo}>
                <Phone />
                <Mail />
                <LinkedIn imgTheme={theme}/>
                <GitHub imgTheme={theme}/>
                <Resume />
            </div>
        </div>
    )
}

export default ContactProfile;