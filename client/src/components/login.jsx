import { useNavigate } from "react-router-dom"
import Header from "./child_components/header"
import { useEffect, useState , useContext} from "react"
import { Loginstatus , User } from "./child_components/Global_data";
import { UserType } from "../App";
function Login(props) {
    const navigate = useNavigate();
    const [checklogin , setchecklogin] = useContext(Loginstatus);
    const [User_type , setUser_type] = useContext(UserType)
    const [loginDetails, setloginDetails] = useState({
        username: '',
        password: ''
    })




    function handlechange(e) {
        const targetname = e.target.name;
        const targetvalue = e.target.value;
        setloginDetails((prev) => {
            return {
                ...prev,
                [targetname]: targetvalue
            }

        })
    }

    async function handlelogin(e) {
        e.preventDefault();
        const data = {
            username: loginDetails?.username,
            password: loginDetails?.password
        }
        
if(props.Ltype=='doctor'){
        const res = await fetch('http://localhost:3000/api/auth/doctor/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (res.status == 200) {
            setUser_type("doctor")
            alert("successfully login")
            navigate('/');
        }
        else {
            alert('plz enter valid credentials , Login Again ')
            navigate('/login/doctor');
        }
    }
    else{
        const res = await fetch('http://localhost:3000/api/auth/patient/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (res.status == 200) {
            setUser_type("patient")
            alert("successfully login")
            navigate('/');
        }
        else {
            alert('plz enter valid credentials , Login Again ')
            navigate('/login/patient');
        }
    }
    }

    return (
        <>

            <div className="loginBox21 ">

                <section>
                    <div class="login-form">

                        <div className="login-form2">
                            <div><p onClick={() => { navigate('/') }} className="signUpText2" style={{ color: 'black' }}>Health<span>book</span></p></div>
                            <h3>Sign in</h3>


                            <form  onSubmit={handlelogin} >
                                <label for="name">{props.Ltype == "patient" ? "Patient Username" : "Doctor Username"}</label>
                                <input onChange={handlechange} type="text" id="name" name="username" />

                                <label for="password">Password</label>
                                <input onChange={handlechange} type="password" id="password" name="password" />

                                <button type="submit">Log in</button>
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