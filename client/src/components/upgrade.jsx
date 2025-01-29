import { useLocation, useNavigate } from "react-router-dom";
import CardUp from "./child_components/card_upgrade";
import { useState } from "react";
import { Loginstatus , User } from "./child_components/Global_data";
import NotFound from "./child_components/not_found";
import Footer from "./child_components/footer";

export default function UpgradePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchdata = location.state;
    console.log(searchdata?.patientId)
    const [UpdateData , setUpdateData] = useState({
        PatientId:searchdata?.patientId,
        hospitalId:'',
        hospitalName:'',
        doctorName:'',
        HospitalPhoneNo:'',
        diseaseName:'',
        medicineName:'',
        hospitalAddress:'',
        diagnosis:'',
        Date:'',
        SpecialCare:'',
        remarks:'',
    })

function handlechange(e){
    const targetname = e.target.name;
    const targetValue = e.target.value
   setUpdateData((prev)=>{
       return({
        ...prev,
        [targetname]:targetValue
       })
   })
}

async function handleUpdate(e){
    e.preventDefault
    const data = UpdateData&&UpdateData
    console.log(data)
       const res = await fetch(`${import.meta.env.VITE_URL}/api/auth/doctor/addpatientDetail` , {
        method:'POST', 
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data),
        credentials:'include'
       })     
       if(res.status==200){
        alert("succesfully added new record");
        navigate(`/info/patient/${data?.PatientId}`)
       }
       else if(res.status==401){
          alert('plz login first')
          navigate('/login/doctor')
       }
       else{
        alert("server error")
        navigate('/')
       }
 }


    return (
        <>
        {searchdata?
        <div className="updatebox ">
    <div className="patientinfobigBox1">
                    <div className="patientinfocontainer">
                    <div className="Pbox1">
                        <div className="Pbox11">
                            <div className="psamebox"><span>Patient Name : </span> &nbsp;{searchdata?.patientname}</div>
                            <div className="psamebox"><span>Phone No &nbsp;: </span> &nbsp;{searchdata?.PhoneNo}</div>
                            <div className="psamebox"><span>Email id &nbsp;: </span> &nbsp;{searchdata?.Email}</div>
                        </div>
                        <div className="Pbox12">
                            <div className="psamebox"><span>Patient Id &nbsp;: </span> &nbsp;{searchdata?.patientId}</div>
                            <div className="psamebox"><span>Date of Birth &nbsp;: </span> &nbsp;{searchdata?.DOB}</div>
                            <div className="psamebox"><span>Gender &nbsp;: </span> &nbsp;{searchdata?.Gender}</div>
                        </div>
                        < div className="Pbox13">
                            <div className="psamebox"><span>Username&nbsp;: </span> &nbsp;{searchdata?.username}</div>
                            <div className="psamebox"><span>Patient Address &nbsp;: </span> &nbsp;{searchdata?.patientAddress}</div>
                            <div className="psamebox"><span>Total Record &nbsp;: </span> &nbsp;{searchdata?.patientRecord.length}</div>
                        </div>
                    </div></div></div>
                    
                        <div className="patientinsideBox1">
                <h2> Fill Details regrading treatment of particular disease</h2>
            </div>
            <div className="Sbox5">
                    <CardUp title="Hospital Name" type='text' name ="hospitalName" Inputhandle={handlechange}/>
                    <CardUp title="Hospital Id " type='text' name ="hospitalId" Inputhandle={handlechange}/>
                    <CardUp title="Hospital Address" type='text' name = "hospitalAddress" Inputhandle={handlechange} />
                </div>  
                <div className="Sbox5">
                    <CardUp title="Doctor Name" type='text' name ="doctorName" Inputhandle={handlechange}/>
                    <CardUp title="Phone No"  type='text' name ="HospitalPhoneNo" Inputhandle={handlechange} />
                    <CardUp title="Date" type='date' name="Date" Inputhandle={handlechange} />
                </div> 
     
                <div class="form-container">
        <form  method="post" >
            <div class="input-group">
                <span class="input-group-text dig txt-col-white spanTitle" >Disease Name</span>
                <textarea onChange={handlechange} class="form-control dig" aria-label="With textarea" name="diseaseName" ></textarea>
            </div><br/>
            <div class="input-group">
                <span class="input-group-text dig txt-col-white spanTitle"  >Diagnosis</span>
                <textarea onChange={handlechange} class="form-control dig" aria-label="With textarea" name="diagnosis"></textarea>
            </div><br/>
            <div class="med-list-container">
                <textarea onChange={handlechange} class="form-control med-list" id="exampleFormControlTextarea1" rows="3" placeholder="Medicine"
                    name="medicineName"></textarea>
                <textarea onChange={handlechange} class="form-control med-list" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Special Care" name="SpecialCare"></textarea>
            </div><br/>
            <div class="input-group">
                <span class="input-group-text diagnosis remarks txt-col-white"
                    style={{backgroundColor: "#0f274e"}}>Remarks</span>
                <textarea  onChange={handlechange} class="form-control remarks remarks" aria-label="With textarea" name="remarks"></textarea>
            </div> <br/>
            <button onClick={handleUpdate} type="button" style={{width: '200px'}}>Submit</button>
        </form>
    </div>
   </div>:<NotFound type="true"/>}
   <Footer/>
        </>
    );
}
