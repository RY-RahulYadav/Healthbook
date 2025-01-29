import { Link, useNavigate } from "react-router-dom"
import Header from "./child_components/header"
import { useEffect, useState , useContext} from "react"
import { Loginstatus , User } from "./child_components/Global_data";

function Login(props) {
    const navigate = useNavigate();
    const [checklogin , setchecklogin] = useContext(Loginstatus);
  
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
        

        const res = await fetch(`${import.meta.env.VITE_URL}/auth/${props.Ltype}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (res.status == 200) {
            localStorage.clear();
            localStorage.setItem("Type", props.Ltype);
            
            alert("successfully login")
            navigate('/');
        }
        else {
            localStorage.setItem("Type", null);
            alert('plz enter valid credentials , Login Again ')
            navigate(`/login/${props.Ltype}`);
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



                            <form  method="Post" onSubmit={handlelogin} >
                                <label for="name">{ props.Ltype == "patient" ? "Patient Username" : "Doctor Username"}</label>
                                <input onChange={handlechange} type="text" id="name" name="username" />

                                <label for="password">Password</label>
                                <input onChange={handlechange} type="password" id="password" name="password" />

                                <button  type="submit">Log in</button>
                            </form>

                            <div class="text-info">
                                <Link to ="/">Back to Home</Link>

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