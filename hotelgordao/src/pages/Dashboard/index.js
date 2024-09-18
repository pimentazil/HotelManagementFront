import React, { useState, useEffect } from 'react';
import HeaderHotel from '../../components/HeaderHotel';
import Footer from '../../components/Footer';
import './dashboard.css';
import api from '../../services/api';

const Dashboard = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReservationDetails();
    }, []);

    const fetchReservationDetails = async () => {
        try {
            const usuarioId = localStorage.getItem('usr_codigo'); 
            const response = await api.get(`/CheckIn/${usuarioId}`); 
            
            if (response.data) {
                const { dataDaReserva } = response.data; 

                if (dataDaReserva) {
                    const dateObject = new Date(dataDaReserva);
                    setCheckInDate(dateObject); 
                } else {
                    setCheckInDate(null); 
                }
            } else {
                setCheckInDate(null); 
            }
        } catch (error) {
            console.error('Erro ao buscar detalhes da reserva:', error);
            setError(error.message);
        }
    };

    const nome = localStorage.getItem('usr_nome');

    return (
        <div className="dashboard-page">
            <HeaderHotel />
            <div className="dashboard-container">
                <h1>Bem-vindo, {nome}!</h1>
                <div className="reservation-details">
                    <h2>Detalhes da Reserva</h2>
                    <p><strong>Hotel:</strong> Big Hotel</p>
                    <p><strong>Data da reserva:</strong> {checkInDate ? checkInDate.toLocaleDateString() : 'Carregando...'}</p>
                    <p><strong>Status:</strong> Confirmada</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
