import CardSee from "./child_components/card_seemore"

function SeeMore() {
    // hospitalId:String,
    // hospitalName:String,
    // doctorName:String,
    // diseaseName:String,
    // medicineName:String,
    // hospitalAddress:String,
    // diagnosis:String,
    // remarks:String
    return (
        <div>
            <div className="seemoreBox1">
                <div className="patientinfobigBox1">
                    <div className="patientinfocontainer">
                        <div className="Pbox1">
                            <div className="Pbox11">
                                <div className="psamebox"><span>Patient Name : </span> &nbsp;hsbhchbsbjcsbcjs</div>
                                <div className="psamebox"><span>Phone No &nbsp;: </span> &nbsp;123454322323</div>
                                <div className="psamebox"><span>Email id &nbsp;: </span> &nbsp;ansdjs@gmail.com</div>
                            </div>
                            <div className="Pbox12">
                                <div className="psamebox"><span>Patient Id &nbsp;: </span> &nbsp;hsbhchbsbjcsbcjs</div>
                                <div className="psamebox"><span>Gender &nbsp;: </span> &nbsp;123454322323</div>
                                <div className="psamebox"><span>DOB &nbsp;: </span> &nbsp;1-2-2010</div>
                            </div>
                            <div className="Pbox13">
                                <div className="psamebox"><span>Patient Address &nbsp;: </span> &nbsp;hsbhchbsbjcsbcjs</div>
                                <div className="psamebox"><span>State &nbsp;: </span> &nbsp;New delhi</div>
                                <div className="psamebox"><span>country &nbsp;: </span> &nbsp;India</div>
                            </div>
                        </div></div></div>
            </div>
            <div className="Pbox2">
                <h2>Details regrading treatment of particular disease</h2>
            </div>

           
             
               
       
                <div className="Sbox5">
                    <CardSee title="Disease Name" content="" />
                    <CardSee title="Hospital Name" content="" />
                    <CardSee title="Hospital Id" content="" />
                </div>  
                <div className="Sbox5">
                    <CardSee title="Doctor Name" content="" />
                    <CardSee title="Date" content="" />
                    <CardSee title="Phone No" content="" />
                </div> 
                <div className="Sbox6">
                   <CardSee title="Hospital Address" content={""}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Diagosis" content={""}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Medicine Name" content={""}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="special Care" content={""}/>
                </div>
                <div className="Sbox6">
                   <CardSee title="Remarks" content={""}/>
                </div>

                
              

                
              
        </div>
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