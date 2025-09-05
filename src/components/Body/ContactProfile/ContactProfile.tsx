
import GitHub from '../../Contact/GitHub/GitHub';
import LinkedIn from '../../Contact/LinkedIn/LinkedIn';
import Mail from '../../Contact/Mail/Mail';
import Phone from '../../Contact/Phone/Phone';
import Resume from '../../Contact/Resume/Resume';
import styles from './ContactProfile.module.scss';

function ContactProfile() {
    return (
        <div className={styles.contact}>
            <div className={styles.contactheader}>
                <h2>Contacto</h2>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.contactinfo}>
                <Phone />
                <Mail />
                <LinkedIn />
                <GitHub />
                <Resume />
            </div>
        </div>
    )
}

export default ContactProfile;