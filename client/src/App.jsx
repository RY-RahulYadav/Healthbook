import { useState } from 'react'
import './styles/main.css'
import "./styles/signup.css"
import Header from './components/child_components/header'
import Home from './components/home'
import SignupDoctor from './components/registerDoctor'
import SignupPatient from './components/registerPatient'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path ='/'  element ={<Home/>}/>
        <Route path ="/signup/doctor"  element ={<SignupDoctor/>}/>
        <Route path ="/signup/patient"  element ={<SignupPatient/>}/>
       
      </Routes>
    </Router>
    </>
  )
}

export default App
