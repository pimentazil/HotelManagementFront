import React, { useState } from 'react';
import './editarSuiteModal.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function EditarSuiteModal({ suiteData, onClose, onSave }) {
    const [formData, setFormData] = useState(suiteData);
    const [error, setError] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        api.put(`Suite/${suiteData.id}`, formData)
            .then(() => {
                onSave(formData);
                toast.success("Suíte atualizada com sucesso.");
            })
            .catch(error => {
                toast.error("Erro ao realizar Check-in. Por favor, tente novamente mais tarde.");
            });
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}>×</button>
                <h2>Editar Suíte</h2>
                {error && <div className='modal-error'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Título:
                        <input
                            type='text'
                            name='titulo'
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Descrição:
                        <textarea
                            name='descricao'
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Foto 1 URL:
                        <input
                            type='text'
                            name='caminhoFoto1'
                            value={formData.caminhoFoto1}
                            onChange={handleChange}
                            required
                        />
                        {formData.caminhoFoto1 && <img src={formData.caminhoFoto1} alt='Foto 1' className='modal-image' />}
                    </label>
                    <label>
                        Foto 2 URL:
                        <input
                            type='text'
                            name='caminhoFoto2'
                            value={formData.caminhoFoto2}
                            onChange={handleChange}
                        />
                        {formData.caminhoFoto2 && <img src={formData.caminhoFoto2} alt='Foto 2' className='modal-image' />}
                    </label>
                    <label>
                        Foto 3 URL:
                        <input
                            type='text'
                            name='caminhoFoto3'
                            value={formData.caminhoFoto3}
                            onChange={handleChange}
                        />
                        {formData.caminhoFoto3 && <img src={formData.caminhoFoto3} alt='Foto 3' className='modal-image' />}
                    </label>
                    <label>
                        Foto 4 URL:
                        <input
                            type='text'
                            name='caminhoFoto4'
                            value={formData.caminhoFoto4}
                            onChange={handleChange}
                        />
                        {formData.caminhoFoto4 && <img src={formData.caminhoFoto4} alt='Foto 4' className='modal-image' />}
                    </label>
                    <button type='submit'>Salvar</button>
                </form>
            </div>
        </div>
    );
}
