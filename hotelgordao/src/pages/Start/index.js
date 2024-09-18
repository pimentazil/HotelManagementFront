import React from 'react'
import './start.css'
import Header from '../../components/HeaderStart'
import Footer from '../../components/Footer'

export default function Start() {
    return (
        <div className='div-start'>
            <Header />
            <div id='inicio' className='backgroundHome'>
                <div className='backgroundImage' />
                <h1><span>Encontre</span> o melhor quarto<br /> para se hospedar.</h1>
            </div>

            <div id='quem-somos'>
                <h2>Nosso legado é construído não pelo que acumulamos para nós mesmos, mas pelo que compartilhamos com os outros, deixando marcas eternas nas vidas que tocamos.</h2>
                <h1>QUEM SOMOS</h1>
                <h3>Big Hotel é fruto da imaginação e da
                    criatividade de um grupo dedicado de estudantes do ensino médio,
                    todos apaixonados por inovação e comprometidos em criar uma experiência única.
                    Inspirados por nossa especialização em informática, resolvemos transformar nosso amor
                    pela tecnologia em um projeto fictício que une conforto, modernidade e atendimento de excelência.
                    A ideia surgiu da vontade de proporcionar uma estadia inesquecível para nossos hóspedes,
                    oferecendo um espaço onde a inovação encontra o aconchego. Nosso hotel é mais que um simples local de descanso;
                    é um refúgio onde cada detalhe foi pensado para oferecer o máximo de comodidade e bem-estar.</h3>
            </div>

            <div id='cadastro'>
                <h1>CADASTRE-SE E RECEBA NOSSAS <b>PROMOÇÕES EXCLUSIVAS!</b></h1>
                <form>
                    <label>Nome Completo</label>
                    <input type='text' />

                    <label>E-mail</label>
                    <input type='email' />
                    <button>Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
