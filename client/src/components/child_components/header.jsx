import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import {Optionlogin , OptionSignup} from "./optionModal"


function Header() {
    const [optionmodal , setloginModal ]= useState({type:"" , status:false})
    // handle  optionlogin and optionsignup modal 

    function handleclick(type){
      if(type==="signup"){
        setloginModal((prev)=>{
            return({
                type:"signup",
                status:true               
                
            })
        })

      }
      else{
        setloginModal((prev)=>{
            return({
                type:"login",
                status:true               
                
            })
        })

      }
    }

    function closehandleclick(){
        
            setloginModal({
                type:"",
                status:false
            })
    }

     


    return (
        <>
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/"><h4>Health<span>book</span></h4></Link>
                    </div>

                    <div className="navbar-menu" id="open-navbar1">
                        <ul className="navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="">About</Link></li>
                            <li><Link to="">Search</Link></li>
                            <li  onClick={()=>{handleclick("signup")}}><Link >Signup</Link></li>
                            <li onClick={()=>{handleclick("login")}}><Link >Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
           { optionmodal.status===true &&  (optionmodal?.type==="login" && < Optionlogin openModalFunction={handleclick} closefunction={closehandleclick} /> )}
           { optionmodal.status===true &&  (optionmodal?.type==="signup" && < OptionSignup openModalFunction={handleclick} closefunction={closehandleclick} /> )} 
           
        </div>
        <Outlet/>
        </>
    )
}
export default Header 