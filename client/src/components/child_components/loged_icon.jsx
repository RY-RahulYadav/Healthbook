import { Link } from "react-router-dom"
import { User  , Loginstatus} from "./Global_data"
import { useContext } from "react"


function LogedIcon(props){
const [checklogin , setchecklogin] = useContext(Loginstatus)
const [userData , setuserData] =useContext(User)



    return(
        <>
        <div className="logedcontainer">
        <div className="dropdown ">
        <div className=" logediconbox " data-bs-toggle="dropdown" aria-expanded="false">
        <img src="../../public/userIcon.png" alt="" />           
        <p>{props.name}</p>
        
        </div>
        <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
   {userData.userType=="patient"? <li><Link className="dropdown-item" to={`/info/patient/${userData?.patientId}`}>Your Record</Link></li>:<li><Link className="dropdown-item" to="/search/patient">Search Patient</Link></li>}
    <li onClick={()=>{props.logoutFunc()}}><Link  className="dropdown-item" href="#">Logout</Link></li>
  </ul></div></div>
    
        
        </>
    )
}
export default LogedIcon