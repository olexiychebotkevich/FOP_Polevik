import React, { Component } from 'react';
import './index.css';
import NavMenu from '../NavMenu/NavMenu'
import { Image, Container, Row, Col } from "react-bootstrap";

class mom extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <NavMenu />
                <div className="momheader">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Волоконно-оптичні мережі</h3>
                    </div>
                </div>

                <Container>
                    <p className="skmtext">
                    <span className="titletext">Волоконно-оптична мережа</span> - це інформаційна мережа, сполучними
                    елементами між вузлами якої є волоконно-оптичні лінії зв&#39;язку.
                    Технології волоконно-оптичних мереж, крім питань волоконної
                    оптики, охоплюють також питання, що стосуються електронного
                    передавального обладнання, його стандартизації, протоколів
                    передачі, питання топології мережі та загальні питання побудови
                    мереж.
                    </p>



                    <h2 className="h2skm">Переваги волоконно-оптичних ліній зв’язку (ВОЛЗ):</h2>

                    <ul className="skmlist">
                        <li>мале загасання сигналу дозволяє передавати інформацію на велику відстань без використання підсилювачів;</li>
                        <li>висока пропускна здатність оптичного волокна дозволяє передавати інформацію на швидкості, недосяжної для інших систем зв'язку;</li>
                        <li>висока надійність оптичного середовища: оптичні волокна не окислюються, не намокають;</li>
                        <li>пожежо- та вибухобезпечність;</li>
                        <li>сигнали ВОЛЗ не піддаються впливу електромагнітного випромінювання.</li>
                    </ul>

                </Container>

                <div className="momcenter">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Монтаж волоконно-оптичних мереж:</h3>
                    </div>
                </div>

                <Container>
                    <Row className="justify-content-md-ceneter">

                    
                        <p className="momtext">
                        ФОП Полевік пропонує повний комплекс послуг з <span className="titletext">монтажу волоконно-оптичних мереж :</span>
                        </p>

                        <ul style={{marginBottom:"5%"}} className="momlist">
                            <li>проектування та погодження проекту з усіма інстанціями;</li>
                            <li>прокладання оптичного кабелю у кабельній каналізації;</li>
                            <li>підвіс кабелю ВОЛЗ;</li>
                            <li>монтаж оптичних компонентів;</li>
                            <li>розварювання оптичних волокон;</li>
                            <li>тестування та вимірювання ВОЛЗ;</li>
                            <li>ввід в експлуатацію;</li>
                            <li>гарантійне та післягарантійне обслуговування.</li>
                        </ul>
                    </Row>
                 </Container>
            </div>
         );
    }
}
 
export default mom;