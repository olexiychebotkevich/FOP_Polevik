import React, { Component } from 'react';
import './index.css';
import NavMenu from '../NavMenu/NavMenu'
import { Image, Container, Row, Col } from "react-bootstrap";

class designing extends Component {
    state = {  }
    render() { 
        return (
            <div>
                 <NavMenu />
                <div className="designingheader">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Проектування</h3>
                    </div>
                </div>

                <Container>
                    <p className="designingtext">
                    <span className="titletext">Проектування інженерних систем</span> - важливий процес, що полягає у
                    власному розрахунку системи, оцінці необхідної кількості, а також
                    номенклатури обладнання. ФОП Полевік забезпечує своєчасне
                    виконання вимог клієнта у повному обсязі при оптимальному
                    співвідношенні якості, ціни та термінів виконання.
                    </p>



                    <h2 className="h2designing">Етапи створення проекту:</h2>

                    <ul className="designinglist">
                        <li>отримання технічного завдання від замовника;</li>
                        <li>створення попереднього проектного рішення;</li>
                        <li>отримання технічних умов;</li>
                        <li>виконання проекту;</li>
                        <li>погодження з усіма інстанціями.</li>
                    </ul>

                    <p className="designingtext">
                    Ми комплексно підходимо до процесу проектування інженерних
                    систем - враховуємо специфіку об&#39;єкта, нормативні вимоги і
                    використовуємо сучасні технологічні рішення. Розрахунки
                    здійснюються висококваліфікованими фахівцями із застосуванням
                    сучасного програмного забезпечення, що дозволяє оптимізувати
                    технічні рішення і досягти максимальної якості проектної
                    документації.
                    </p>

                </Container>
            </div>
          );
    }
}
 
export default designing ;