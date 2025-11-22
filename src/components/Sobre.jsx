// Importa o React e os ícones
import React from "react";
import { Award, Users, Heart, TrendingUp, Clock, Shield } from "lucide-react";
import ClinicaMedica from "../assets/images/sobre/clinica-vida.png";

// Componente da Seção Sobre
function Sobre() {
  // Dados dos diferenciais da clínica
  const diferenciais = [
    {
      icone: Award,
      titulo: "Excelência",
      descricao: "Profissionais altamente qualificados",
    },
    {
      icone: Users,
      titulo: "Experiência",
      descricao: "Mais de 15 anos no mercado",
    },
    { icone: Heart, titulo: "Cuidado", descricao: "Atendimento humanizado" },
    { icone: TrendingUp, titulo: "Inovação", descricao: "Tecnologia de ponta" },
  ];

  // Números da clínica
  const numeros = [
    { numero: "50.000+", label: "Pacientes Atendidos" },
    { numero: "15+", label: "Anos de Experiência" },
    { numero: "30+", label: "Profissionais" },
    { numero: "98%", label: "Satisfação" },
  ];

  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-linear-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="bg-blue-100 text-blue-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Sobre Nós
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Comprometidos com sua saúde
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Somos uma clínica médica dedicada a oferecer atendimento de
            excelência com tecnologia de ponta e equipe especializada
          </p>
        </div>

        {/* Grid principal - Texto + Imagem */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20 lg:mb-24">
          {/* Lado esquerdo - Conteúdo */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Nossa História
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Fundada em 2009, a Clínica Vida+ nasceu do sonho de oferecer
                    atendimento médico de qualidade, acessível e humanizado para
                    toda a família.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 p-3 rounded-xl shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Nossa Missão
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Proporcionar cuidados de saúde excepcionais, com respeito,
                    ética e dedicação, construindo relacionamentos duradouros
                    com nossos pacientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {diferenciais.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <item.icone className="text-blue-600 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">
                    {item.titulo}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado direito - Imagem decorativa */}
          <div className="relative">
            {/* Fundo decorativo 1 */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            {/* Fundo decorativo 2 */}
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Card principal com imagem */}
            <div className="relative bg-linear-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="space-y-6 sm:space-y-8">
                  {/* Placeholder para imagem - substitua por <img> */}
                  <img src={ClinicaMedica} alt="Clinica Médica" />

                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Estrutura Moderna
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Ambiente acolhedor e equipamentos de última geração
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de números - Destaque */}
        <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {numeros.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                  {item.numero}
                </div>
                <div className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animações CSS */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Sobre;
