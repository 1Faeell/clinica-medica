// Importa o React e os ícones
import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

// Componente do cabeçalho
function Header() {
  // Controla se o menu mobile está aberto (true) ou fechado (false)
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo da clínica */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-blue-600">
              Clínica Vida+
            </span>
          </div>

          {/* Menu desktop - só aparece em telas grandes */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Especialidades
            </a>
            {/* <a
              href="#equipe"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Equipe
            </a> */}
            <a
              href="#depoimentos"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>

            {/* Botão agendar - só aparece em telas grandes */}
          </nav>
          <a href="#contato">
            <button className="cursor-pointer hidden md:block bg-blue-600 text-white px-6 lg:px-8 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
              Agendar Consulta
            </button>
          </a>
          {/* Botão do menu mobile - só aparece em telas pequenas */}
          <button
            className="md:hidden"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile - só aparece quando menuAberto é true */}
        {menuAberto && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a
              href="#inicio"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Especialidades
            </a>
            {/* <a
              href="#equipe"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Equipe
            </a> */}
            <a
              href="#depoimentos"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
