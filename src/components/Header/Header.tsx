
import Phone from './Contact/Phone/Phone';
import PhoneIcon from './Contact/PhoneIcon/PhoneIcon';
import styles from './Header.module.scss'
import styles2 from './Contact/Contact.module.scss'
import Information from "./Information/Information";

// TODO: Reemplazar <div> de Phone con un Component que reciba un prop children reutilizable, y usarlo para Phone, Mail y LinkedIn
function Header() {
    return (
        <header className={styles.header}>
            <Information />
            <div className={styles2.contact}>
                <PhoneIcon />
                <Phone />
            </div>
        </header>
    )
}

export default Header;