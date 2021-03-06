import React, { Component } from 'react';
import './index.css';
import NavMenu from '../NavMenu/NavMenu'
import { Container, Row, Col } from "react-bootstrap";
class skm extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavMenu />
                <div className="skmheader">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Структурована кабельна система</h3>
                    </div>
                </div>

                <Container>
                    <p className="skmtext">
                    <span className="titletext">Структурована кабельна система (СКС)</span> – це універсальна
                        телекомунікаційна інфраструктура будівлі чи комплексу будівель, що
                        забезпечує передачу сигналів всіх типів, інформаційні системи
                        (голосові, відео), охоронні, пожежні та інші. Це сучасне,
                        високошвидкісне, багатофункціональне мережеве рішення, що
                        належить до капітальних комунікаційних утворень.
                    </p>


                    <p className="skmtext">
                        <span className="titletext">Структурована кабельна система (СКС)</span> є невід’ємною частиною будь-
                        якого житлового будинку чи підприємства. <span className="titletext">Головне завдання СКС</span> –
                        створити в приміщенні або між декількома будівлями єдину
                        загальноінформаційну систему.
                    </p>


                    <h2 className="h2skm">Переваги СКС:</h2>

                    <ul className="skmlist">
                        <li>висока надійність кабельної системи;</li>
                        <li>зміна конфігурації без впливу на існуючу мережу;</li>
                        <li>одночасне використання різних мережевих протоколів;</li>
                        <li>створення єдиної служби експлуатації;</li>
                        <li>забезпечення швидкої локалізації несправності за рахунок модульного принципу побудови.</li>
                    </ul>

                    <p className="skmtext">
                        Структурована кабельна мережа - нервова система ІТ-інфраструктури.
                        Від грамотності її планування - з урахуванням необхідних стандартів і
                        вимог кінцевого користувача - залежить ефективність і працездатність
                        всієї ІТ-системи.
                     </p>

                </Container>

                <div className="skmcenter">
                    <div className="container text-center text-white my-auto">
                        <h3 className="mb-1 display-4 h3title">Монтаж структурованих кабельних систем</h3>
                    </div>
                </div>

                <Container>
                    <Row className="justify-content-md-left">


                        <p className="skmtext">
                            Наші фахівці візьмуть на себе <span className="titletext">побудову волоконно-оптичних ліній
                        зв’язку (ВОЛЗ)</span> у рамках створення комплексних рішень СКС:
                        </p>

                        <ul className="skmlist">
                            <li>у багатоквартирних житлових будинках;</li>
                            <li>офісних приміщеннях;</li>
                            <li>підприємствах.</li>
                        </ul>


                    </Row>


                    <Row className="justify-content-md-left">
                        <p className="skmtext">
                            ФОП Полевік пропонує повний комплекс послуг <span className="titletext skmtext">з монтажу
                         структурованих кабельних систем :</span>
                        </p>

                        <ul style={{ marginBottom: "5%" }} className="skmlist">
                            <li>виїзд фахівця для попереднього проектного рішення (безкоштовно);</li>
                            <li>підбір оптимальних варіантів обладнання та складання комерційної пропозиції (безкоштовно);</li>
                            <li>виконання проекту (за потреби);</li>
                            <li>монтаж та налаштування СКС;</li>
                            <li>навчання персоналу з питань експлуатації системи;</li>
                            <li>гарантійне та післягарантійне обслуговування.</li>
                        </ul>


                    </Row>


                </Container>



            </div>
        );
    }
}

export default skm;