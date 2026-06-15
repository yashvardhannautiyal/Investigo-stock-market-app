import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/landingPage/homePage/HomePage";
import Features from "./components/landingPage/features/Features";
import NotFound from "./components/NotFound";
import Navbar from "./components/landingPage/Navbar";
import Footer from "./components/landingPage/Footer";
import LoginPage from "./components/landingPage/user_login/LoginPage";
import SignUpPage from "./components/landingPage/user_login/SignUpPage";
import { Outlet } from "react-router-dom";
import OpenAccount from "./components/landingPage/OpenAccount";
import DashboardLayout from "./components/dashboardPage/DashboardLayout";
import DashboardHome from "./components/dashboardPage/DashboardHome";
import Portfolio from "./components/dashboardPage/portfolio/Portfolio.jsx";
import Positions from "./components/dashboardPage/positions/Positions.jsx";
import Funds from "./components/dashboardPage/funds/Funds.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

//layout for pages with navbar + footer
function PublicLayout({user, setUser}) {
  return (
    <>
      <Navbar user = {user} setUser={setUser} />
      <Outlet />
      <hr className="text-blue-300 dark:text-gray-700" />
      <OpenAccount />
      <hr className="text-blue-300 dark:text-gray-700" />
      <Footer />
    </>
  );
}
function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("https://investigo-backend.onrender.com/api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (err) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token");
        }
      }
      // setIsLoading(false);
    };
    fetchUser();
  }, []);

  // if(isLoading){
  //   return(
  //     <div className="min-h-screen bg-gray-800 flex items-center justify-center">
  //       <div className="text-white">Loading...</div>
  //     </div>
  //   )
  // }
  return (
    // <div className='bg-linear-to-r from-amber-50 to-blue-100 text-gray-800 min-h-screen dark:bg-gray-900'>
    <div className="bg-linear-to-r from-amber-50 to-blue-100  text-gray-800 dark:bg-linear-to-r dark:from-gray-950 dark:to-gray-900 dark:text-white min-h-screen">
      <Routes>
        {/* pages with navbar + footer  */}
        <Route element={<PublicLayout user={user} setUser={setUser}/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* pages without navbar/footer  */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage setUser = {setUser} />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage setUser = {setUser} />} />

        {/*dashboard pages  */}
        <Route path="/dashboard" element={<DashboardLayout user={user} setUser={setUser}/>}>
          <Route index element={<DashboardHome />} />

          <Route path="portfolio" element={<Portfolio />} />

          {/* <Route path="watchlist" element={<Watchlist />} /> */}
          <Route path="positions" element={<Positions />} />

          <Route path="funds" element={<Funds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
