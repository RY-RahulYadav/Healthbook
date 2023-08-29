import { redirect, useNavigate } from "react-router-dom";

function   Optionlogin(props){
    const navigate = useNavigate()
    return(
        <div>
            <div><div className="modalContainer"></div>
        <div className="loginBox">
        <div className="bigSignup ">
        
        <div><img src="https://cdn.dribbble.com/users/1129235/screenshots/10762000/media/ace6e95b814e602a1b5a0527a54af10f.gif"  alt="" /></div>
        <div onClick={props.closefunction}> <i className="fa-solid fa-x crossIcon" style= {{cursor:'pointer'}}></i></div>
        <form method="POST" autocomplete="off">
        
        <div >
           <div><p className="signUpText">Health<span>book</span></p></div>
            <div className="Signucontainer">
                 <div className="emailSet">
                 <div className="submitSet">
                    <button  type="submit">login as Doctor</button>
                 </div>
                 <div className="submitSet">
                    <button  type="submit">login as Patient</button>
                 </div>
              
                 </div>
                 
                 <div className="passwordSet">
               
                
                 </div>
                
                 
                <div className="OptionLogin"><span>Don't have an account yet ?</span> <a onClick={()=>{props.closefunction();props.openModalFunction("signup")}} style={{color:"rgb(0 151 255)",fontWeight:'400' , cursor:'pointer'}}> Create New</a></div>
            </div>
        </div></form></div></div></div>
        </div>
    )
}



function   OptionSignup(props){
    const navigate= useNavigate();
 function   handleSubmit(event){
    event.preventDefault()


    }
    return(
        <div>
            <div><div className="modalContainer"></div>
        <div className="loginBox">
        <div className="bigSignup ">
        
        <div><img src="/health4.gif"  alt="" /></div>
        <div onClick={props.closefunction}> <i className="fa-solid fa-x crossIcon" style= {{cursor:'pointer'}}></i></div>
        <form method="POST"  autocomplete="off">
        
        <div >
           <div><p className="signUpText">Health<span>book</span></p></div>
            <div className="Signucontainer">
                 <div className="emailSet">
                 <div className="submitSet">
                    <button onClick={(event)=>{event.preventDefault();navigate("/signup/doctor" );}}  type="submit">Signup as Doctor</button>
                 </div>
                 <div className="submitSet">
                    <button onClick={(event)=>{event.preventDefault();navigate("/signup/patient")}} type="submit" >Signup as Patient</button>
                 </div>
              
                 </div>
                 
                 <div className="passwordSet">
               
                
                 </div>
                
                 
                <div className="OptionLogin"><span>Already have an account  ?</span> <a onClick={()=>{props.closefunction();props.openModalFunction("login")}}  style={{color:"rgb(0 151 255)",fontWeight:'400' , cursor:'pointer' }}>Click login</a></div>
            </div>
        </div></form></div></div></div>
        </div>
    )
}
export {Optionlogin, OptionSignup }