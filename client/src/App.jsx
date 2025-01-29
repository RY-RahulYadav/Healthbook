import './styles/header.css'
import "./styles/signup.css"
import "./styles/login.css"
import "./styles/optionmodal.css"
import "./styles/section1.css"
import "./styles/about.css"
import "./styles/info.css"
import "./styles/seemore.css"
import "./styles/upgrade.css"
import "./styles/search.css"
import "./styles/notFound.css"
import "./styles/profile.css"
import "./styles/section2.css"
import "./styles/section3.css"
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/register'
import Login from './components/login'
import Search from './components/search'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Info from './components/patientDetails'
import SeeMore from './components/seemore'
import UpgradePage from './components/upgrade'
import GlobalData from './components/child_components/Global_data'
import NotFound from './components/child_components/not_found'
import { useEffect, createContext, useState } from 'react'
import About_page from './components/about_page'
import ContactPage from './components/contact'
import Profile from './components/profile'



function App() {
     
  

  return (
    <>
    
      <GlobalData>
        <Router>
          <Routes>
            <Route path='/' element={<Header />} >
              <Route path='/' element={<Home />} />
              <Route path="/info/patient/:id" element={<Info />} />
              <Route path="/details/patient/:id" element={<SeeMore />} />
              <Route path="/upgrade/patient" element={<UpgradePage />} />
              <Route path="/search/patient" element={<Search />} />
              <Route path="/about" element={<About_page />} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/profile" element={<Profile/>} />
            </Route>
            <Route path="/signup/doctor" element={<SignupDoctor Rtype="doctor" />} />
            <Route path="/signup/patient" element={<SignupDoctor Rtype="patient" />} />
            <Route path="/login/doctor" element={< Login Ltype="doctor" />} />
            <Route path="/login/patient" element={< Login Ltype="patient" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalData>

    </>
  )
}

export default App
