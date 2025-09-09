import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        Ensine seu filho a confiar em Deus mesmo nos momentos difíceis!
      </h1>

      <p className="text-lg text-center text-gray-700 max-w-2xl mb-8">
        Um devocional infantil inspirado na história de <strong>Jó</strong>, com lições de fé, perseverança e confiança no Senhor.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="rounded-2xl shadow-lg border border-blue-200 p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">O que seu filho vai aprender</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Que Deus nunca nos abandona</li>
            <li>A importância de ser fiel mesmo quando as coisas não vão bem</li>
            <li>A ter esperança e fé em todas as circunstâncias</li>
            <li>Compreensão prática através de atividades digitais interativas</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-lg border border-red-200 p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4">Para quem é esse devocional</h2>
          <p className="text-gray-700 mb-2">✔ Crianças de 6 a 12 anos</p>
          <p className="text-gray-700">✔ Pais e professores que querem ensinar a Bíblia de forma simples e envolvente</p>
        </div>
      </div>

      <div className="mt-8 max-w-3xl rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Atividade Interativa</h2>
        <p className="text-gray-700 mb-4">
          Uma versão digital e interativa da história de Jó para as crianças explorarem, com perguntas, jogos simples e reflexões bíblicas.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-red-700 transition">
          Experimentar a Atividade
        </button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Adquira agora o Devocional Infantil "Aprendendo com Jó" por apenas <span className="text-red-600">R$9,90</span>!
        </p>
        <button className="bg-red-600 text-white px-8 py-4 text-lg rounded-2xl shadow hover:bg-red-700 transition">
          Quero o devocional agora!
        </button>
      </div>
    </div>
  );
}

export default App;
