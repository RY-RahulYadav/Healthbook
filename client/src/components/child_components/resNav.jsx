import { useContext, useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import { Loginstatus, User } from "./Global_data";


export default function ResNav(props){
  const [openNav , setopenNav] = useState(false);
  const [checklogin , setchecklogin] = useContext(Loginstatus)
  const [Userdata , setUserdata] = useContext(User)
useEffect(()=>{},[checklogin])

  function handleclick(){
    setopenNav(true)
  }
  function handleclose(){
    setopenNav(false)
  }
    return(
        <div className="resNav">
         <nav>
            <div> <Link to="/"><h4>Health<span>book</span></h4></Link></div>
            <div onClick={handleclick}><i class="fa-solid fa-bars fa-2xl" style={{color: "#000000;"}}></i></div>
             
         </nav>  
         
       {openNav &&  <div className="openResNav">
         <div className="opeRasNavBox1">
            <div className="logobox"><img src="../../../public/logo.jpeg" alt="" />{checklogin?<p>{Userdata?.username}</p>:<p>Heathbook</p>}</div>

            <div onClick={handleclose}><i class="fa-solid fa-xmark" style={{color: "#000000;"}}></i></div>
           </div>  
           <div className="opeRasNavBox2">
            <li onClick={handleclose}><i class="fa-solid fa-house fa-2xl" style={{color: "#ffffff;"}}></i><Link to ="/" >Home</Link></li>
            <li onClick={handleclose}><i class="fa-solid fa-book" style={{color: "#ffffff;"}}></i><Link to ='/about' >About</Link></li>
            {Userdata?.userType=="patient"&&<li onClick={handleclose}><i class="fa-solid fa-clipboard" style={{color: "#ffffff;"}}></i><Link to={`/info${Userdata?.patientId}`}>Your Record</Link></li>}
            {Userdata?.userType=="doctor"&&<li onClick={handleclose}><i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff;"}}></i><Link to='/search/patient'>Search</Link></li>}
            {checklogin&&<li onClick={handleclose}><i class="fa-solid fa-user" style={{color: "#ffffff;"}}></i><Link to='/profile'>Profile</Link></li> }
            <li onClick={handleclose}><i class="fa-regular fa-address-book" style={{color: "#ffffff;"}}></i><Link to="/contact">Contact Us</Link></li>
            {!checklogin&&<li onClick={()=>{handleclose(); props.openModalFunction("login")}}> <img src="login.png" alt="" srcset="" /> <Link >Login</Link></li>}
            {!checklogin&&<li onClick={()=>{handleclose(); props.openModalFunction("signup")}}> <img src="signup.png" alt="" srcset="" /><Link >Signup</Link></li>}
            {checklogin&&<li onClick={()=>{handleclose(); props.logoutFunc()}}><img src="../../../public/logout.png" alt="" /><Link>logout</Link></li>}
           </div>
        
         </div>}
     
        </div>
    )
}