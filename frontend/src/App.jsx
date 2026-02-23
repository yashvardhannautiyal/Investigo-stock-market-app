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


//layout for pages with navbar + footer
function PublicLayout(){
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
function App() {
  return (
    <div>
      
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
