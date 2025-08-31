
import { Link } from "react-router-dom";
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <Link className={styles.link} to="/">Sobre Mí</Link>
                <Link className={styles.link} to="/experience">Experiencia</Link>
                <Link className={styles.link} to="/education">Formación</Link>
                <Link className={styles.link} to="/contact">Contacto</Link>
            </nav>
        </footer>
    )
}

export default Footer;