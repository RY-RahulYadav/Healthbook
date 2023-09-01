import { useState , useContext, useEffect} from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import {Optionlogin , OptionSignup} from "./optionModal"
import Search from "../search"
import { Loginstatus , User } from "./Global_data"
import LogedIcon from "./loged_icon"
import { UserType } from "../../App"

function Header() {
    const [checklogin , setchecklogin] = useContext(Loginstatus);
    const [userData , setuserData] = useContext(User);
    const [optionmodal , setloginModal ]= useState({type:"" , status:false})
    const [User_type , setUser_type] = useContext(UserType)
    useEffect(()=>{
         const fetchUserData  =  async (url)=>{
                 const res = await fetch( url , {
                    method:'get',
                    headers:{
                        'content-Type':"application/json"
                    },
                    credentials:'include'
                 })
                 if(res.status==200){
                    const user =  await res.json()
                    setchecklogin(true)
                    setuserData(user)
                 }
                 else{
                   
                    setchecklogin(false)
                 }
         }
         if(User_type=="doctor"){
         fetchUserData("http://localhost:3000/api/auth/doctor/getUser")}
         else {
            fetchUserData("http://localhost:3000/api/auth/patient/getUser")
         }
    }, [])

console.log(userData)
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
        
        {<div><div>
            <nav className="navbar">
                <div className="container12">
                    <div className="navbar-header">
                       <div> <Link to="/"><h4>Health<span>book</span></h4></Link></div>
                        <div className="navbar-menu" id="open-navbar1">
                        <ul className="navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li ><Link to="">About</Link></li>
                            {(checklogin&&userData.userType=="doctor") &&<li ><Link to="/search/patient">Search</Link></li>}
                            <li><Link to="/contact">contact Us </Link></li>
                           
                        </ul>
                    </div>
                    </div>

                    
                    {checklogin===false && <div className="navbar-nav">
                            <li  onClick={()=>{handleclick("signup")}}><Link >Signup</Link> </li>
                            <li onClick={()=>{handleclick("login")}}><Link >Login</Link></li>
                    </div>}
                    {checklogin&& <LogedIcon name={userData?.username}/>}

                    
                </div>
            </nav>
           { optionmodal.status===true &&  (optionmodal?.type==="login" && < Optionlogin openModalFunction={handleclick} closefunction={closehandleclick} /> )}
           { optionmodal.status===true &&  (optionmodal?.type==="signup" && < OptionSignup openModalFunction={handleclick} closefunction={closehandleclick} /> )} 
         
        </div>
        <Outlet/></div>}
        </>
    )
}
export default Header 