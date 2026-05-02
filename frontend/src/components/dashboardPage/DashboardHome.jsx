import WatchList from "./watchlist/Watchlist";
import { GeneralContextProvider } from "./GeneralContext";
function DashboardHome() {
  return (
    <div>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
    </div>
  );
}

export default DashboardHome;
