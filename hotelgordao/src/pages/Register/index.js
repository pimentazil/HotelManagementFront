import React, { useState, useRef } from 'react';
import { RiLoginBoxFill } from "react-icons/ri";
import './register.css';
import { formatarCPF, validarCPF } from '../../utils/utils';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        telefone: '',
    });
    const [isCPFValid, setIsCPFValid] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    const url = 'api/Usuario';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'cpf' ? formatarCPF(value) : value
        });

        if (name === 'cpf') {
            setIsCPFValid(validarCPF(value));
        }
    };

    const formatarNumeroTelefone = (numero) => {
        const numeros = numero.replace(/\D/g, '');
        const regexTelefone = /^(\d{2})(\d{5})(\d{4})$/;
        return numeros.replace(regexTelefone, '($1)$2-$3');
    };

    const handleTelefoneChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            telefone: formatarNumeroTelefone(value.replace(/[^0-9]/g, ''))
        });
    };

    const handleCadastro = async () => {
        const { nome, email, senha, cpf, telefone } = formData;
        const telform = telefone.replace(/[^0-9]/g, '');

        if (!nome) {
            toast.warn('Por favor, preencha o campo nome.');
            return;
        }

        if (!email) {
            toast.warn('Por favor, preencha o campo email.');
            return;
        }

        if (!senha) {
            toast.warn('Por favor, preencha o campo senha.');
            return;
        }

        if (!validarCPF(cpf)) {
            toast.warn("CPF inválido. Verifique novamente.");
            return;
        }

        if (telform.length !== 11) {
            toast.warn(telform ? "O campo 'Telefone' deve conter 11 dígitos." : "Por favor, preencha o campo 'Telefone'.");
            return;
        }

        setLoadingAuth(true);
        try {
            const response = await api.post(url, {
                nome,
                email,
                senha,
                telefone,
                cpf: cpf.replace(/\D/g, ''),
            });

            if (response.status === 200) {
                toast.success("Cadastro realizado com sucesso.");
                navigate("/login");
            }
        } catch (error) {
            toast.error("Email já cadastrado.");
        } finally {
            setLoadingAuth(false);
        }
    };

    return (
        <div className='div-register'>
            <h1>Crie sua conta</h1>

            <input
                type='text'
                name='nome'
                placeholder='Nome completo*'
                value={formData.nome}
                onChange={handleInputChange}
                required
            />
            <input
                type='email'
                name='email'
                placeholder='Email*'
                value={formData.email}
                onChange={handleInputChange}
            />
            <input
                type='password'
                name='senha'
                placeholder='Senha*'
                value={formData.senha}
                onChange={handleInputChange}
            />
            <input
                type='text'
                name='cpf'
                placeholder='CPF*'
                value={formData.cpf}
                onChange={handleInputChange}
                className={!isCPFValid ? 'invalid' : ''}
            />
            <input
                type='text'
                name='telefone'
                placeholder='Telefone*'
                maxLength={15}
                value={formData.telefone}
                onChange={handleTelefoneChange}
            />

            <button
                className='buttonnnnn'
                onClick={handleCadastro}
                disabled={loadingAuth}
            >
                {loadingAuth ? <div className="spinner-border-sm spinner-border" role="status"></div> : "Enviar"}
            </button>

            <p>
                Esse site é protegido por reCAPTCHA e as
                <a href='/politicasdeprivacidade'><b> Políticas de Privacidade</b></a>
            </p>
        </div>
    );
}
