import { Navbar,Footer } from "../../component";
import  "./css/skill.css";
import html from "../../assest/html.png"
import javascript from "../../assest/javascript.png"
import firenase from "../../assest/firenase.png"
import rlogo from "../../assest/rlogo.png"


function Skills(){

    return(<>
    <Navbar/>
    <div className="container mt">
<div className="row">
    <div className="col-1">
        <h1>skills</h1>
    </div>
</div>
    </div>
    <div className="container mt pd">
        <div className="row">
            <div className="col-md-3">
            
          
            <div className="card" >
        <img src={html} className="card-img-top" alt="..." />
        
      </div>
        
        
    </div>
    <div className="col-md-3">
            
          
            <div className="card" >
        <img src={javascript} className="card-img-top" alt="..." />
        
      </div>
        
        
    </div>
    <div className="col-md-3">
            
          
            <div className="card" >
        <img src={firenase} className="card-img-top" alt="..." />
        
      </div>
        
        
    </div>
    <div className="col-md-3">
            
          
            <div className="card" >
        <img src={rlogo} className="card-img-top" alt="..." />
        
      </div>
        
        
    </div>
    </div>
    </div>
    
   <Footer/>     
    
    
    </>
    );
}
export default Skills;