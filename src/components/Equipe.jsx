// ==================== IMPORTS ====================
import React from "react";
import { Star } from "lucide-react";

// Importa as imagens dos médicos
import draMariaImg from "../assets/images/medicos/dra-maria.png";
import draAnaImg from "../assets/images/medicos/dra-ana.png";
import drCarlosImg from "../assets/images/medicos/dr-carlos.png";
import drRobertoImg from "../assets/images/medicos/dr-roberto.png";

// ==================== COMPONENTE EQUIPE ====================
function Equipe() {
  // ==================== DADOS DOS MÉDICOS ====================
  const medicos = [
    {
      nome: "Dra. Maria Santos",
      especialidade: "Clinica Geral",
      crm: "CRM 23456",
      anosExperiencia: "14 anos",
      foto: draMariaImg,
    },
    {
      nome: "Dra. Ana Paula",
      especialidade: "Pediatra",
      crm: "CRM 67890",
      anosExperiencia: "12 anos",
      foto: draAnaImg,
    },
    {
      nome: "Dr. Carlos Silva",
      especialidade: "Cardiologista",
      crm: "CRM 12345",
      anosExperiencia: "18 anos",
      foto: drCarlosImg,
    },
    {
      nome: "Dr. Roberto Lima",
      especialidade: "Ortopedista",
      crm: "CRM 54321",
      anosExperiencia: "15 anos",
      foto: drRobertoImg,
    },
  ];

  return (
    <section
      id="equipe"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-linear-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* ==================== TÍTULO DA SEÇÃO ==================== */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossa Equipe
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-45 px-4">
            Profissionais dedicados à sua saúde
          </h2>
        </div>

        {/* ==================== GRID DE MÉDICOS ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-25 sm:gap-15 md:m-10 md:gap-25">
          {medicos.map((medico, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 pt-20 px-6 pb-6 overflow-visible"
            >
              {/* ==================== FOTO DO MÉDICO ==================== */}
              <div className="absolute -top-12 sm:-top-45 md:-top-30 left-1/2 transform -translate-x-1/2">
                <img
                  src={medico.foto}
                  alt={`Foto de ${medico.nome}`}
                  className="w-40 h-40 sm:w-106 sm:h-106 md:w-60 md:h-60 object-contain drop-shadow-xl"
                />
              </div>

              {/* ==================== INFORMAÇÕES DO MÉDICO ==================== */}
              <div className="text-center mt-8 p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {medico.nome}
                </h3>

                <div className="text-blue-600 font-semibold mb-2 text-base sm:text-lg">
                  {medico.especialidade}
                </div>

                <div className="text-gray-600 text-sm sm:text-base mb-4">
                  {medico.crm} • {medico.anosExperiencia} de experiência
                </div>

                {/* ==================== ESTRELAS ==================== */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;
