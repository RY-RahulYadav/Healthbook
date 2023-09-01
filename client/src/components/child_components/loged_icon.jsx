import { Link } from "react-router-dom"
import { User  , Loginstatus} from "./Global_data"
import { useContext } from "react"


function LogedIcon(props){
const [checklogin , setchecklogin] = useContext(Loginstatus)
const [userData , setuserData] =useContext(User)

async function handlelogout(){

    const res =  await fetch(`http://localhost:3000/api/auth/${userData?.userType}/logout` ,{
        method:'GET',
        headers:{
            "content-type":"application/json"
        },
        credentials:'include'
    })
    if(res.status==200){
        alert("successfully logout");
        setchecklogin(false)
        setuserData({})
        

    }
    else {
        alert("server error")
    }
}

    return(
        <>
        <div className="logedcontainer">
        <div className="dropdown ">
        <div className=" logediconbox " data-bs-toggle="dropdown" aria-expanded="false">
        <img src="userIcon.png" alt="" />           
        <p>{props.name}</p>
        
        </div>
        <ul className="dropdown-menu">
    <li><Link className="dropdown-item" href="#">Profile</Link></li>
    <li><Link className="dropdown-item" to={`/info/patient/${userData?.patientId}`}>Your Record</Link></li>
    <li onClick={handlelogout}><Link  className="dropdown-item" href="#">Logout</Link></li>
  </ul></div></div>
    
        
        </>
    )
}
export default LogedIcon