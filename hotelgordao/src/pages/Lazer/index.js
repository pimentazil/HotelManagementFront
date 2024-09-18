import React from 'react'
import HeaderHotel from '../../components/HeaderHotel'
import './lazer.css'
import { MdFamilyRestroom } from "react-icons/md";
import Footer from '../../components/Footer'

export default function Lazer() {
    return (
        <div>
            <HeaderHotel />
            <div className='div-lazer'>
                <div className='div-title'>
                    <h1>Lazer e Diversão</h1>
                    <MdFamilyRestroom  style={{ fontSize: '30px', alignItems: 'center' }} />
                </div>
                <p>O Hotel Gordão é uma excelente opção para quem deseja relaxar, sem abrir mão do conforto, tranquilidade e comodidade.</p>

                <div className='div-piscina'>
                    <div className="info">
                        <h1>Piscinas e Bar Molhado</h1>
                        <p>Contamos com uma piscina com borda infinita, uma piscina infanto-juvenil e um bar molhado.</p>
                    </div>
                    <div className='background-imagem'></div>
                </div>

                <div className='div-espacokids'>
                    <div className="info2">
                        <div className='background-imagem2'></div>
                        <h1>Espaço Kids e AquaPark</h1>
                        <p>Pensando na comodidade e diversão de toda a família,
                            o Hotel Gordao também oferece estrutura completa de lazer e
                            entretenimento para seus pequenos hóspedes, como brinquedoteca e
                            novo espaço com piscinas e parque aquático.</p>
                    </div>
                </div>

                <div className='div-academia'>
                    <div className="info3">
                        <h1>Academia</h1>
                        <p>Você não precisa deixar de lado sua saúde. Temos uma academia completa para que você possa continuar se cuidando.</p>
                    </div>
                    <div className='background-imagem3'></div>
                </div>

                <div className='div-dj'>
                    <div className="info4">
                        <div className='background-imagem4'></div>
                        <h1>Sunset com DJ</h1>
                        <p>Um espaço cheio de diversão e música para você curtir um momento único e cheio de boas energias.
                            Todos os sábados temos DJ no nosso Sunset para alegrar ainda mais o dia.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
