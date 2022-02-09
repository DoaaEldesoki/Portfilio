import './App.scss'
import './scss/styles.scss'
import'./css/styles.css'
import bgimg from './Colorcard-hex_ffc800-www.colorbook.io.png'
import React from "react";
class Header extends React.Component{
    constructor(){
      console.log('constructor')
      super();
    }
    render() {
      return (
        <div>
    <nav 
style={{backgroundImage: `url(${bgimg})` }} className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a style={{ color: 'white' }} className="navbar-brand" href="#page-top"><p> My Portfolio</p></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div  className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container">
                {/* <div class="masthead-subheading">Welcome To My Portofilio!</div> */}
                <div class="masthead-heading text-uppercase">Doaa Eldesoki</div>

                <div class="masthead-subheading">Front-End Developer</div>

            </div>
        </header>
        </div>
      )
    } 
  }
export default Header;
