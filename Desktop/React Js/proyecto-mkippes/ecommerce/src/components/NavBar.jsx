import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
      <div className="container">
      <div className='row'>
        <div className='col-md-6'>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="./index.html"><img src={"img/logo.png"} alt="Logo" width={100}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./index.html">Productos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./index.html">Registro</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./index.html">Servicio Técnico</a>
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