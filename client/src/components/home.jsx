import About from "./about"
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import Section3 from "./child_components/section3"
import Section4 from "./child_components/section4"
import Section1 from "./child_components/section1"
import Section2 from "./child_components/section2"

function Home(props) {
   return (
      <div>
         
         <Section1 />
         <div className="smallscreenhide"><Section2 /></div>
        <div className="largescreenhide" > <About /></div>
         <Section3 />
         <div className="smallscreenhide"><About/></div>
         <Section4 />
         <div className="largescreenhide" ><Section2 /></div>
         <Footer />

      </div>
   )
}

export default Home