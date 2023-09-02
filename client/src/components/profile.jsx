import Footer from "./child_components/footer";
import { useContext } from "react";
import { User , Loginstatus } from "./child_components/Global_data";

export default function Profile(){
    const [userData , setuserData] = useContext(User);
    return(
        <> 
        
         
        <div className="profileBox ">
            <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="top-container">
        <div class="container">
            <img src="https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg"
                alt=""/>
            <div class="nameandtitle">
                <div class="name">{userData.userType=="doctor"?userData.Doctorname:userData.patientname}</div>
                <div class="hr"></div>
                
            </div>
        </div>
    </div>
    <div class="middle-container">
       
        <div className="middleflipbox">
        <div class="mid-container even">
            <div class="attribute">{userData.userType=="doctor"?"Medical ID":"Patient ID"}</div><span>:</span>
            <div class="att-ans">{userData.userType=="doctor"?userData.DoctorId:userData.patientId}</div>
        </div>
        <div class="mid-container odd">
            <div class="attribute">Username</div><span>:</span>
            <div class="att-ans">{userData.username}</div>
        </div>
       {userData.userType=="doctor"&& <div class="mid-container odd">
            <div class="attribute">Hospital Name</div><span>:</span>
            <div class="att-ans">{userData.HospitalName}</div>
        </div>}
        <div class="mid-container even">
            <div class="attribute">Aadhar number</div><span>:</span>
            <div class="att-ans">{userData.AdharNo}</div>
        </div>
        <div class="mid-container odd">
            <div class="attribute">Gender</div><span>:</span>
            <div class="att-ans">{userData.Gender}</div>
        </div>
        {userData.userType=="patient"&&<div class="mid-container even">
            <div class="attribute">Date of birth</div><span>:</span>
            <div class="att-ans">{userData.DOB}</div>
        </div>}
        {userData.userType=="doctor"&&<div class="mid-container odd">
            <div class="attribute">Hospital Address</div><span>:</span>
            <div class="att-ans">{userData?.HospitalAddress}</div>
        </div>}
        <div class="mid-container odd">
            <div class="attribute">Phone number</div><span>:</span>
            <div class="att-ans">{userData.PhoneNo}</div>
        </div>
        <div class="mid-container even">
            <div class="attribute">Email </div><span>:</span>
            <div class="att-ans">{userData.Email}</div>
        </div></div>
    </div>
    <Footer/>
        </div></>
    )
}