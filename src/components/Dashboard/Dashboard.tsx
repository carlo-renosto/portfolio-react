
import type { ReactNode } from "react";
import styles from './Dashboard.module.scss';

type DashboardProps = {
  children: ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  return (
    <div className={styles.dashboard}>
      <div>{children}</div>
    </div>
  );
}

export default Dashboard;