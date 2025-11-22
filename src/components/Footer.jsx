// Importa o React e os ícones
import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

// Componente do Rodapé
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 md:py-20">
        {/* Grid com 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="bg-linear-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                Clínica Vida+
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Cuidando da sua saúde com excelência e dedicação há mais de 15
              anos.
            </p>
            {/* Redes Sociais */}
            <div>
              <h5 className="font-semibold text-sm sm:text-base mb-3">
                Redes Sociais
              </h5>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/fael.front/"
                  className="bg-white/10 hover:bg-pink-600 p-2.5 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafaelsfront/"
                  className="bg-white/10 hover:bg-blue-700 p-2.5 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.github.com/1faeell"
                  className="bg-white/10 hover:bg-gray-600 p-2.5 rounded-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Links Rápidos
            </h4>
            <div className="space-y-3">
              <a
                href="#inicio"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Sobre
              </a>
              <a
                href="#especialidades"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Especialidades
              </a>
              {/* <a
                href="#equipe"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Equipe
              </a> */}
              <a
                href="#depoimentos"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Depoimentos
              </a>
            </div>
          </div>

          {/* Coluna 3 - Horário */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Horário
            </h4>
            <div className="space-y-2.5 text-gray-400 text-sm sm:text-base">
              <div>Segunda a Sexta: 8h - 18h</div>
              <div>Sábado: 8h - 12h</div>
              <div>Domingo: Fechado</div>
            </div>
          </div>

          {/* Coluna 4 - Contato e Redes Sociais */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Contato
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <Phone size={18} className="shrink-0 text-blue-400" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <Mail size={18} className="shrink-0 text-cyan-400" />
                <span className="break-all">contato@clinicavida.com.br</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin size={18} className="shrink-0 text-purple-400 mt-0.5" />
                <span>
                  Av. Principal, 1000
                  <br />
                  São Paulo, SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior - Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 mb-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center mb-2">
            © 2025 Clínica Vida+. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Desenvolvido por{" "}
            <a
              href="https://portfolio-fael.vercel.app"
              className="font-bold text-blue-500 hover:underline"
            >
              Rafael S.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
