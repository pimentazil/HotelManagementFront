import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './hotel.css';
import HeaderHotel from '../../components/HeaderHotel';
import AcomodacoesImg from '../../images/acomodacoes.jpg'; 
import LazerImg from '../../images/lazer.jpeg';
import GastronomiaImg from '../../images/gastronomia.jpg';
import Footer from '../../components/Footer';

export default function Hotel() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem('usr_token') == null)
          navigate("/");
        if (window.localStorage.getItem('usr_codigo') == null)
          navigate("/");
        if (window.localStorage.getItem('usr_tipo') == null)
          navigate("/");
        if (window.localStorage.getItem('usr_nome') == null)
          navigate("/");
    
      }, [])

    return (
        <div>
            <HeaderHotel />
            <div className='background-hotel'>
                <div className='backgroundImageHotel' />
                <h1><span>Conheça</span> o Big Hotel!<br /> O melhor hotel para se Hospedar.</h1>
            </div>
            <div className='content'>
                <h1>A <b>melhor</b> vista do Big Hotel...</h1>
                <p>O Pipa Lagoa Hotel está localizado em frente à lagoa de Guaraíras,
                    proximo da praia há 990 metros chamada praia de Tibau do Sul e há apenas 07 minutos de carro do centro da
                    vila de Pipa passando por 06 belas praias. <br /><br />

                    O hotel foi idealizado para oferecer conforto, privacidade, lazer e sofisticação aos seus hóspedes,
                    além de estar integrado a uma paisagem natural exuberante, onde você pode desfrutar de uma vista única.<br /><br />

                    Com grande área verde, espaço para crianças, academia, salão de eventos, parque aquático com piscina infantil e aquapark;
                    piscina infanto-juvenil; jacuzzi, piscina com borda infinita, bar molhado e hidromassagem,
                    o Pipa Lagoa é uma excelente opção para quem deseja relaxar, sem abrir mão do conforto, tranquilidade e comodidade.
                    O hotel dispõe de amplos apartamentos e chalés totalmente equipados, para melhor acomodar os seus hóspedes.<br /><br />
                    Além dos tipos de acomodações, nossos hóspedes podem escolher a vista que querem apreciar: jardim, piscina e/ou lagoa.<br /><br />

                    Para você e sua família desfrutarem de um momento relax, o nosso SPA oferece várias opções de massagem...</p>
            </div>

            <div className='apresentacao'>
                <div className='acomodacoes'>
                    <a href='/acomodacoes'>
                    <div className='acomodacoes-image acomodacoes' style={{ backgroundImage: `url(${AcomodacoesImg})` }} />
                    <h1>Acomodações</h1>
                    </a>
                </div>
                <div className='acomodacoes'>
                    <a href='/lazer'><div className='acomodacoes-image lazer' style={{ backgroundImage: `url(${LazerImg})` }} />
                    <h1>Lazer</h1></a>
                </div>
                <div className='acomodacoes'>
                    <a href='/gastronomia'>
                    <div className='acomodacoes-image gastronomia' style={{ backgroundImage: `url(${GastronomiaImg})` }} />
                    <h1>Gastronomia</h1></a>
                </div>
            </div>


            <Footer />
        </div>
    )
}