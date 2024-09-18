import React, { useState, useEffect } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [showRedefinirSenha, setShowRedefinirSenha] = useState(false);

    const url = "Autenticacao";
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoadingAuth(true);
        try {
            const response = await api.post(url, formData);
            const { token, codigo, nome, tipo, unidade } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;
            localStorage.setItem('usr_token', token);
            localStorage.setItem('usr_codigo', codigo);
            localStorage.setItem('usr_nome', nome);
            localStorage.setItem('usr_tipo', tipo);
            localStorage.setItem('usr_unidade', unidade);

            if (response.status === 200) {
                navigate('/hotel');
                setFormData({ email: '', senha: '' });
            } else {
                throw new Error('Erro de solicitação: ' + response);
            }
        } catch (error) {
            toast.error('Email ou senha inválidos!');
        } finally {
            setLoadingAuth(false);
        }
    };

    const handleEsqueciMinhaSenha = () => {
        setShowRedefinirSenha(true);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='div-login'>
                <h1>Entrar na minha conta</h1>

                <input
                    type='email'
                    name='email'
                    placeholder='Digite seu e-mail'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <input
                    type='password'
                    name='senha'
                    placeholder='Digite sua senha'
                    value={formData.senha}
                    onChange={handleInputChange}
                    required
                />

                <Link to="/password">
                    <span className='label1'>Esqueci minha senha</span>
                </Link>
                
                <button type="submit" className="buttonnn" disabled={loadingAuth}>
                    {loadingAuth ? <div className="spinner-border-sm spinner-border" role="status"></div> : "Entrar"}
                </button>

                <p>
                    Esse site é protegido por reCAPTCHA e as
                    <a href='/politicasdeprivacidade'><b> Políticas de Privacidade</b></a>
                </p>
            </div>
        </form>
    );
}
