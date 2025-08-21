
import type { ReactNode } from "react";
import styles from './Contact.module.scss';

type DashboardProps = {
  children: ReactNode;
};

function Contact({ children }: DashboardProps) {
    return (
        <div className={styles.contact}>
            {children}
        </div>
    )
}

export default Contact;