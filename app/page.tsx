export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          🛒 Sistema de Detecção de Fraudes - Walmart
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Análise inteligente para prevenção de fraudes em entregas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Fraudes Detectadas</h3>
          <p className="text-3xl font-bold text-red-600">1,247</p>
          <p className="text-sm text-gray-500">↑ 12% este mês</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Entregas Seguras</h3>
          <p className="text-3xl font-bold text-green-600">98,753</p>
          <p className="text-sm text-gray-500">↑ 5% este mês</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Taxa de Precisão</h3>
          <p className="text-3xl font-bold text-blue-600">94.2%</p>
          <p className="text-sm text-gray-500">↑ 2.1% este mês</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Economia Gerada</h3>
          <p className="text-3xl font-bold text-yellow-600">R$ 2.1M</p>
          <p className="text-sm text-gray-500">↑ 18% este mês</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Visão Geral do Projeto</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <span>Análise de dados de entregas e comportamento</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span>Modelos de Machine Learning para detecção</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              <span>Sistema de alertas em tempo real</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              <span>Dashboard de monitoramento</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Principais Resultados</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Redução de Fraudes</h3>
              <p className="text-gray-600">Diminuição de 35% nas fraudes detectadas</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Economia Anual</h3>
              <p className="text-gray-600">R$ 12.5 milhões economizados</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Tempo de Resposta</h3>
              <p className="text-gray-600">Detecção em menos de 2 segundos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">🚀 Navegue pelas Análises</h2>
        <p className="mb-6">Explore todas as etapas do projeto de detecção de fraudes:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mb-2">📋</div>
            <span className="text-sm">Definição do Problema</span>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mb-2">📊</div>
            <span className="text-sm">Análise de Dados</span>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mb-2">🔍</div>
            <span className="text-sm">Detecção de Padrões</span>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mb-2">🧠</div>
            <span className="text-sm">Modelagem ML</span>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mb-2">📈</div>
            <span className="text-sm">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  )
}