import React, { Component } from 'react';
import "./index.css"
import { Element } from 'react-scroll'
class Footer extends Component {
    state = {  }
    render() { 
        return (
            <Element id='contacts' name='contacts'>
                <div class="d-flex flex-column">
                    <footer class="footer">
                        <div className="d-flex justify-content-between">
                      
                           
                        <div className="row justify-content-start">
                            <a className="navbar-brand" href="/">
                                <img style={{ height: "50px", width: "70px" }} src={process.env.PUBLIC_URL + '/logo.png'} />
                            </a>
                            <a className="navbar-brand" href="/"><h3>ФОП Полевік</h3></a>
                         </div>
                          
                            <div className="row justify-content-end">
                                <ul className="nav_menu ml-auto navbar-nav">

                                    <li>Телефон: +38 097 27 88 722</li>
                                    <li>Email: polevik-@ukr.net</li>
                                    <li>Facebook: Юрій Полевік</li>
                                    <li>м.Рівне</li>

                                </ul>
                            </div>
                        </div>

                    </footer>
                </div>
            </Element>


   
         );
    }
}
 
export default Footer;