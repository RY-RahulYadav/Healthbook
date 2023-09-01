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
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/register'
import Login from './components/login'
import Search from './components/search'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Info from './components/info'
import SeeMore from './components/seemore'
import UpgradePage from './components/upgrade'
import GlobalData from './components/child_components/Global_data'
import NotFound from './components/child_components/not_found'
import { useEffect, createContext, useState } from 'react'


export const UserType = createContext();
function App() {
     const [User_type , setUser_type] = useState("")
   

  return (
    <>
    <UserType.Provider value={[User_type , setUser_type]}>
      <GlobalData>
        <Router>
          <Routes>
            <Route path='/' element={<Header />} >
              <Route path='/' element={<Home />} />
              <Route path="/info/patient/:id" element={<Info />} />
              <Route path="/details/patient/:id" element={<SeeMore />} />
              <Route path="/upgrade/patient" element={<UpgradePage />} />
              <Route path="/search/patient" element={<Search />} />
            </Route>
            <Route path="/signup/doctor" element={<SignupDoctor Rtype="doctor" />} />
            <Route path="/signup/patient" element={<SignupDoctor Rtype="patient" />} />
            <Route path="/login/doctor" element={< Login Ltype="doctor" />} />
            <Route path="/login/patient" element={< Login Ltype="patient" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalData></UserType.Provider>

    </>
  )
}

export default App
