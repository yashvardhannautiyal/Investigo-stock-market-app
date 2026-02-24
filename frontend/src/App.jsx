import { Routes, Route } from 'react-router-dom'
import HomePage from './components/landingPage/homePage/HomePage'
import Features from './components/landingPage/features/Features'
import Pricing from './components/landingPage/pricing/Pricing'
import NotFound from './components/NotFound'
import Navbar from './components/landingPage/Navbar'
import Footer from './components/landingPage/Footer'
import LoginPage from './components/user_login/LoginPage'
import SignUpPage from './components/user_login/SignUpPage'
import { Outlet } from 'react-router-dom'
import OpenAccount from './components/landingPage/OpenAccount'


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
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<NotFound />} />
        </Route>

        {/* pages without navbar/footer  */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        
        </Routes>
        
    </div>
  )
}

export default App
