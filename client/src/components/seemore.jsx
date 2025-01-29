import { useLocation } from "react-router-dom"
import CardSee from "./child_components/card_seemore"
import NotFound from "./child_components/not_found"
import { Loginstatus , User } from "./child_components/Global_data";
import Footer from "./child_components/footer";
function SeeMore() {
    
const location =useLocation()
const state= location.state
    return (
        <>
       { state ? <div>
            <div className="seemoreBox1">
                <div className="patientinfobigBox1">
                    <div className="patientinfocontainer">
                    <div className="Pbox1">
                        <div className="Pbox11">
                            <div className="psamebox"><span>Patient Name : </span> &nbsp;{state?.searchdata?.patientname}</div>
                            <div className="psamebox"><span>Phone No &nbsp;: </span> &nbsp;{state?.searchdata?.PhoneNo}</div>
                            <div className="psamebox"><span>Email id &nbsp;: </span> &nbsp;{state?.searchdata?.Email}</div>
                        </div>
                        <div className="Pbox12">
                            <div className="psamebox"><span>Patient Id &nbsp;: </span> &nbsp;{state?.searchdata?.patientId}</div>
                            <div className="psamebox"><span>Date of Birth &nbsp;: </span> &nbsp;{state?.searchdata?.DOB}</div>
                            <div className="psamebox"><span>Gender &nbsp;: </span> &nbsp;{state?.searchdata?.Gender}</div>
                        </div>
                        < div className="Pbox13">
                            <div className="psamebox"><span>Username&nbsp;: </span> &nbsp;{state?.searchdata?.username}</div>
                            <div className="psamebox"><span>Patient Address &nbsp;: </span> &nbsp;{state?.searchdata?.patientAddress}</div>
                            <div className="psamebox"><span>Total Record &nbsp;: </span> &nbsp;{state?.searchdata?.patientRecord.length}</div>
                        </div>
                    </div></div></div>
            </div>
            <div className="patientinsideBox1">
                <h2>Details regrading treatment of particular disease</h2>
            </div>

           
             
               
       
                <div className="Sbox5">
                    <CardSee title="Disease Name" content={state?.item.diseaseName} />
                    <CardSee title="Hospital Name" content={state?.item.hospitalName} />
                    <CardSee title="Hospital Id" content={state?.item.hospitalId} />
                </div>  
                <div className="Sbox5">
                    <CardSee title="Doctor Name" content={state?.item.doctorName} />
                    <CardSee title="Date" content={state?.item.Date}/>
                    <CardSee title="Phone No" content={state?.item.HospitalPhoneNo} />
                </div> 
                <div className="Sbox6">
                   <CardSee title="Hospital Address" content={state?.item.hospitalAddress}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Diagosis" content={state?.item.diagnosis}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Medicine Name" content={state?.item.medicineName}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="special Care" content={state?.item.SpecialCare}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Remarks" content={state?.item.remarks}/>
                </div>

                
              

                
              
        </div>:<NotFound/>}
         <Footer/>
        </>
    )
}

export default SeeMore

 {/* <div className="Sbox3"></div> */}
//  <div>
 {/* <div className="Sbox4">
<p>Disease Name :- <span></span></p>
<p>Hospital Name :- <span></span></p>
<p>Hospital Id :- <span></span></p>

</div>
<div className="Sbox4">     
<p>Doctor Name :- <span></span></p>
<p>Date  :- <span></span></p>
<p>Hospital Phone No :- <span></span></p>
</div> */}