import React, { Component } from 'react';
import "../NavMenu/NavMenu.css"
import { Link, animateScroll as scroll } from "react-scroll";
import {Navbar,Nav} from "react-bootstrap";


class NavMenu extends Component {
    state = {}
    render() {
        return (
            <header>
                <div>

                    <Navbar bg="light" expand="lg" fixed="top">
                        <Navbar.Brand href="/">
                            <img style={{ height: "50px", width: "70px" }} src={process.env.PUBLIC_URL + '/logo.png'} />
                        </Navbar.Brand>
                        <Navbar.Brand href="/">
                            <h3 >ФОП Полевік</h3>
                        </Navbar.Brand>
                       
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                     
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="justify-content-end" style={{ width: "100%" }}>

                                <Link
                                    className="text-dark nav-link"
                                    activeClass="active"
                                    to="our-services"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    offset={-350}>
                                    послуги
                                 </Link>

                                <Link
                                    className="text-dark nav-link"
                                    activeClass="active"
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    offset={-100}>
                                    про компанію
                                 </Link>

                                 <Link
                                    className="text-dark nav-link"
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    контакти
                                 </Link>

                               

                            </Nav>
               
                        </Navbar.Collapse>
                        
                    </Navbar>

                  
                </div>
            </header>
        );
    }
}

export default NavMenu;