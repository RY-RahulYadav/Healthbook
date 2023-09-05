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
         <Section2 />
         <Section3 />
         <About />
         <Section4 />
         <Footer />

      </div>
   )
}

export default Home