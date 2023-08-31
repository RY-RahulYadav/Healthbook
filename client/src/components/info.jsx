import { useNavigate , Link } from "react-router-dom"

function Info() {
    const navigate =useNavigate()
    return (
        <div className="patientinfobigBox">
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
                    </div></div> </div>
            <div className="Pbox2">
                <h2>Patient Records</h2>
            </div>

            <div className="Pbox3"></div>

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
                    <div className="Pbox3"></div>
                 {/* map function    */}
                <div className="insidePbox2">
                        <p className="insidepara">1.</p>
                        <p>hsdhh</p>
                        <p>sbdbs</p>
                        <p>vgsdgse</p>
                        <p>sdhsh</p>
                       <p><Link to="/details/patient">See more</Link></p> 
                    </div>
                    
                  
                </div>
            </div>
            <div className="Pbox5"></div>
            <div className="Pbox6">
           <div onClick={()=>{navigate('/upgrade/patient')}}><button type="button" class="btn btn-primary">Add New Patient Disease</button></div> 
            </div>
        </div>

    )
}
export default Info