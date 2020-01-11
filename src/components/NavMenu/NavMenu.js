import React, { Component } from 'react';
import "./NavMenu.css"
import { Link, animateScroll as scroll } from "react-scroll";

class NavMenu extends Component {
    state = {}
    render() {
        return (
            <header>
                <div>
                    <nav className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar navbar-light fixed-top">

                        <a className="navbar-brand " href="/">
                            <img style={{ height: "50px", width: "70px" }} src={process.env.PUBLIC_URL + '/logo.png'} />
                        </a>
                        <a className="navbar-brand" href="/"><h3>ФОП Полевік</h3></a>
                        <button type="button" className="mr-2 navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="container">
                            <div className="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                                <ul className="navbar-nav flex-grow">
                                    <li className="nav-item">
                                        <Link
                                            className="text-dark nav-link"
                                            activeClass="active"
                                            to="our-services"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}>
                                            послуги
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="text-dark nav-link"
                                            activeClass="active"
                                            to="about-us"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}>
                                            про компанію
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-dark nav-link" href="/contacts">контакти</a>
                                    </li>
                                   



                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
            </header>
        );
    }
}

export default NavMenu;