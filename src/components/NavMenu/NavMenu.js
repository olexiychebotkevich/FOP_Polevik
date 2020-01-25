import React, { Component } from 'react';
import "./NavMenu.css"
import {Navbar,Nav} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";


class NavMenu extends Component {
    state = {}
    render() {
        return (
            <header>
                <div>

                    <Navbar bg="light" expand="lg" fixed="top">
                        <Navbar.Brand href="/">
                            <img style={{ height: "60px", width: "100px" }} src={process.env.PUBLIC_URL + '/logo.PNG'} />
                        </Navbar.Brand>
                        <Navbar.Brand href="/">
                            <h3 >ФОП Полевік</h3>
                        </Navbar.Brand>
                       
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                     
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/">Головна</Nav.Link>
                            <Link
                                    className="text-dark nav-link"
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    Контакти
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