import { useContext, useState } from "react";
import { Loginstatus , User } from "./child_components/Global_data";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterDoctor(props) {
    const navigate = useNavigate();
    const registerType = props.Rtype;
    const [checklogin , setchecklogin] = useContext(Loginstatus);
    const [userData , setuserData] = useContext(User);
   
    const [registerDetails , setRegisterdetails] =useState({
        Fname :'',
        Lname:'',
        Username:'',
        AdharNo:'',
        Gender:'',
        Email:'',
        PhoneNo: '',
        HospitalName:'',
        Address:'',
        Password:'',
       

    })
   

    function handlechange(e){
    
        const targetname  = e.target.name
        const targetvalue  = e.target.value
        setRegisterdetails((prev)=>{
            return {
                ...prev,
                [targetname]:targetvalue
            }
        })
    }

   async function handleregister(e){
        e.preventDefault()
         
        const Pdata ={
            patientname:`${registerDetails?.Fname} ${registerDetails?.Lname}`,
            AdharNo:registerDetails?.AdharNo,
            username:registerDetails?.Username,
            Gender:registerDetails?.Gender,
            patientAddress:registerDetails?.Address,
            dateBirth:registerDetails?.dateBirth,
            Email:registerDetails?.Email,
            PhoneNo:registerDetails?.PhoneNo,
            password:registerDetails?.Password

        }
       
        const Ddata ={
            Doctorname:`${registerDetails?.Fname} ${registerDetails?.Lname}`,
            AdharNo:registerDetails?.AdharNo,
            username:registerDetails?.Username,
            Gender:registerDetails?.Gender,
            HospitalAddress:registerDetails?.Address,
            HospitalName:registerDetails?.HospitalName,
            
            Email:registerDetails?.Email,
            PhoneNo:registerDetails?.PhoneNo,
            password:registerDetails?.Password

        }
        
        const data = registerType=="doctor"?Ddata:Pdata
        const res = await fetch(`${import.meta.env.VITE_URL}/api/auth/${registerType}/signup` ,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data),
            credentials:'include'
        })
       if(res.status==200){
        localStorage.clear();
        localStorage.setItem("Type", registerType);
        setchecklogin(true)
       
        alert("successfully signup")
        navigate('/')
       }
       else if(res.status==409){
        localStorage.setItem("Type", null);
        setchecklogin(false)
        alert("user already exist , plz signup with unique Username")
        navigate(`/signup/doctor${registerType}`);
       }
       else{
        localStorage.setItem("Type", null);
        setchecklogin(false)
        alert("Server error , Plz try again after some time ")
        navigate('/');
       }
    }
  
      
    
    



    return (
        <>



            <div className="registerBox">
                   <div className="wrapper">
                    {registerType == "doctor" ? <div className="title"><i className="fa-solid fa-user-doctor" style={{marginRight:'1rem'}}></i>Doctor Registration Form </div> : <div className="title"><i className="fa-solid fa-user"></i>
                        Patient Registration Form
                    </div>}
                    <div className="form">
                        <div className="inputfield">
                            <label>First Name</label>
                            <input onChange={handlechange} type="text" className="input" name="Fname" value={registerDetails?.Fname} />
                        </div>
                        <div className="inputfield">
                            <label>Last Name</label>
                            <input onChange={handlechange} type="text" className="input"  name ="Lname"/>
                        </div>
                        <div className="inputfield">
                            <label>Username</label>
                            <input onChange={handlechange} type="text" className="input" name="Username" />
                        </div>
                        <div className="inputfield">
                            <label>Adhar number</label>
                            <input onChange={handlechange} type="number" className="input" name ="AdharNo" />
                        </div>
                        <div className="inputfield">
                            <label>Gender</label>
                            <div className="custom_select">
                                <select onChange={handlechange} name="Gender">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input onChange={handlechange} type="text" className="input"  name="Email"/>
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input onChange={handlechange} type="number" className="input"  name="PhoneNo" />
                        </div>
                        {registerType=="doctor" &&<div className="inputfield">
                            <label>Hospital/Clinic Name</label>
                            <input onChange={handlechange} type="text" className="input"  name="HospitalName" />
                        </div>}
                        {registerType==='patient'&& <div className="inputfield">
                            <label>Date of Birth</label>
                            <input onChange={handlechange} type="date" className="input"  name="dateBirth" />
                          
                        </div>}
                        <div className="inputfield">
                            <label>{registerType=="doctor"?"Hospital/Clinic Address":"Address"}</label>
                            <input onChange={handlechange} type="text" className="input"  name="Address" />
                            {/* <textarea onChange={handlechange} className="textarea" name="Address" ></textarea> */}
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input onChange={handlechange} type="password" className="input" name="Password" />
                        </div>
                        
                       
                        <div className="inputfield">
                            <button onClick={handleregister} type="submit"  className="btn" >Register</button>
                        </div>
                    </div>
                </div>
                <div><img className="img1"  src="https://cdn.dribbble.com/users/1484145/screenshots/14190753/media/2aaf9372d06d123bf19df6a48c2f613e.png" alt="" /></div>
            </div></>
    )
}

export default RegisterDoctor