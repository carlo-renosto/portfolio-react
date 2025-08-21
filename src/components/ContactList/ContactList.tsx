
import type { ReactNode } from "react";
import styles from './ContactList.module.scss'

type DashboardProps = {
  children: ReactNode;
};

function ContactList({ children }: DashboardProps) {
    return(
        <div className={styles.contactlist}>
            {children}
        </div>
    )
}

export default ContactList;