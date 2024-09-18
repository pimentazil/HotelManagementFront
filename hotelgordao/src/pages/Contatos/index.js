import React from 'react';
import './contatos.css';
import HeaderHotel from '../../components/HeaderHotel';
import Wpp from '../../images/wpp.png';
import Email from '../../images/email.png';
import Insta from '../../images/insta.png';
import Footer from '../../components/Footer';

export default function Contatos() {
    return (
        <div>
            <div className='contatos-page'>
                <HeaderHotel />
                <div className='contatos-container'>
                    <div className='div-contatos'>
                        <div className='form'>
                            <h1>Fale conosco</h1>
                            <label>Nome:</label>
                            <input type='text' />

                            <label>Telefone/Whatsapp:</label>
                            <input type='text' />

                            <label>E-mail:</label>
                            <input type='email' />

                            <label>Mensagem:</label>
                            <textarea />
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-item'>
                            <img src={Insta} alt="Instagram" />
                            <p>Rodovia Rn 0003 Tibau do Sul, Rn 59178000, Brasil</p>
                        </div>
                        <div className='contact-item'>
                            <img src={Email} alt="Email" />
                            <p>Reservas: (11) 97795-6356 | (11) 99930-4395</p>
                        </div>
                        
                        <div className='contact-item'>
                            <img src={Email} alt="Email" />
                            <p><a href="mailto:reservas@pipalagoa.com">hotelgordao@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
