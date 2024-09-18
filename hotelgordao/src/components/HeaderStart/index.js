import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../pages/Login';


export default function Header() {
  return (
    <header className="header">
      <h1>Big Hotel</h1>
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#cadastro">Promoções</a></li>
        </ul>
      </nav>
      <div className="user">
        <Link to={`/login`} className='button'>Fazer Login</Link>
        <Link to={`/register`} className='button'>Cadastre-se</Link>
      </div>
    </header>
  )
}