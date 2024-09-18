import React, { useState, useEffect } from 'react';
import HeaderHotel from '../../components/HeaderHotel';
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import './suite.css';
import { TbAirConditioning } from "react-icons/tb";
import { RiSafe2Line } from "react-icons/ri";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiTelevisionSimple } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import { PiHairDryer } from "react-icons/pi";
import { GiDesk } from "react-icons/gi";
import { FaWifi } from "react-icons/fa6";
import Footer from '../../components/Footer';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import EditarSuiteModal from '../../components/EditarSuiteModal';

export default function Suite() {
    const { id } = useParams(); 
    const [suiteData, setSuiteData] = useState(null);
    const [error, setError] = useState(null);
    const [reservationDate, setReservationDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const usrTipo = localStorage.getItem('usr_tipo');
        setIsAdmin(usrTipo === '1');
    }, []);

    useEffect(() => {
        api.get(`Suite/${id}`) 
            .then(response => {
                setSuiteData(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados da suíte:', error);
                setError(error.message);
            });
    }, [id]);

    function clicouBotao() {
        const usuarioId = localStorage.getItem('usr_codigo'); 

        if (!reservationDate) {
            toast.error("Por favor, selecione uma data para a reserva.");
            return;
        }

        const reservaData = {
            suiteId: id,
            dataCheckIn: reservationDate
        };

        api.post(`CheckIn/${usuarioId}`, reservaData)
            .then(response => {
                toast.success("Quarto reservado com sucesso!");
            })
            .catch(error => {
                console.error('Erro ao realizar Check-in:', error);
                toast.error("Erro ao realizar Check-in. Por favor, tente novamente mais tarde.");
            });
    }

    function handleEditClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    function handleSave(updatedSuiteData) {
        setSuiteData(updatedSuiteData);
        setShowModal(false);
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!suiteData) {
        return <div>Carregando...</div>;
    }

    const images = [
        suiteData.caminhoFoto1,
        suiteData.caminhoFoto2,
        suiteData.caminhoFoto3,
        suiteData.caminhoFoto4
    ];

    return (
        <div>
            <HeaderHotel />
            <div className='div-suite'>
                <h1>{suiteData.titulo}</h1>
                <MdAirlineSeatIndividualSuite style={{ fontSize: '30px', alignItems: 'center' }} />
                <p>{suiteData.descricao}</p>
                {isAdmin && <button onClick={handleEditClick}>Editar Suíte</button>}
            </div>

            <div className='icones'>
                <div className='icon-item'><TbAirConditioning /><span>Ar condicionado</span></div>
                <div className='icon-item'><RiSafe2Line /><span>Cofre</span></div>
                <div className='icon-item'><CgSmartHomeRefrigerator /><span>Frigobar</span></div>
                <div className='icon-item'><PiTelevisionSimple /><span>Smart TV</span></div>
                <div className='icon-item'><BiCloset /><span>Closet</span></div>
                <div className='icon-item'><PiHairDryer /><span>Secador de cabelo</span></div>
                <div className='icon-item'><GiDesk /><span>Escrivaninha</span></div>
                <div className='icon-item'><FaWifi /><span>WiFi Gratuíto</span></div>
            </div>

            <div className='gallery2'>
                {images.map((image, index) => (
                    <div key={index} className='gallery2-item'>
                        <img src={image} alt={`Suite ${index + 1}`} />
                    </div>
                ))}
            </div>
            
            <div className='div-reservar'>
                <h1>FAÇA UMA <b>RESERVA</b></h1>
                <p>Escolha uma data para a sua reserva</p>
                <p>Check-in</p>
                <input type='date' value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />
                <button onClick={clicouBotao}>RESERVAR</button>
            </div>
            {showModal && (
                <EditarSuiteModal
                    suiteData={suiteData}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
            <Footer />
        </div>
    );
}
