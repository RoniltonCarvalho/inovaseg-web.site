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
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">InovaSeg</h1>
            <p className="text-xl text-gray-300 mb-8">
              Conformidade, segurança e suporte especializado para sua empresa.
            </p>
            <a
              href="#contato"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition"
            >
              Solicite uma Proposta
            </a>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-pen text-3xl text-yellow-400"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Conformidade eSocial</h3>
            <p className="text-gray-600">Assessoria completa para envio correto dos eventos de SST no eSocial.</p>
          </div>
        </section>

        {/* Info Block Section */}
        <section id="empresa" className="py-16 bg-gray-500">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Conheça a Nossa Empresa</h2>
              <p className="text-lg text-gray-200 mb-6">
                A InovaSeg é especializada em Engenharia de Segurança do Trabalho e consultoria eSocial.
                Oferecemos soluções completas para garantir a conformidade e segurança da sua empresa.
              </p>
              <ul className="text-gray-200 space-y-2">
                <li>✔️ Consultoria especializada em eSocial SST</li>
                <li>✔️ Treinamentos NR’s e certificados</li>
                <li>✔️ Avaliação de riscos ocupacionais</li>
                <li>✔️ Suporte técnico contínuo</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/374151/e2e8f0?text=Laptop+Placeholder"
                alt="Laptop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-500 p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Consultoria SST</h3>
                <p className="text-gray-200 mb-6">
                  Assessoria completa em Saúde e Segurança do Trabalho para sua empresa.
                </p>
                <a
                  href="#contato"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg transition"
                >
                  Saiba Mais
                </a>
              </div>
              {/* Você pode repetir os cards para NR, Gestão de riscos, etc. */}
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-16 bg-blue-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Entre em Contato</h2>
            <form className="space-y-6 max-w-xl mx-auto bg-gray-500 p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">Nome</label>
                <input type="text" id="name" name="name" className="w-full p-3 rounded-lg border border-gray-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 rounded-lg border border-gray-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">Mensagem</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg border border-gray-700"></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 py-8 text-center text-white">
        <div className="container mx-auto px-6">
          <p>© 2025 InovaSeg. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
