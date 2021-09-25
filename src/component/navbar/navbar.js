
  
 import {Link} from "react-router-dom";


import './css/navbar.css'




function Navbar(){
    return(
    
      
         
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link    className="nav-link"  to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link" to="/skill">skill</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/project'> projects</Link>
              </li>
              <li className="nav-item">
              <Link><a className="nav-link" href="#">Resume</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      
    
    );
}
export default Navbar;