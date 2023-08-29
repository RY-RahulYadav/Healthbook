import { useState } from 'react'
import './styles/main.css'
import "./styles/signup.css"
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/register'

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
       
      </Routes>
    </Router>
    </>
  )
}

export default App
