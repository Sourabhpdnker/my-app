import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import Alert from './Alert';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [darkMode,setDarkMode] = useState(false);//whether dark mode is enableed or not 

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      showAlert(" Dark Mode" , "Success");
    }
    else {
      document.body.classList.remove('dark-mode');
      showAlert(" Light Mode" , "Success");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const [alert , setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Texttutales</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Upper Case </a></li>
              <li><a className="dropdown-item" href="/">Lower Case</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
          </li>
          <li className="nav-item">
          {/* <button className="btn btn-outline-success" onClick={toggleDarkMode} type="submit">Dark mode</button> */}
          
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="form-check form-switch text-light mx-4 my-3">
          <input class="form-check-input" onClick={toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>
          </div>
      </div>
    </div>
  </nav>
  <Alert alert={alert}></Alert>
  </>
  )
}

Navbar.prototypes = { title: PropTypes.string,
                      experiment : PropTypes.string
                    }
