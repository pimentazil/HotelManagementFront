import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderHotel from '../../components/HeaderHotel';
import { MdAirlineSeatIndividualSuite } from "react-icons/md";
import './acomodacoes.css';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import RegistrarSuiteModal from '../../components/RegistrarSuiteModal';
import { toast } from 'react-toastify';

export default function Acomodacoes() {
    const navigate = useNavigate();
    const [suites, setSuites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const usrTipo = localStorage.getItem('usr_tipo');
        setIsAdmin(usrTipo === '1');
    }, []);

    useEffect(() => {
        api.get('Suite')
            .then(response => {
                setSuites(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados das suítes:', error);
            });
    }, []);

    function handleSaibaMais(id) {
        navigate(`/suite/${id}`);
    }

    function handleRegisterClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    function handleSave() {
        setShowModal(false);
    }

    async function deletarSuite(id) {
        try {
            await api.delete(`/Suite/${id}`, isAdmin)
            setSuites(suites.filter(suite => suite.id !== id))
            toast.success("Sucesso ao deletar")
        }
        catch (error) {
            alert('Erro ao deletar')
        }
    }

    return (
        <div>
            <HeaderHotel />
            <div className='div-acomodacoes'>
                <div className='div-title'>
                    <h1>Nossas Acomodações</h1>
                    <MdAirlineSeatIndividualSuite style={{ fontSize: '30px', alignItems: 'center' }} />
                </div>
                {isAdmin && <button onClick={handleRegisterClick}>Nova Suíte</button>}
                <p>O hotel dispõe de amplos apartamentos e chalés totalmente equipados,
                    para melhor acomodar os seus hóspedes, oferecendo maior conforto,
                    privacidade e integração total à natureza.</p>
                <div className="galleryy">
                    {suites.map((suite) => (
                        <div key={suite.id} className="galleryy-item">
                            <img src={suite.caminhoFoto1} alt={`Quarto ${suite.id}`} />
                            <div className="infoo">
                                <div className="room-name">{suite.titulo}</div>
                                <button onClick={() => handleSaibaMais(suite.id)}>Saiba Mais</button>
                                {isAdmin &&<button className='btnDeletar' onClick={() => deletarSuite(suite.id)}>Deletar Suíte</button>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <RegistrarSuiteModal
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
            <Footer />
        </div>
    );
}