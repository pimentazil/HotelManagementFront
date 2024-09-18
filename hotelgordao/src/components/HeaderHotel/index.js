import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './headerhotel.css';

export default function HeaderHotel() {
  const [currentPage, setCurrentPage] = useState('');
  const [tipousuario, setTipoUsuario] = useState(0); // Estado para o tipo de usuário
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname); 
    const tipo = localStorage.getItem('usr_tipo');
    setTipoUsuario(parseInt(tipo, 10));
  }, [location]);

  return (
    <header className="header-hotel">
            <Link to={`/hotel`}><h1>Big Hotel</h1></Link>
            <nav className="nav">
        <ul>
          <li className={currentPage === "/hotel" ? "active" : ""}><Link to="/hotel">O Hotel</Link></li>
          <li className={currentPage === "/acomodacoes" ? "active" : ""}><Link to="/acomodacoes">Acomodações</Link></li>
          <li className={currentPage === "/lazer" ? "active" : ""}><Link to="/lazer">Lazer</Link></li>
          <li className={currentPage === "/gastronomia" ? "active" : ""}><Link to="/gastronomia">Gastronomia</Link></li>
          <li className={currentPage === "/contatos" ? "active" : ""}><Link to="/contatos">Contatos</Link></li>
          {tipousuario === 1 && <span className="admin-label">Administrativo*</span>}
        </ul>
      </nav>
      <div className="user">
        <Link to={`/minhaconta`} className='button'>Minha Conta</Link>
        <Link to={`/`} className='button'>Sair</Link>
      </div>
    </header>
  );
}
