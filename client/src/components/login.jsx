import { useNavigate } from "react-router-dom"
import Header from "./child_components/header"
function Login(props){
    const navigate = useNavigate()
    return(
        <>

        <div className="loginBox21 ">
      
        <section>
        <div class="login-form">
  
            <div className="login-form2">
                <div><p onClick={()=>{navigate('/')}} className="signUpText2" style={{color:'black'}}>Health<span>book</span></p></div>
            <h3>Sign in</h3> 
           

            <form>
                <label for="name">{props.Ltype=="patient"?"Patient Username":"Doctor Username"}</label>
                <input type="text" id="name" name="name"/>

                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>

                <button>Log in</button>
            </form>

            <div class="text-info">
                <a href="#">Forgot password?</a>
           
            </div></div>
        </div>
        <div class="login-img">
           {/* <img src="" alt="" srcset="" /> */}
            
        </div>
    </section>
  

    </div>
      
      </>
    )
}

export default Login