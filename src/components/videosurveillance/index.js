import React, { Component } from 'react';
import './index.css';
import NavMenu from '../NavMenu/NavMenu'
import { Image, Container, Row, Col } from "react-bootstrap";
class Videosurveillance extends Component {
    state = {}
    render() {
        return (

            <div>
                <NavMenu />
                <div className="videoheader">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Відеоспостереження</h3>
                    </div>
                </div>


                <Container>
                    <p className="videotext"  >
                        Сучасний світ вимагає контролю і захисту. На сьогодні системи
                        відеоспостереження є одним з найбільш раціональних та надійних
                        способів убезпечення певного об’єкту. Їх установка в рази знижує
                        ймовірність незаконного вторгнення сторонніх осіб на територію, що
                        охороняється. У наш час не лише правоохоронні органи і великі
                        організації мають право користуватись перевагами охоронного
                        відеоспостереження. Захистити себе, родину, житло та бізнес може
                        кожен. Відеонагляд не розкіш, а необхідність!
                 </p>
                    <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Image style={{ width: "100%", float: "left" }} src={process.env.PUBLIC_URL + 'images/videosurveillance/pexels-photo-96612.jpeg'} />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <p className="videotext">
                                    Система відеоспостереження (відеонагляду, відеоконтролю)
                                    призначена для організації отримання інформації про поточний стан
                                    об'єкту, що охороняється (технологічного процесу) шляхом збору,
                                    обробки, архівування, зберігання, відображення та аналізу цієї
                                    інформації.
                             </p>
                            </Col>
                        </Row>
                    </Container>



                </Container>


                <div className="videoheader">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Типи систем відеоспостереження</h3>
                    </div>
                </div>

                <Container>
                    <Row className="justify-content-md-center">

                        <p className="videotext">
                            Усі системи відеоохорони можна
                            класифікувати на дві групи: <span className="titletext">провідні і бездротові</span>. Крім того, системи
                            бувають <span className="titletext">аналогові і цифрові</span>. Використання тієї чи іншої системи
                            залежить від специфіки об'єкту, що контролюється. За допомогою
                            цифрового відеоспостереження можна убезпечити практично будь-
                            який об'єкт. Залежно від вимог замовника можливе встановлення
                            камер різних форм та різновидів:
                         </p>


                        <ul className="videolist">
                            <li>мініатюрні онлайн-камери;</li>
                            <li>модульні;</li>
                            <li>корпусні (стандартні, професійні);</li>
                            <li>купольні;</li>
                            <li>поворотні ("speed dome") та інші.</li>
                        </ul>


                    </Row>

                    <Row>
                        <Col sm md lg xs><Image style={{ width: "100%" }} src={process.env.PUBLIC_URL + 'images/HIKVISION/_ip-_wi-fi_hikvision_ds-2cd2143g0-is_2.8_mm_2__2.jpg'} /></Col>
                        <Col sm md lg xs><Image style={{ width: "100%" }} src={process.env.PUBLIC_URL + 'images/TEKSAR/tecsar-beta-ip-cam-bullet_1_1.jpg'} /></Col>
                        <Col sm md lg xs><Image style={{ width: "100%" }} src={process.env.PUBLIC_URL + 'images/UNIVIEW/ipc3612er3-pf28-c_1000_2.jpg'} /></Col>
                    </Row>

                </Container>


                <div className="videocenter">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Переваги відеоспостереження</h3>
                    </div>
                </div>


                <Container>
                    <Row className="justify-content-md-center">
                        <p className="videotext">
                            Розпізнавати рухи, збирати відомості
                            щодо подій, порівнювати отримані дані з архівом - ці та інші опції
                            будуть доступні вам при встановленні системи відеонагляду.
                        </p>
                        <ul className="videolist">
                            <li>забезпечення безпеки;</li>
                            <li>запобігання крадіжок;</li>
                            <li>фіксація порушень;</li>
                            <li>контроль персоналу та відвідувачів;</li>
                            <li>віддалене керування у реальному часі.</li>
                        </ul>

                        <h2 className="h2video">Важливі критерії при облаштуванні системи спостереження</h2>
                        <p className="videotext">
                            Для функціонування систем відеонагляду необхідно враховувати ряд
                            наступних параметрів, які суттєво впливають на якість систем
                            відеоспостереження. При виборі камер варто звернути увагу наступне:
                        </p>

                        <ul className="videolist">
                            <li>умови роботи камери (місце розміщення, освітленість);</li>
                            <li>якість зображення;</li>
                            <li>відстань від камери до об’єкту, кут зору;</li>
                            <li>час архівування інформації на жорсткому диску;</li>
                            <li>спеціальне підсвічування для нічної зйомки.</li>
                        </ul>
                    </Row>
                </Container>

                <div className="videocenter">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Комплекс послуг з монтажу</h3>
                    </div>
                </div>

                <Container>


                    <Row className="justify-content-md-center">
                        <p className="videotext">
                            ФОП Полевік пропонує <span className="titletext">повний комплекс послуг з монтажу</span> систем відеоспостереження:
                        </p>

                        <ul className="videolist">
                            <li>виїзд фахівця для попереднього проектного рішення(безкоштовно);</li>
                            <li>підбір оптимальних варіантів обладнання та складаннякомерційної пропозиції (безкоштовно);</li>
                            <li>виконання проекту (за потреби);</li>
                            <li>навчання персоналу з питань експлуатації системи;</li>
                            <li>гарантійне та післягарантійне обслуговування.</li>
                        </ul>


                    </Row>

                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <h2 className="h2video">Ми співпрацюємо з:</h2>
                    </Row>

                    <Row className="justify-content-md-center">

                        <div className="column col-md-3 col-lg-3 col-xs-3">
                            <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/dahaua/dahualogo.png'} alt="Cinque Terre" />
                        </div>
                        <div className="column col-md-3 col-lg-3 col-xs-3">
                            <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/HIKVISION/Hikvisionlogo.png'} alt="Mountains and fjords" />
                        </div>
                        <div className="column col-md-3 col-lg-3 col-xs-3">
                            <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/TEKSAR/TEKSARlogo.png'} alt="Northern Lights" />
                        </div>
                        <div className="column col-md-3 col-lg-3 col-xs-3">
                            <Image className="demo cursor d-block w-100" src={process.env.PUBLIC_URL + 'images/UNIVIEW/univiewlogo.jpg'} alt="Nature and sunrise" />
                        </div>

                        <h2 className="h2video">Гарантійне та післягарантійне обслуговування</h2>

                        <p className="videotext">
                            ФОП Полевік несе повну відповідальність за виконані роботи. Ми
                            ставимо пріоритети на довготривалу співпрацю з нашими
                            партнерами. Прагнемо підтримувати працездатність обладнання та
                            інженерних систем як в гарантійний, так і після гарантійний термін.
                       </p>

                    </Row>


                </Container>

            </div>
        );
    }
}

export default Videosurveillance;