import React, { Component } from 'react';
import "./index.css"
import { Element } from 'react-scroll'
import { Image } from 'react-bootstrap'
class Footer extends Component {
    state = {}
    render() {
        return (
            <Element id='contacts' name='contacts'>

                <footer className="footer">

                    <div className="container">


                        <div className="row justify-content-center">
                            <h3 >Контакти:</h3>
                        </div>
                        <div className="row justify-content-center">

                            <ul className="ulcontacts">

                                <li>Телефон: +38 097 27 88 722</li>
                                <li>Email: polevik-@ukr.net</li>
                                <li>Facebook: Юрій Полевік</li>
                                <li>м.Рівне</li>

                            </ul>
                        </div>

                    </div>

                </footer>

            </Element>



        );
    }
}

export default Footer;






{/* <div className="col justify-content-center">
                        <li> Телефон: +38 097 27 88 722</li>
                        </div>
                        <div className="col ">
                        <li style={{textAlign:"center"}}>Email: polevik-@ukr.net</li>
                        </div>
                        <div className="col ">
                            <li style={{textAlign:"right"}}>Facebook: Юрій Полевік</li>
                        </div>
                        <div className="col ">
                            <li style={{textAlign:"right"}}>м.Рівне</li>
                        </div> */}