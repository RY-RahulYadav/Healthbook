import { useContext, useEffect, useState } from "react"
import { useNavigate , Link, useParams, json } from "react-router-dom"
import NotFound from "./child_components/not_found"
import { Loginstatus , User } from "./child_components/Global_data";
import Footer from "./child_components/footer";

function Info() {
    const [SearchPatient , setSearchPatient] = useState({})
    const [patientExist , setpatientExist] = useState()
    const [checklogin , setchecklogin] = useContext(Loginstatus)
    const [userDetails, setuserDetails] = useContext(User)
    let initilize =false;
    const navigate =useNavigate()
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        const FetchPatientData = async ()=>{
            const res = await fetch(`${import.meta.env.VITE_URL}/api/auth/doctor/search/patient` , {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({
                    PatientId:id
                }),
                credentials:'include'
            })
         const data=    await res.json()
         if(res.status==200){
            console.log(data)
           setSearchPatient(data)
           setpatientExist(true)
         }
         else if(res.status==401){
            
                
                setpatientExist(false)
                
            
         }
         else{
            alert("server error")
         }
        }
     if(!initilize){
        if(checklogin && userDetails.userType==="doctor" ){
          FetchPatientData();
        }
        else if(checklogin && userDetails.userType==='patient'){
            setpatientExist(true)
            setSearchPatient(userDetails)
        }
        else if(checklogin==false){
            
            alert('plz login first')
            navigate('/')
        }
        initilize=true
     }
    },[checklogin ])

    return (
  <>
        {patientExist&&
        <div className="patientinfobigBox">
            <div className="patientinfobigBox1">
                <div className="patientinfocontainer">
                    <div className="Pbox1">
                        <div className="Pbox11">
                            <div className="psamebox"><span>Patient Name : </span> &nbsp;{SearchPatient?.patientname}</div>
                            <div className="psamebox"><span>Phone No &nbsp;: </span> &nbsp;{SearchPatient?.PhoneNo}</div>
                            <div className="psamebox"><span>Email id &nbsp;: </span> &nbsp;{SearchPatient?.Email}</div>
                        </div>
                        <div className="Pbox12">
                            <div className="psamebox"><span>Patient Id &nbsp;: </span> &nbsp;{SearchPatient?.patientId}</div>
                            <div className="psamebox"><span>Patient Address &nbsp;: </span> &nbsp;{SearchPatient?.patientAddress}</div>
                            <div className="psamebox"><span>Gender &nbsp;: </span> &nbsp;{SearchPatient?.Gender}</div>
                        </div>
                        < div className="Pbox13">
                            <div className="psamebox"><span>Username&nbsp;: </span> &nbsp;{SearchPatient?.username}</div>
                            <div className="psamebox"><span>Date of Birth &nbsp;: </span> &nbsp;{SearchPatient?.DOB}</div>
                            <div className="psamebox"><span>Total Record &nbsp;: </span> &nbsp;{SearchPatient?.patientRecord.length}</div>
                        </div>
                    </div></div> </div>
            <div className="patientinsideBox1">
                { SearchPatient?.patientRecord.length!==0?<h2>Patient Records</h2>:<h2>Dont't have any Patient Records</h2>}
            </div>

            { SearchPatient?.patientRecord.length!==0&&<div className="patientinsideBox2"></div>}
{  SearchPatient?.patientRecord.length!==0&&
            <div className="Pbox4">
                <div className="insidePbox">
                    <div className="insidePbox2 ">
                        <p className="insidepara">S No.</p>
                        <p>Disease Name</p>
                        <p>Hospital Name</p>
                        <p>Doctor Name</p>
                        <p>Hospital Id</p>
                        <p>More Info</p>
                    </div>
                    <div className="patientinsideBox2"></div>
                 {SearchPatient?.patientRecord.map((item , index)=>{return(
                    <div className="insidePbox2">
                    <p className="insidepara">{index+1}.</p>
                    <p>{item.diseaseName}</p>
                    <p>{item.hospitalName}</p>
                    <p>{item.doctorName}</p>
                    <p>{item.hospitalId}</p>
                   <p><Link to={`/details/patient/${item._id}`}  state={{item:item, searchdata:SearchPatient}}>See more</Link></p> 
                </div>
                 )})}

                
                    
                  
                </div>
            </div>}
           {  SearchPatient?.patientRecord.length!==0&&<div className="Pbox5"></div>}
            {userDetails.userType=="doctor"&&<div className="Pbox6">
           <div onClick={()=>{navigate('/upgrade/patient' , {state:SearchPatient} ) }} ><button class="bg-blue-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-blue-500 transition-all duration-300">Add new patient record</button></div> 
            </div>}
            <Footer/>
        </div>
        }
        {patientExist===false&&<div><NotFound/><Footer/></div>}
        
        </>

    )
}
export default Info