
import type { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Dashboard;