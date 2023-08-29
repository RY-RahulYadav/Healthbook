import { useState } from 'react'
import './styles/header.css'
import "./styles/signup.css"
import "./styles/login.css"
import "./styles/optionmodal.css"
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/register'
import Login from './components/login'

import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Header/>}>
        
        <Route path ='/'  element ={<Home/>}/>
        <Route path ="/signup/doctor"  element ={<SignupDoctor Rtype="doctor"/>}/>
        <Route path ="/signup/patient"  element ={<SignupDoctor Rtype="patient"/>}/>
        
        </Route>
        <Route path ="/login/doctor"  element ={< Login  Ltype="doctor"/>}/>
        <Route path ="/login/patient"  element ={< Login Ltype="patient"/>}/>
      
       
      </Routes>
    </Router>
    </>
  )
}

export default App
