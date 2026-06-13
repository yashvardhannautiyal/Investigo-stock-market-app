import WatchList from "./Watchlist/Watchlist";
import { GeneralContextProvider } from "./GeneralContext";
import Summary from "./Summary";
function DashboardHome() {
  return (
    <div>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <Summary />
    </div>
  );
}

export default DashboardHome;
