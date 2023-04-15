import React,{useState} from 'react'
import { useParams,useNavigate,NavLink} from 'react-router-dom';
import axios from "axios";
const Navbar = () => {
    const navigate=useNavigate();
  

      
    return (
       
      
           <nav className="navbar  navbar-expand-lg fixed-top ">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-white">
                    <NavLink className="nav-link  text-white" aria-current="page" exact to="/" >Home</NavLink>
                </li>
                <li className="nav-item text-white">
                    <NavLink className="nav-link text-white" exact to="/add" activeClassName="active">Add distributor</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white" exact to="/edit" activeClassName="active">Edit Distributor</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link  text-white" exact to="/view" activeClassName="active">View details</NavLink>
                </li>
            </ul>
           
        </div>
    </div>
</nav>
           
           
   
		
       

	
	

  
   
 
          
     
    )
}

export default Navbar