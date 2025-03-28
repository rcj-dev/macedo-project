import React, { useState } from 'react';
import LogoContato from '../assets/icons/logoContato.svg';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white w-full md:w-250 shadow-lg mb-12 border">

      <div className="w-full md:w-1/2 h-72 md:h-150 hidden md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.3914387112236!2d-43.8746512255661!3d-19.780994033684266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68557e05b59d3%3A0x3220afe520cc376e!2sMacedo%20Cl%C3%ADnicas%20%7C%20Dentista%20Santa%20Luzia!5e0!3m2!1spt-BR!2sbr!4v1743164176853!5m2!1spt-BR!2sbr"
          width="100%" 
          height="100%" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Formulário de contato */}
      <div className="flex flex-col justify-center items-center w-full p-4 md:w-1/2">
        <div className="flex flex-col justify-center items-center mb-6">
          <img src={LogoContato} alt="Logo Macedo Clínicas" className="w-32 mb-2" />
          <h3 className="text-xl font-semibold">Entre em contato!</h3>
          <span className="text-sm text-gray-600">Como podemos te ajudar hoje?</span>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="nome" className="mb-2">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="sobrenome" className="mb-2">Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full"
                placeholder="Seu sobrenome"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
              placeholder="Seu e-mail"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="mb-2">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
              placeholder="Seu telefone"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensagem" className="mb-2">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
              rows="4"
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
