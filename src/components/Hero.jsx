// ==================== IMPORTS ====================
import React from "react";
import { ChevronRight } from "lucide-react";
import heroImage from "../assets/images/image-hero.png";

// ==================== HERO ====================
const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-25 pb-15 px-6 md:px-10 flex justify-center"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-5 max-lg:justify-center items-center max-w-7xl">
        {/* ==================== ESQUERDA ==================== */}
        <div className="space-y-6 text-left max-lg:text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Sua saúde em primeiro lugar
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Cuidando de você{" "}
            <span className="block">
              com
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                excelência
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            Atendimento médico de qualidade com profissionais especializados e
            tecnologia de ponta.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-start max-lg:justify-center gap-4">
            <button className="max-sm:w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Agende sua consulta
              <ChevronRight size={20} />
            </button>

            <button className="max-sm:w-full border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all">
              Conheça a clínica
            </button>
          </div>

          {/* ESTATÍSTICAS */}
          <div className="flex justify-start max-lg:justify-center gap-8 pt-4 flex-wrap">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50k+</div>
              <div className="text-gray-600">Pacientes atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>

        {/* ==================== DIREITA - IMAGEM ==================== */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Médica especialista"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
