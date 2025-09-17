import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Barra cinza topo */}
      <header className="bg-gray-300 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">InovaSeg</h1>
        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <a href="#home" className="hover:text-blue-800">Home</a>
          <a href="#empresa" className="hover:text-blue-800">Empresa</a>
          <a href="#servicos" className="hover:text-blue-800">Serviços</a>
          <a href="#contato" className="hover:text-blue-800">Contato</a>
        </nav>
      <header className="bg-gray-300 py-4 px-6 flex justify-between items-center">
  {/* Logo */}
  <img 
  src="/logo-inovaseg.jpg" 
  alt="InovaSeg Logo" 
  className="h-10"
/>

  {/* Menu */}
  <nav className="flex gap-6 text-sm font-semibold text-gray-700">
    <a href="#home" className="hover:text-blue-800">Home</a>
    <a href="#empresa" className="hover:text-blue-800">Empresa</a>
    <a href="#servicos" className="hover:text-blue-800">Serviços</a>
    <a href="#contato" className="hover:text-blue-800">Contato</a>
  </nav>
</header>

      {/* Hero Azul */}
      <section className="bg-blue-900 text-center py-16 px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Engenharia de Segurança do Trabalho & eSocial
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-100">
          Conformidade, segurança e suporte especializado para sua empresa.
        </p>
        <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-md shadow hover:bg-yellow-300">
          Solicite uma Proposta
        </button>
      </section>

      {/* 3 Caixas com ícones */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 bg-white text-center">
        {/* Item 1 */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <div className="h-20 w-20 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-file-alt text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Conformidade eSocial</h3>
          <p className="text-gray-600">
            Atendemos todas as exigências legais e normativas do eSocial.
          </p>
        </div>
        {/* Item 2 */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <div className="h-20 w-20 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-shield-alt text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Redução de Acidentes</h3>
          <p className="text-gray-600">
            Consultorias eficazes que reduzem riscos de trabalho.
          </p>
        </div>
        {/* Item 3 */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          <div className="h-20 w-20 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-headset text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Suporte 24h</h3>
          <p className="text-gray-600">
            Equipe técnica disponível para atendimento emergencial.
          </p>
        </div>
      </section>

      {/* Faixa Cinza com Notebook */}
      <section className="bg-gray-200 py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Engenharia especializada
          </h2>
          <p className="text-gray-700">
            Nossa equipe oferece treinamentos, consultorias e apoio técnico para garantir segurança e conformidade.
          </p>
        </div>
        <img
  src="/laptop-inovaseg.jpg"
  alt="Computador InovaSeg"
  className="rounded shadow-md"
/>
      </section>

    </div>
  );
}

export default App;
