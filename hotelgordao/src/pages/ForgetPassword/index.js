import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('https://localhost:7013/RedefinirSenha/EnviarEmailRedefinirSenha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            toast.success("E-mail enviado com sucesso.");
        } else {
            toast.error("Verifique seu e-mail.");
        }
    };

    return (
        <div className='div-login'>
            <h1>Redefinir senha</h1>
            <p>Digite seu e-mail que enviaremos um link para definir uma nova senha.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type='email' 
                    placeholder='Digite seu e-mail' 
                    value={email} 
                    onChange={handleEmailChange} 
                    required 
                />
                <button className="buttonnnnn" type="submit">REDEFINIR</button>
            </form>
            <p>Esse site é protegido por reCAPTCHA e as 
                <a href='/politicasdeprivacidade'><b> Políticas de Privacidade</b></a> e
                 do Google se aplicam.
            </p>
        </div>
    );
}
