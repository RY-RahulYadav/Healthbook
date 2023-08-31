import CardUp from "./child_components/card_upgrade";

export default function UpgradePage() {
    return (
        <>
        <div className="updatebox ">
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

                        <div className="Pbox2">
                <h2> Fill Details regrading treatment of particular disease</h2>
            </div>
            <div className="Sbox5">
                    <CardUp title="Disease Name " type='text'/>
                    <CardUp title="Hospital Name" type='text'/>
                    <CardUp title="Hospital Id " type='text'/>
                </div>  
                <div className="Sbox5">
                    <CardUp title="Doctor Name" type='text'/>
                    <CardUp title="Phone No"  type='text' />
                    <CardUp title="Date" type='date'/>
                </div> 
     
                <div class="form-container">
        <form action="/pinfo" method="post">
            <div class="input-group">
                <span class="input-group-text dig txt-col-white" style={{backgroundColor: '#0f274e'}} >Diagnosis</span>
                <textarea class="form-control dig" aria-label="With textarea" name="diagnosis"></textarea>
            </div><br/>
            <div class="med-list-container">
                <textarea class="form-control med-list" id="exampleFormControlTextarea1" rows="3" placeholder="Medicine"
                    name="medicine"></textarea>
                <textarea class="form-control med-list" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Special Care" name="specialCare"></textarea>
            </div><br/>
            <div class="input-group">
                <span class="input-group-text diagnosis remarks txt-col-white"
                    style={{backgroundColor: "#0f274e"}}>Remarks</span>
                <textarea class="form-control remarks remarks" aria-label="With textarea" name="remarks"></textarea>
            </div> <br/>
            <button type="submit" style={{width: '200px'}}>Submit</button>
        </form>
    </div>
   </div>
        </>
    );
}
