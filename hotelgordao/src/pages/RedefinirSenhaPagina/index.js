import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function RedefinirSenha() {
    const { id } = useParams(); 
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            toast.warn('As senhas não coincidem.');
            return;
        }

        const cleanId = id.replace('@', ''); 

        try {
            const response = await fetch(`https://localhost:7013/RedefinirSenha/${cleanId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ senha })
            });

            if (response.ok) {
                toast.success("Senha redefinida com sucesso.");
            } else {
                toast.error("Erro ao atualizar a senha do usuário.");
            }
        } catch (error) {
            setMensagem('Erro ao conectar com o servidor.');
        }
    };

    return (
        <div className='div-login'>
            <h1>Redefinir senha</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type='password' 
                    placeholder='Digite sua nova senha' 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required 
                />

                <input 
                    type='password' 
                    placeholder='Confirme sua senha' 
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required 
                />

                <button className="buttonnnnn" type="submit">CRIAR NOVA SENHA</button>
            </form>

            {mensagem && <p>{mensagem}</p>}

            <p>Esse site é protegido por reCAPTCHA e as 
                <a href='/politicasdeprivacidade'><b> Políticas de Privacidade</b></a> e
                do Google se aplicam.
            </p>
        </div>
    );
}
