import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Menu from "./Menu";

function DashboardLayout() {
  return (
    <div>
      {/* dashboard nav  */}
      <DashboardNav />

      {/* main dashboard area  */}
      <div className="flex flex-1">
        {/* menu : left side*/}
        <Menu />

        <div className="flex-1 p-6">
          {/* outlet is where the dahboard pages will render*/}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
