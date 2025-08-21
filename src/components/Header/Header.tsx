
import styles from './Header.module.scss';
import { useState } from "react";
import Information from "./Information/Information";
import Resume from './Resume/Resume';
import ResumeAddress from './Resume/ResumeAddress/ResumeAddress';
import ResumeIcon from './Resume/ResumeIcon/ResumeIcon';
import HeaderDropdown from './HeaderDropdown/HeaderDropdown';
import ContactList from '../ContactList/ContactList';
import Contact from '../Contact/Contact';
import PhoneIcon from '../Contact/PhoneIcon/PhoneIcon';
import Phone from '../Contact/Phone/Phone';
import MailIcon from '../Contact/MailIcon/MailIcon';
import Mail from '../Contact/Mail/Mail';
import LinkedInIcon from '../Contact/LinkedInIcon/LinkedInIcon';
import LinkedIn from '../Contact/LinkedIn/LinkedIn';

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
                            <PhoneIcon />
                            <Phone />
                        </Contact>
                        <Contact>
                            <MailIcon />
                            <Mail />
                        </Contact>
                        <Contact>
                            <LinkedInIcon />
                            <LinkedIn />
                        </Contact>
                    </ContactList>
                    <Resume>
                        <ResumeIcon />
                        <ResumeAddress />
                    </Resume>
                </div>
            )}
        </header>
    )
}

export default Header;