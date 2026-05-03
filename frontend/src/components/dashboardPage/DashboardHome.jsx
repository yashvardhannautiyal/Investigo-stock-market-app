import WatchList from "./watchlist/Watchlist";
import { GeneralContextProvider } from "./GeneralContext";
import Summary from "./Summary";
function DashboardHome() {
  return (
    <div className="flex">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <Summary />
    </div>
  );
}

export default DashboardHome;
