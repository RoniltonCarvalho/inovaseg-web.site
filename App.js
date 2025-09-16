import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-gray-500 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400">InovaSeg</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Home</a></li>
            <li><a href="#empresa" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Empresa</a></li>
            <li><a href="#servicos" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Serviços</a></li>
            <li><a href="#contato" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-blue-900">
          <div className="text-center p-8 max-w-4xl">
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              Engenharia de Segurança do Trabalho & eSocial
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Conformidade, segurança e suporte especializado para sua empresa.
            </p>
            <a href="#contato" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Solicite uma Proposta
            </a>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pen text-3xl text-yellow-400"></i>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Conformidade eSocial</h3>
                <p className="text-gray-600">Assessoria completa para o envio correto dos eventos de SST no eSocial.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-3xl text-yellow-400"></i>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Redução de Acidentes</h3>
                <p className="text-gray-600">Implementamos medidas eficazes para minimizar riscos e acidentes de trabalho.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-3xl text-yellow-400"></i>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Suporte 24h</h3>
                <p className="text-gray-600">Equipe pronta para atender suas demandas a qualquer momento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Block Section */}
        <section id="empresa" className="py-16 bg-gray-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Conheça a Nossa Empresa</h2>
                <p className="text-lg text-gray-200 mb-6">
                  A InovaSeg é especializada em Engenharia de Segurança do Trabalho e consultoria eSocial. 
                  Oferecemos soluções completas para garantir a conformidade e segurança da sua empresa.
                </p>
                <ul className="text-gray-200 space-y-2">
                  <li>✓ Consultoria especializada em eSocial SST</li>
                  <li>✓ Treinamentos NR's certificados</li>
                  <li>✓ Gestão de riscos ocupacionais</li>
                  <li>✓ Suporte técnico contínuo</li>
                </ul>
              </div>
              <div className="relative">
                <img src="https://placehold.co/600x400/374151/e2e8f0?text=Laptop+Placeholder" alt="Laptop" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Models Section */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-500 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Consultoria SST</h3>
                <p className="text-gray-200 mb-6">Assessoria completa em Saúde e Segurança do Trabalho para sua empresa.</p>
                <a href="#contato" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg transition duration-300">
                  Saiba Mais
                </a>
              </div>
              <div className="bg-gray-500 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Treinamentos NR</h3>
                <p className="text-gray-200 mb-6">Cursos e capacitações conforme as Normas Regulamentadoras.</p>
                <a href="#contato" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg transition duration-300">
                  Saiba Mais
                </a>
              </div>
              <div className="bg-gray-500 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Gestão de Riscos</h3>
                <p className="text-gray-200 mb-6">Identificação, avaliação e controle de riscos ocupacionais.</p>
                <a href="#contato" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg transition duration-300">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 bg-blue-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Entre em Contato</h2>
            <div className="max-w-2xl mx-auto bg-gray-500 p-8 rounded-lg shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ronilton Nunes de Carvalho</h3>
                <p className="text-gray-200 mb-2">Engenheiro de Produção</p>
                <p className="text-gray-200 mb-4">Engenheiro de Segurança do Trabalho</p>
                <p className="text-yellow-400 font-semibold">CREA-BA nº 052107629-3</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">Nome</label>
                  <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400 text-white" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400 text-white" placeholder="seu.email@exemplo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">Mensagem</label>
                  <textarea id="message" name="message" rows="5" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400 text-white" placeholder="Descreva sua necessidade ou solicitação"></textarea>
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                    Enviar Mensagem
                  </button>
                  <a href="mailto:oesteengseg@gmail.com" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center">
                    <i className="fas fa-envelope mr-2"></i> Email
                  </a>
                  <a href="https://wa.me/351911997378" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center">
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 py-8 text-center text-white">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 InovaSeg. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
