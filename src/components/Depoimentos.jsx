import React from "react";
import { Star } from "lucide-react";

function Depoimentos() {
  const depoimentos = [
    {
      nome: "Maria Santos",
      texto: "Excelente atendimento! Equipe muito atenciosa e profissional.",
    },
    {
      nome: "João Pedro",
      texto: "Clínica moderna e organizada. Recomendo!",
    },
    {
      nome: "Carla Oliveira",
      texto: "Melhor clínica da região. Sempre sou muito bem atendida.",
    },
    {
      nome: "Carlos Teixeira",
      texto: "Profissionais competentes e ambiente acolhedor.",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-24 bg-linear-to-b from-white via-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            O que nossos pacientes dizem
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Pacientes satisfeitos que encontraram cuidado humano e profissional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl bg-white/60 border border-white/60
                rounded-2xl p-8 shadow-lg
                hover:shadow-2xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={20}
                    className="fill-yellow-400 text-yellow-400 drop-shadow"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 italic leading-relaxed text-lg mb-6">
                “{dep.texto}”
              </p>

              {/* Rodapé: Avatar + Nome */}
              <div className="flex items-center gap-3">
                {/* avatar com inicial automática */}
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {dep.nome[0]}
                </div>

                <div className="font-semibold text-gray-900 text-lg">
                  {dep.nome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
