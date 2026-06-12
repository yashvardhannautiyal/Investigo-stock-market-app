import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
// import Menu from "./Menu";

function DashboardLayout({user, setUser}) {
  return (
    <div>
      {/* dashboard nav  */}
      <DashboardNav user={user} setUser={setUser}/>

        <div className="flex-1 p-6">
          {/* outlet is where the dahboard pages will render*/}
          <Outlet />
        </div>
      </div>
  );
}

export default DashboardLayout;
