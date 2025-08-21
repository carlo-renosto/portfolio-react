
import type { ReactNode } from "react";
import styles from './Resume.module.scss';

type DashboardProps = {
  children: ReactNode;
};

function Resume({ children }: DashboardProps) {
    return (
        <div className={styles.resume}>
            {children}
        </div>
    )
}

export default Resume;