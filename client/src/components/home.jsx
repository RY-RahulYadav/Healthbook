import About from "./about"
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import Section1 from "./child_components/section1"
import Section2 from "./child_components/section2"



function Home(props){
 return (
    <div>
<Section1/>
{/* <hr style={{ border:"solid  1px #000"}}/> */}
<About/>
<Section2/>
<Footer/>
        
    </div>
 )
}

export default Home