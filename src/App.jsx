// Importa o React e todos os componentes
// import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Especialidades from "./components/Especialidades.jsx";
import Sobre from "./components/Sobre.jsx";
import Equipe from "./components/Equipe.jsx";
import Depoimentos from "./components/Depoimentos.jsx";
import FormularioAgendamento from "./components/FormularioAgendamento.jsx";
import Footer from "./components/Footer.jsx";

// Componente principal que junta tudo
function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] scroll-smooth">
      <Header />
      <Hero />
      <Sobre />
      <Especialidades />
      <Equipe />
      <Depoimentos />
      <FormularioAgendamento />
      <Footer />
    </div>
  );
}

export default App;
