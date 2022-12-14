import React from "react";
import {Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
      <div className="container">
      <div className='row'>
        <div className='col-md-6'>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src={"/img/logo.png"} alt="Logo" width={100}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/category/Electrico"}>Eléctricos</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/category/Gas"}>Gas</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"./index.html"}>Registro</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <CartWidget />
        </div>
        <hr />
      </div>
      
</div>



        
    )
}

export default NavBar;