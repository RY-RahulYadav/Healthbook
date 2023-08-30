export default function UpgradePage() {
    return (
        <>
        <div className="upgradeBox12">
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
            </div>
        </div>
    </div>
    <div className="patientinfobigBox2">
        <div className="psamebox date"><span>DATE &nbsp;: </span> &nbsp;<input type="date" className="date"/></div>
        <div className="patientinfocontainer">
            <div className="Pbox1">
                <div className="Pbox1">
                    <div className="psamebox"><span>Hospital ID &nbsp;: </span> &nbsp;<input type="text" className="doc-input"/>
                    </div>
                    <div className="psamebox"><span>Hospital Name &nbsp;: </span> &nbsp;<input type="text"
                            className="doc-input"/></div>
                </div>
                <div className="Pbox12">
                    <div className="psamebox"><span>Doctor Id &nbsp;: </span> &nbsp;<input type="text" className="doc-input"/>
                    </div>
                    <div className="psamebox"><span>Doctor Name &nbsp;: </span> &nbsp;<input type="text" className="doc-input"/>
                    </div>
                </div>
                <div className="Pbox13">
                    <div className="psamebox"><span>Hospital Address &nbsp;: </span> &nbsp;<input type="text"
                            className="doc-input"/></div>
                    <div className="psamebox"><span>Disease &nbsp;: </span> &nbsp;<input type="text" className="doc-input"/></div>
                </div>
            </div>
        </div>
    </div>
    <div className="form-container">
        <form action="/pinfo" method="post">
            <div className="input-group">
                <span className="input-group-text dig txt-col-white" style={{ backgroundColor: "#0f274e" }}>Diagnosis</span>
                <textarea className="form-control dig" aria-label="With textarea" name="diagnosis"></textarea>
            </div><br/>
            <div className="med-list-container">
                <textarea className="form-control med-list" id="exampleFormControlTextarea1" rows="3" placeholder="Medicine"
                    name="medicine"></textarea>
                <textarea className="form-control med-list" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Special Care" name="specialCare"></textarea>
            </div><br/>
            <div className="input-group">
                <span className="input-group-text diagnosis remarks txt-col-white" style={{ backgroundColor: "#0f274e" }}>Remarks</span>
                <textarea className="form-control remarks remarks" aria-label="With textarea" name="remarks"></textarea>
            </div> <br/>
            <button type="submit" style={{ width: "200px" }}>Submit</button>
        </form>
    </div>
         </div>
        </>
    );
}
