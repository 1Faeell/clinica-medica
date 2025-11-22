// Importa o React, useState e os ícones
import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Clock } from "lucide-react";

// Componente do Formulário de Agendamento
function FormularioAgendamento() {
  // Estado que guarda os valores digitados no formulário
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    especialidade: "",
    data: "",
    hora: "",
    mensagem: "",
  });

  // Estado para mensagens de erro
  const [erros, setErros] = useState({});

  // Função para validar o formulário
  function validarFormulario() {
    const novosErros = {};

    // Valida nome (mínimo 3 caracteres)
    if (!dados.nome || dados.nome.trim().length < 3) {
      novosErros.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!dados.email || !emailRegex.test(dados.email)) {
      novosErros.email = "Email inválido";
    }

    // Valida telefone (formato básico)
    const telefoneRegex = /^[\d\s\-()]+$/;
    if (
      !dados.telefone ||
      dados.telefone.length < 10 ||
      !telefoneRegex.test(dados.telefone)
    ) {
      novosErros.telefone = "Telefone inválido (mínimo 10 dígitos)";
    }

    // Valida especialidade
    if (!dados.especialidade) {
      novosErros.especialidade = "Selecione uma especialidade";
    }

    // Valida data
    if (!dados.data) {
      novosErros.data = "Selecione uma data";
    } else {
      // Verifica se a data não é no passado
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const dataSelecionada = new Date(dados.data + "T00:00:00");

      if (dataSelecionada < hoje) {
        novosErros.data = "Data não pode ser no passado";
      }
    }

    // Valida hora
    if (!dados.hora) {
      novosErros.hora = "Selecione um horário";
    }

    return novosErros;
  }

  // Função executada quando clica em "Agendar Consulta"
  function enviar() {
    // Valida o formulário
    const errosValidacao = validarFormulario();

    // Se houver erros, atualiza o estado e não envia
    if (Object.keys(errosValidacao).length > 0) {
      setErros(errosValidacao);
      alert("Por favor, corrija os erros no formulário antes de enviar.");
      return;
    }

    // Se passou na validação, envia
    alert(
      `Agendamento solicitado com sucesso!\n\nDados:\nNome: ${dados.nome}\nEmail: ${dados.email}\nTelefone: ${dados.telefone}\nEspecialidade: ${dados.especialidade}\nData: ${dados.data}\nHora: ${dados.hora}\n\nEntraremos em contato em breve.`
    );

    // Limpa o formulário e os erros
    setDados({
      nome: "",
      email: "",
      telefone: "",
      especialidade: "",
      data: "",
      hora: "",
      mensagem: "",
    });
    setErros({});
  }

  // Função para atualizar um campo específico
  function atualizar(campo, valor) {
    setDados({ ...dados, [campo]: valor });
    // Remove o erro do campo quando o usuário começa a digitar
    if (erros[campo]) {
      setErros({ ...erros, [campo]: "" });
    }
  }

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Lado esquerdo - Informações */}
            <div className="lg:col-span-2 bg-linear-to-br from-blue-600 to-blue-800 p-8 sm:p-10 md:p-12 lg:p-14 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Agende sua consulta
              </h3>
              <p className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg leading-relaxed">
                Preencha o formulário e entraremos em contato para confirmar seu
                agendamento.
              </p>

              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                {/* Telefone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg mb-1">
                      Telefone
                    </div>
                    <div className="text-sm sm:text-base text-white/90">
                      (11) 3456-7890
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg mb-1">
                      Email
                    </div>
                    <div className="text-sm sm:text-base text-white/90 break-all">
                      contato@clinicavida.com.br
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg mb-1">
                      Endereço
                    </div>
                    <div className="text-sm sm:text-base text-white/90">
                      Av. Principal, 1000 - São Paulo, SP
                    </div>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg mb-2">
                      Horário de Funcionamento
                    </div>
                    <div className="text-sm sm:text-base text-white/90 space-y-1">
                      <div>Segunda a Sexta: 8h - 18h</div>
                      <div>Sábado: 8h - 12h</div>
                      <div>Domingo: Fechado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado direito - Formulário */}
            <div className="lg:col-span-3 p-8 sm:p-10 md:p-12 lg:p-14">
              <div className="space-y-5 sm:space-y-6">
                {/* Campo Nome */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={dados.nome}
                    onChange={(e) => atualizar("nome", e.target.value)}
                    className={`w-full px-4 py-3 sm:py-3.5 border ${
                      erros.nome ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                  />
                  {erros.nome && (
                    <p className="text-red-500 text-sm mt-1">{erros.nome}</p>
                  )}
                </div>

                {/* Grid - Email e Telefone lado a lado em telas maiores */}
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Campo Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={dados.email}
                      onChange={(e) => atualizar("email", e.target.value)}
                      className={`w-full px-4 py-3 sm:py-3.5 border ${
                        erros.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                    />
                    {erros.email && (
                      <p className="text-red-500 text-sm mt-1">{erros.email}</p>
                    )}
                  </div>

                  {/* Campo Telefone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={dados.telefone}
                      onChange={(e) => atualizar("telefone", e.target.value)}
                      className={`w-full px-4 py-3 sm:py-3.5 border ${
                        erros.telefone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                    />
                    {erros.telefone && (
                      <p className="text-red-500 text-sm mt-1">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Campo Especialidade */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Especialidade *
                  </label>
                  <select
                    value={dados.especialidade}
                    onChange={(e) => atualizar("especialidade", e.target.value)}
                    className={`w-full px-4 py-3 sm:py-3.5 border ${
                      erros.especialidade ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                  >
                    <option value="">Escolha a especialidade</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="geral">Clínica Geral</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="ortopedia">Ortopedia</option>
                  </select>
                  {erros.especialidade && (
                    <p className="text-red-500 text-sm mt-1">
                      {erros.especialidade}
                    </p>
                  )}
                </div>

                {/* Grid - Data e Hora lado a lado */}
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data *
                    </label>
                    <input
                      type="date"
                      value={dados.data}
                      onChange={(e) => atualizar("data", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3 sm:py-3.5 border ${
                        erros.data ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                    />
                    {erros.data && (
                      <p className="text-red-500 text-sm mt-1">{erros.data}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Horário *
                    </label>
                    <input
                      type="time"
                      value={dados.hora}
                      onChange={(e) => atualizar("hora", e.target.value)}
                      min="08:00"
                      max="18:00"
                      className={`w-full px-4 py-3 sm:py-3.5 border ${
                        erros.hora ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base transition-all`}
                    />
                    {erros.hora && (
                      <p className="text-red-500 text-sm mt-1">{erros.hora}</p>
                    )}
                  </div>
                </div>

                {/* Campo Mensagem */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    value={dados.mensagem}
                    onChange={(e) => atualizar("mensagem", e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base resize-none transition-all"
                  ></textarea>
                </div>

                {/* Botão Enviar */}
                <button
                  onClick={enviar}
                  className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-4 sm:py-4.5 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Agendar Consulta <CheckCircle size={20} />
                </button>

                <p className="text-gray-500 text-xs sm:text-sm text-center">
                  * Campos obrigatórios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioAgendamento;
