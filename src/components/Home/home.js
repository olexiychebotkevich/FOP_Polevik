import React, { Component } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import "./index.css"
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu'
import { Image } from "react-bootstrap";



class Home extends Component {
    state = {

    }


    render() {

        return (
            <div>
                <NavMenu />

                <Carousel className="carousel" >
                    <Carousel.Item className="carousel" >
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/pexels-photo-1148820.jpeg'}
                            alt="First slide"

                        />
                        <Carousel.Caption className="carousel_caption">
                            <h1 className="h1carousel">Партнер у світі технологій</h1>
                            <h2 className="h2carusel">Надійно, якісно, доступно!</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/pexels-photo-2881232.jpeg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="carousel_caption">
                            <h1 className="h1carousel">Орієнтир вашого успіху</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + 'images/carusel/iso-republic-drone-camera-gimbal.jpg'}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel_caption">
                            <h1 className="h1carousel">Професійне рішення завдань</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                <Element id='our-services' name='our-services'>
                    <div style={{ paddingTop: "1rem", paddingBottom: "5rem" }} className='container'>
                        <div className='row'>

                            <div className="imgcontainer col-xl-3 col-lg-6  col-md-6 xol-sm-12">
                                <Image src={process.env.PUBLIC_URL + 'images/videosurveillance/photo-1519871544760-ff4e659017b9.jpg'} alt="Avatar" className="image videoimage" />
                                <h3 className="text">Відеоспостереження</h3>
                                <div className=" middle">
                                    <Link to="/videosurveillance" className="btn btn-primary btnservices">Детальніше</Link>
                                </div>
                            </div>

                            <div className="imgcontainer col-xl-3 col-lg-6  col-md-6 xol-sm-12">
                                <Image src={process.env.PUBLIC_URL + 'images/skm/depositphotos_79986632_m-2015.jpg'} alt="Avatar" className="image skmimage" />
                                <h3 className="text">Структурована кабельна мережа</h3>
                                <div className="middle">
                                    <Link to="/skm" className="btn btn-primary btnservices">Детальніше</Link>
                                </div>
                            </div>

                            <div className="imgcontainer  col-xl-3 col-lg-6 col-md-6 xol-sm-12">
                                <Image src={process.env.PUBLIC_URL + 'images/mom/pexels-photo-2881229.jpeg'} alt="Avatar" className="image momimage" />
                                <h3 className="text">Монтаж оптоволоконних мереж</h3>
                                <div className="middle">
                                    <Link to="/mom" className="btn btn-primary btnservices">Детальніше</Link>
                                </div>
                            </div>

                            <div className="imgcontainer  col-xl-3 col-lg-6 col-md-6 xol-sm-12">
                                <Image src={process.env.PUBLIC_URL + 'images/designing/ingenernoe_proektirovanie1.jpg'} alt="Avatar" className="image designingimage" />
                                <h3 className="text">Проектування</h3>
                                <div className="middle">
                                    <Link to="/designing" className="btn btn-primary btnservices">Детальніше</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </Element>


                <Element id='about-us' name='about-us'>


                    <div className="container">
                        <div className="row">

                            <h2 style={{ width: "100%", textAlign: "center" }} >ПРО КОМПАНІЮ</h2>

                            <hr style={{
                                width: "100%",
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }} />



{/*
 1)franklin gothic book
 2)lucida sans unicode
 3)isocpeur
 4)garamond
 5)cambria
*/}

                            <p className="about">
                                <span className="titletext">ФОП Полевік</span> з початку своєї діяльності орієнтувався на комплексне вирішення
                                 проблем клієнтів щодо програмних та апаратних засобів комп’ютеризації,
                                 комп’ютерних мереж, засобів безпеки, відеоспостереження, а також якісного і
                                 доступного сервісу.
                                 Ми здійснюємо проектування, монтаж, налаштування та техобслуговування
                                 систем відеонагляду, оптоволоконних мереж, структурованих кабельних
                                 систем, реалізуємо рішення з використанням високотехнологічного обладнання
                                 від кращих компаній-виробників, враховуючи функціональність і економічну
                                 доцільність.
                            </p>
                            <p style={{fontFamily:"cambria"}} className="about">
                                Досвід та професіоналізм наших співробітників дозволяє виконувати роботи
                                різної складності у визначені замовником терміни.
                                <span className="titletext"> ФОП Полевік</span> стежить за останніми тенденціями у світі технологій, це дозволяє
                                нам йти на крок попереду конкурентів і використовувати у роботі якісну і
                                різноманітну продукцію в сфері IT-технологій.</p>
                            <p className="about">
                                Ми вважаємо, що основним здобутком нашої діяльності є довготривалі
                                відносини та плідна співпраця з нашими партнерами:
                                </p>




                        </div>
                    </div>

                </Element>

                <Element style={{ marginBottom: "3rem" }} id='our-partners' name='our-partners'>




                    <div className="container" style={{ marginTop: "5%" ,marginBottom: "5%" }}>


                        <h2 style={{ width: "100%", textAlign: "center" }} >НАШІ ПАРТНЕРИ</h2>

                        <hr style={{
                            width: "100%",
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: '#000000',
                            marginTop: "5%"
                        }} />


                        <div className="row align-items-center" style={{ marginTop:"50px",marginBottom:"50px"}}>
                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/e8c9ea25a129268d2b306535d083ba3b.png'} alt="Northern Lights" />
                            </div>

                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/secur_1_top.jpg'} alt="Nature and sunrise" />
                            </div>

                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/share.jpg'} alt="Snowy Mountains" />
                            </div>

                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/snymok.jpg'} alt="Snowy Mountains" />
                            </div>

                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/1130949_company_logo_1.png'} alt="Mountains and fjords" />
                            </div>

                            <div className="column col-md-2 col-lg-2 col-xs-2">
                                <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/partners/591041e80d40d.jpg'} alt="Cinque Terre" />
                            </div>




                        </div>

                        <div className="row">

                        <h2 style={{ width: "100%", textAlign: "center",marginTop:"5%" }} >ГАРАНТІЙНЕ ТА ПІСЛЯГАРАНТІЙНЕ ОБСЛУГОВУВАННЯ</h2>

                        <hr style={{
                            width: "100%",
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: '#000000',
                            marginTop: "5%"
                        }} />


                        <p className="about">
                            <span className="titletext">ФОП Полевік</span> несе повну відповідальність за усі виконані роботи. Ми
                        <span className="titletext"> гарантуємо підтримання працездатності обладнання та інженерних
                            систем</span> як в гарантійний, так і після гарантійний термін. Довготривала
                            співпраця з нашими партнерами є пріоритетним завданням для нас.
                        </p>


                            <p className="about">
                                Термін гарантійних зобов'язань, які несе <span className="titletext">ФОП Полевік </span>  при постачанні
                            обладнання,<span className="titletext"> складає від 12 до 36 місяців, на виконані роботи – від 6
                        до 12 місяців.</span>
                            </p>

                        <p className="about">
                            Після <span className="titletext">закінчення терміну гарантійного обслуговування </span> ФОП Полевік
                            пропонує замовникам комплекс послуг з післягарантійного
                            обслуговування на договірній основі. У рамках післягарантійного
                            обслуговування наші фахівці здійснюють повну діагностику
                            інженерних систем та обладнання і відновлюють їх працездатність.
                        </p>

                        </div>


                    </div>



                </Element>






            </div>
        );
    }
}


export default Home;