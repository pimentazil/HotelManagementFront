import React from "react";
import './footer.css';
import Wpp from '../../images/wpp.png';
import Email from '../../images/email.png';
import Insta from '../../images/insta.png';


export default function Footer(){
    return(
        <div className="footer">
            <main>
                <div>
                    <h1 className="title">Hotel Gordão</h1>
                    <p className="paragrafo">Criado por estudantes de Tecnologia, a Dose de Esperança leva atendimento médico humanizado e recorrente às populações mais vulneráveis da sociedade.</p>
                </div>
                <div className="ondeEstamos">
                    <h1>Onde estamos</h1>
                    <p>Itapevi - SP</p>
                    
                </div>
                <div className="contatoo">
                    <h1>Contato</h1>
                   <img src={Wpp}/> <p>Whatsapp</p>
                   <img src={Email}/> <p>hotelgordao@gmail.com</p>
                   <img src={Insta}/> <p>Instagram</p>
                </div>
            </main>
            <section>
                <p>Copyright©2023, Hotel Gordão. Todos os direitos reservados</p>
            </section>
        </div>
    )
}