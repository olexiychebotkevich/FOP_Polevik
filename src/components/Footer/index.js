import React, { Component } from 'react';
import "./index.css"
import {Navbar,Nav} from "react-bootstrap";
class Footer extends Component {
    state = {  }
    render() { 
        return (
            
                    <div class="d-flex flex-column">
                        <footer class="footer">
                        <div className="container">
                        <a className="navbar-brand" href="/">
                            <img style={{ height: "50px", width: "70px" }} src={process.env.PUBLIC_URL + '/logo.png'} />
                        </a>
                        <a className="navbar-brand" href="/"><h3>ФОП Полевік</h3></a>
                        <div className="row align-items-center justify-content-end">
                            <ul  className="nav_menu ml-auto navbar-nav">
                          
                              <li>Номер телефону: +380987654321</li>
                              <li>Email: fop_polevik@gmail.com</li>

                            </ul>
                        </div>
                    </div>
                        </footer>
                    </div>


   
         );
    }
}
 
export default Footer;