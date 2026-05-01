import { Routes, Route } from 'react-router-dom'
import HomePage from './components/landingPage/homePage/HomePage'
import Features from './components/landingPage/features/Features'
import NotFound from './components/NotFound'
import Navbar from './components/landingPage/Navbar'
import Footer from './components/landingPage/Footer'
import LoginPage from './components/landingPage/user_login/LoginPage'
import SignUpPage from './components/landingPage/user_login/SignUpPage'
import { Outlet } from 'react-router-dom'
import OpenAccount from './components/landingPage/OpenAccount'
import DashboardLayout from './components/dashboardPage/DashboardLayout'
import DashboardHome from './components/dashboardPage/DashboardHome'
import Portfolio from './components/dashboardPage/portfolio/Portfolio.jsx'
import Positions from './components/dashboardPage/positions/Positions.jsx'
import Funds from './components/dashboardPage/funds/Funds.jsx'
// import Watchlist from './components/dashboardPage/watchlist/Watchlist.jsx'


//layout for pages with navbar + footer
function PublicLayout(){
  return(
    <>
    <Navbar />
    <Outlet />
    <hr className='text-blue-300' />
    <OpenAccount />
    <hr className='text-blue-300' />
    <Footer />
    </>
  )
}
function App() {
  return (
    <div className='bg-linear-to-r from-amber-50 to-blue-100 text-gray-800 min-h-screen'>
      
      <Routes>
      {/* pages with navbar + footer  */}
      <Route element={<PublicLayout />}>
      <Route path='/' element={<HomePage />} />
        <Route path='/features' element={<Features />} />
        <Route path='*' element={<NotFound />} />
        </Route>

        {/* pages without navbar/footer  */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        

        {/*dashboard pages  */}
         <Route path="/dashboard" element={<DashboardLayout />}>
        
        <Route index element={<DashboardHome />} />

        <Route path="portfolio" element={<Portfolio />} />

        {/* <Route path="watchlist" element={<Watchlist />} /> */}
        <Route path="positions" element={<Positions />} />

        <Route path="funds" element={<Funds />} />
        </Route>
        </Routes> 
        
    </div>
  )
}

export default App
