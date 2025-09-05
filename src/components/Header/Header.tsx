
import styles from './Header.module.scss';
import { useState } from "react";
import Information from "./Information/Information";
import HeaderDropdown from './HeaderDropdown/HeaderDropdown';
import ContactList from '../ContactList/ContactList';
import Contact from '../Contact/Contact';
import Phone from '../Contact/Phone/Phone';
import Mail from '../Contact/Mail/Mail';
import LinkedIn from '../Contact/LinkedIn/LinkedIn';
import Resume from '../Contact/Resume/Resume';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={styles.header}>
            <Information />
            <HeaderDropdown 
                isOpen={isOpen}
                onOpen={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <div>
                    <ContactList>
                        <Contact>
                            <Phone />
                        </Contact>
                        <Contact>
                            <Mail />
                        </Contact>
                        <Contact>
                            <LinkedIn />
                        </Contact>
                    </ContactList>
                    <Resume />
                </div>
            )}
        </header>
    )
}

export default Header;