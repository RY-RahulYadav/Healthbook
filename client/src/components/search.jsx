import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Loginstatus , User } from "./child_components/Global_data";
import Footer from "./child_components/footer";

function Search(){
    const navigate = useNavigate()
    const [PatientId , setpatientId] = useState("")
    function handlechange(e){
        const value = e.target.value
        console.log(value)
        setpatientId(value)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(PatientId)
        navigate(`/info/patient/${PatientId}`)
    }
    return(
        <div>
       
              <div class="patient-input-card">
        <div class="card">
            <h2>Patient ID</h2>
            <form class="form"  method="post" onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                    <input onChange={handlechange} type="title" id="name" name="patientId" />
                </div><br/>
                <button  type="submit">Submit</button>
            </form>
        </div>
    </div>
    <Footer/>
        </div>
    )
}
export default Search