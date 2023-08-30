import About from "./about"
import Header from "./child_components/header"
import Section1 from "./child_components/section1"



function Home(props){
 return (
    <div>
<Section1/>
{/* <hr style={{ border:"solid  1px #000"}}/> */}
<About/>
        
    </div>
 )
}

export default Home