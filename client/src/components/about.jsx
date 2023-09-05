import { Link } from "react-router-dom"

function About(){
    return(
        <div className="aboutsectionBox1" id="hdhjs12">
            <section class="about-section">
    	<div class="aboutcontainer">
        	<div class="combinedbox "  >
            	
             
                <div class="titlebox">
                	
                    	
                    		<div class="title"><p>About Us</p></div>
                        	<div><h2>Welcome to Heath<span style={{color:' #66f'}}>book</span><br/> </h2></div>
                      
                         <div class="text">Heathbook is a secure online platform designed to help individuals keep track of their healthcare history. Our website allows you to store and access your previous medical records, making it easier for you and your healthcare providers to make informed decisions about your health. Sign up now and take control of your health. </div>
                        
                        <Link to ="/about" class="theme-btn btn-style-three">Read More</Link>
                  
                </div>
                
               
                <div class="imagebox">
                        
                          	<img src="https://i.ibb.co/vQbkKj7/about.jpg" alt=""/>
                        </div>
                
            </div>
        </div>
    </section>
        </div>
    )
}
export default About