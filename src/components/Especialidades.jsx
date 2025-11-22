// ==================== IMPORTS ====================
import React, { useState } from "react";
import {
  Heart,
  Stethoscope,
  Users,
  Shield,
  ChevronRight,
  X,
} from "lucide-react";
import cardiologiaImg from "../assets/images/especialidades/cardiologia.jpg";
import clinicaGeralImg from "../assets/images/especialidades/clinica-geral.jpg";
import pediatriaImg from "../assets/images/especialidades/pediatria.jpeg";
import ortopediaImg from "../assets/images/especialidades/ortopedia.jpg";

// ==================== COMPONENTE ESPECIALIDADES ====================
function Especialidades() {
  // Estado para controlar qual especialidade está aberta no modal
  const [modalAberto, setModalAberto] = useState(false);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] =
    useState(null);

  // Lista completa de especialidades com informações detalhadas
  const listaEspecialidades = [
    {
      nome: "Clínica Geral",
      icone: Stethoscope,
      imagem: clinicaGeralImg,
      descricao: "Atendimento completo para toda família",
      descricaoCompleta:
        "O clínico geral é o primeiro contato para cuidados de saúde, realizando diagnósticos iniciais, tratamentos de doenças comuns e encaminhamentos quando necessário. Atendemos pacientes de todas as idades com foco na prevenção e promoção da saúde, realizando exames de rotina, acompanhamento de doenças crônicas e orientações sobre estilo de vida saudável.",
      profissional: "Dra. Maria Santos",
      crm: "CRM 23456-SP",
      experiencia: "20 anos de experiência",
      atendimentos: [
        "Consultas de rotina",
        "Check-up completo",
        "Tratamento de gripes e resfriados",
        "Acompanhamento de doenças crônicas",
        "Prescrição de medicamentos",
        "Orientação nutricional básica",
      ],
    },
    {
      nome: "Pediatria",
      icone: Users,
      imagem: pediatriaImg,
      descricao: "Cuidado dedicado às crianças",
      descricaoCompleta:
        "Nossa pediatria acompanha o crescimento e desenvolvimento infantil desde o nascimento até a adolescência. Oferecemos consultas de puericultura, vacinação, diagnóstico e tratamento de doenças infantis, orientação aos pais sobre alimentação, sono e desenvolvimento. Ambiente acolhedor e profissionais especializados no cuidado com os pequenos.",
      profissional: "Dra. Ana Paula",
      crm: "CRM 67890-SP",
      experiencia: "12 anos de experiência",
      atendimentos: [
        "Consultas de puericultura",
        "Acompanhamento do desenvolvimento",
        "Vacinação infantil",
        "Tratamento de doenças comuns",
        "Orientação sobre amamentação",
        "Avaliação nutricional infantil",
      ],
    },
    {
      nome: "Cardiologia",
      icone: Heart,
      imagem: cardiologiaImg,
      descricao: "Cuidados especializados para seu coração",
      descricaoCompleta:
        "Nossa equipe de cardiologia oferece diagnóstico e tratamento completo para doenças cardiovasculares. Realizamos consultas, exames como eletrocardiograma, ecocardiograma, teste ergométrico e monitoramento cardíaco. Cuidamos da prevenção, diagnóstico e tratamento de hipertensão, arritmias, insuficiência cardíaca e outras patologias do coração.",
      profissional: "Dr. Carlos Silva",
      crm: "CRM 12345-SP",
      experiencia: "15 anos de experiência",
      atendimentos: [
        "Consultas cardiológicas",
        "Eletrocardiograma",
        "Ecocardiograma",
        "Teste ergométrico",
        "Holter 24h",
        "Check-up cardiovascular",
      ],
    },
    {
      nome: "Ortopedia",
      icone: Shield,
      imagem: ortopediaImg,
      descricao: "Tratamento de ossos e articulações",
      descricaoCompleta:
        "Especialidade dedicada ao diagnóstico e tratamento de problemas do sistema musculoesquelético. Tratamos fraturas, lesões esportivas, dores articulares, problemas de coluna, artrose e outras patologias ósseas e articulares. Oferecemos desde tratamento conservador até indicação cirúrgica quando necessário, sempre buscando a melhor recuperação do paciente.",
      profissional: "Dr. Roberto Lima",
      crm: "CRM 54321-SP",
      experiencia: "18 anos de experiência",
      atendimentos: [
        "Consultas ortopédicas",
        "Tratamento de fraturas",
        "Lesões esportivas",
        "Dores na coluna",
        "Problemas articulares",
        "Infiltrações",
      ],
    },
  ];

  // Função para abrir o modal com a especialidade selecionada
  function abrirModal(especialidade) {
    setEspecialidadeSelecionada(especialidade);
    setModalAberto(true);
  }

  // Função para fechar o modal
  function fecharModal() {
    setModalAberto(false);
    setEspecialidadeSelecionada(null);
    // Restaura o scroll da página
    document.body.style.overflow = "unset";
  }

  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ==================== TÍTULO DA SEÇÃO ==================== */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossas Especialidades
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cuidado completo para sua saúde
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de especialidades médicas com
            profissionais preparados para atender você e sua família.
          </p>
        </div>

        {/* ==================== GRID ==================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {listaEspecialidades.map((esp, index) => (
            <div
              key={index}
              onClick={() => abrirModal(esp)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* ==================== IMAGEM ==================== */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={esp.imagem}
                  alt={esp.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* overlay escuro para contraste */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
                {/* ÍCONE SOBRE A IMAGEM */}
                <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-xl shadow-lg">
                  <esp.icone className="text-white" size={30} />
                </div>
              </div>
              {/* ==================== CONTEÚDO ==================== */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{esp.nome}</h3>
                <p className="text-gray-600">{esp.descricao}</p>
                {/* LINK/CTA */}
                <div className="pt-2 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== MODAL ==================== */}
      {modalAberto && especialidadeSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Overlay/Fundo escuro */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={fecharModal}
          ></div>

          {/* Conteúdo do Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Botão fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Fechar"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Header com imagem */}
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
              <img
                src={especialidadeSelecionada.imagem}
                alt={especialidadeSelecionada.nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 sm:left-8">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg inline-block mb-4">
                  <especialidadeSelecionada.icone
                    className="text-white"
                    size={40}
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {especialidadeSelecionada.nome}
                </h2>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Descrição completa */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sobre a Especialidade
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {especialidadeSelecionada.descricaoCompleta}
                </p>
              </div>

              {/* Profissional responsável */}
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Profissional Responsável
                </h3>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Users className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {especialidadeSelecionada.profissional}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-1">
                      {especialidadeSelecionada.crm}
                    </p>
                    <p className="text-gray-600">
                      {especialidadeSelecionada.experiencia}
                    </p>
                  </div>
                </div>
              </div>

              {/* Atendimentos oferecidos */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Atendimentos Oferecidos
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {especialidadeSelecionada.atendimentos.map(
                    (atendimento, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                        <span>{atendimento}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Botão de ação */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contato"
                  onClick={fecharModal}
                  className="flex-1 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all text-center"
                >
                  Agendar Consulta
                </a>
                <button
                  onClick={fecharModal}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== ESTILOS DAS ANIMAÇÕES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Especialidades;
