import { redirect, useNavigate } from "react-router-dom";

function   Optionlogin(props){
    const navigate = useNavigate()
    return(
        <div className="optionModalBox1">
            <div><div className="modalContainer"></div>
        <div className="loginBox">
        <div className="bigSignup ">
        
        <div><img src="/health4.gif"  alt="" /></div>
        <div onClick={props.closefunction}> <i className="fa-solid fa-x crossIcon" style= {{cursor:'pointer'}}></i></div>
        <form method="POST" autocomplete="off">
        
        <div >
           <div><p className="signUpText">Health<span>book</span></p></div>
            <div className="Signucontainer">
                 <div className="emailSet">
                 <div className="submitSet">
                    <button onClick={(event)=>{props.closefunction();navigate("/login/doctor")}} >login as Doctor</button>
                 </div>
                 <div className="submitSet">
                    <button  onClick={(event)=>{props.closefunction();navigate("/login/patient")}} >login as Patient</button>
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

    return(
        <div>
            <div><div className="modalContainer"></div>
        <div className="loginBox">
        <div className="bigSignup ">
        
        <div><img src="/health4.gif"  alt="" /></div>
        <div onClick={props.closefunction}> <i className="fa-solid fa-x crossIcon" style= {{cursor:'pointer'}}></i></div>
        
        
        <div >
           <div><p className="signUpText">Health<span>book</span></p></div>
            <div className="Signucontainer">
                 <div className="emailSet">
                 <div className="submitSet">
                    <button onClick={(event)=>{ props.closefunction(); navigate("/signup/doctor" );}} >Signup as Doctor</button>
                 </div>
                 <div className="submitSet">
                    <button onClick={(event)=>{props.closefunction();navigate("/signup/patient")}} >Signup as Patient</button>
                 </div>
              
                 </div>
                 
                 <div className="passwordSet">
               
                
                 </div>
                
                 
                <div className="OptionLogin"><span>Already have an account  ?</span> <a onClick={()=>{props.closefunction();props.openModalFunction("login")}}  style={{color:"rgb(0 151 255)",fontWeight:'400' , cursor:'pointer' }}>Click login</a></div>
            </div>
        </div></div></div></div>
        </div>
    )
}
export {Optionlogin, OptionSignup }