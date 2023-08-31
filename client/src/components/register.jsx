import { useState } from "react";

function RegisterDoctor(props) {
    const registerType = props.Rtype;
    const [registerDetails , setRegisterdetails] =useState({
        Fname :'',
        Lname:'',
        AdharNo:'',
        Gender:'',
        Email:'',
        phoneNo:'',
        Address:''

    })


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
                            <input type="text" className="input" />
                        </div>
                        <div className="inputfield">
                            <label>Last Name</label>
                            <input type="text" className="input" />
                        </div>
                       
                        <div className="inputfield">
                            <label>Adhar number</label>
                            <input type="number" className="input" />
                        </div>
                        <div className="inputfield">
                            <label>Gender</label>
                            <div className="custom_select">
                                <select>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="inputfield">
                            <label>Address</label>
                            <textarea className="textarea" ></textarea>
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input type="password" className="input" />
                        </div>
                        <div className="inputfield">
                            <label>Confirm Password</label>
                            <input type="password" className="input" />
                        </div>
                       
                        <div className="inputfield">
                            <button type="submit"  className="btn" >Register</button>
                        </div>
                    </div>
                </div>
                <div><img className="img1"  src="https://cdn.dribbble.com/users/1484145/screenshots/14190753/media/2aaf9372d06d123bf19df6a48c2f613e.png" alt="" /></div>
            </div></>
    )
}

export default RegisterDoctor