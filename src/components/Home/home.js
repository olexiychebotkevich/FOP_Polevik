import React, { Component } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import "./index.css"
import { Element } from 'react-scroll'

class Home extends Component {
    state = {
        loading: true
    }




    render() {

        return (
            <div>
                <Carousel className="carousel" >
                    <Carousel.Item className="carousel" >
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/pexels-photo-1148820.jpeg'}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/pexels-photo-2881232.jpeg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/photo-1517181875630-f72350452109.jpg'}
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                <Element  id='our-services' name='our-services'>
                    <div  className='container'>
                        <div className='row'>

                            <div className="imgcontainer col-xl-3 col-lg-6  col-md-6 xol-sm-12">
                                <img src={process.env.PUBLIC_URL + 'images/videosurveillance/pexels-photo-430208.jpeg'} alt="Avatar" className="image" />
                                <h3 className="text">Відеоспостереження</h3>
                                <div className=" middle">
                                    <Button className="btnservices">Детальніше</Button>
                                </div>
                            </div>

                            <div className="imgcontainer col-xl-3 col-lg-6  col-md-6 xol-sm-12">
                                <img src={process.env.PUBLIC_URL + 'images/skm/ckc1.jpg'} alt="Avatar" className="image" />
                                <h3 className="text">Структурована кабельна мережа</h3>
                                <div className="middle">
                                    <Button className="btnservices">Детальніше</Button>
                                </div>
                            </div>

                            <div className="imgcontainer  col-xl-3 col-lg-6 col-md-6 xol-sm-12">
                                <img src={process.env.PUBLIC_URL + 'images/mom/ethernet-1100x733.jpg'} alt="Avatar" className="image" />
                                <h3 className="text">Монтаж оптоволоконних мереж</h3>
                                <div className="middle">
                                    <Button className="btnservices">Детальніше</Button>
                                </div>
                            </div>

                            <div className="imgcontainer  col-xl-3 col-lg-6 col-md-6 xol-sm-12">
                                <img src={process.env.PUBLIC_URL + 'images/designing/pexels-photo-716661.jpeg'} alt="Avatar" className="image" />
                                <h3 className="text">Проектування</h3>
                                <div className="middle">
                                    <Button variant="primary">Детальніше</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Element>


                <Element id='about-us' name='about-us'>
                    <div style={{ marginTop: "3rem" }} className="container">
                        <div className="row">

                            <h2 style={{ width: "100%", textAlign: "center" }} >ПРО КОМПАНІЮ</h2>

                            <hr style={{
                                width: "100%",
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }} />

                            <p className="about">Перед компаніями ми поставили складну задачу, нам потрібно було якісне, надійне і добре спроектоване відеоспостереження в торгових залах. Серед багатьох пропозицій ми обрали компанію "ІСМ". Проект який ми затвердили був дійсно професійним і добре продуманим. В результаті роботи з цією компанією:
                               збільшилась ефективність праці персоналу магазину і вирішились ще багато питань, які виникають у процесі роботи маркету. Тепер активно працюємо з компанією і в інших торгових залах України.
                               Робота по установці та налаштуванні відеоспостереження була виконана професійно, точно і в термін.
                               Рекомендую для співпраці.</p>

                        </div>
                    </div>
                </Element>


                <Element style={{marginTop:"2rem"}} id='our-partners' name='our-partners'>
                    <h2 style={{ width: "100%", textAlign: "center" }} >ПАРТНЕРИ</h2>

                  <div className="container">
                    <div className="row">
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/591041e80d40d.jpg'}   alt="Cinque Terre" />
                        </div>
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/1130949_company_logo_1.png'}   alt="Mountains and fjords" />
                        </div>
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/e8c9ea25a129268d2b306535d083ba3b.png'}   alt="Northern Lights" />
                        </div>
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/secur_1_top.jpg'}  alt="Nature and sunrise" />
                        </div>
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/share.jpg'}   alt="Snowy Mountains" />
                        </div>
                        <div className="column col-md-2 col-lg-2 col-xs-2">
                            <img className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/snymok.jpg'}   alt="Snowy Mountains" />
                        </div>
                    </div>
                </div>
                </Element>






            </div>
        );
    }
}


export default Home;