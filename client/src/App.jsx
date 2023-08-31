import { useRef, useState } from 'react'
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
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/register'
import Login from './components/login'
import Search from './components/search'

import {BrowserRouter as Router , Routes , Route } from "react-router-dom"

import About from './components/about'

import Info from './components/info'
import SeeMore from './components/seemore'
import UpgradePage from './components/upgrade'
function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Header/>} > 
        
        <Route path ='/'  element ={<Home />}/>
        <Route path ="/info/patient" element={<Info/>}/>
        <Route path ="/details/patient" element={<SeeMore/>}/>
        <Route path ="/upgrade/patient" element={<UpgradePage/>}/>
        <Route path ="/search/patient" element={<Search/>}/>
       
        </Route>
        <Route path ="/signup/doctor"  element ={<SignupDoctor Rtype="doctor"/>}/>
        <Route path ="/signup/patient"  element ={<SignupDoctor Rtype="patient"/>}/>
        <Route path ="/login/doctor"  element ={< Login  Ltype="doctor"/>}/>
        <Route path ="/login/patient"  element ={< Login Ltype="patient"/>}/>
      
       
      </Routes>
    </Router>
    </>
  )
}

export default App
