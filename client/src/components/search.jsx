import { useNavigate } from "react-router-dom"


function Search(){
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()

        navigate('/info/patient')
    }
    return(
        <div>
       
              <div class="patient-input-card">
        <div class="card">
            <h2>Patient ID</h2>
            <form class="form"  method="post" onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                    <input type="title" id="name" name="patientId" />
                </div><br/>
                <button  type="submit">Submit</button>
            </form>
        </div>
    </div>
        </div>
    )
}
export default Search