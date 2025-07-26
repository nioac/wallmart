import './globals.css'

export const metadata = {
  title: 'Detecção de Fraudes - Walmart',
  description: 'Sistema de detecção e prevenção de fraudes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-gray-50">
          <div className="flex">
            {/* Sidebar simples */}
            <div className="w-64 bg-blue-900 text-white min-h-screen p-4">
              <h1 className="text-xl font-bold mb-8">Walmart Fraudes</h1>
              <nav>
                <a href="/" className="block py-2 px-4 hover:bg-blue-800 rounded">🏠 Home</a>
                <a href="/problema" className="block py-2 px-4 hover:bg-blue-800 rounded">❗ Problema</a>
                <a href="/dados" className="block py-2 px-4 hover:bg-blue-800 rounded">📊 Dados</a>
                <a href="/melhorias" className="block py-2 px-4 hover:bg-blue-800 rounded">📈 Melhorias</a>
                <a href="/eda" className="block py-2 px-4 hover:bg-blue-800 rounded">🔍 EDA</a>
                <a href="/padroes" className="block py-2 px-4 hover:bg-blue-800 rounded">🎯 Padrões</a>
                <a href="/metodologia" className="block py-2 px-4 hover:bg-blue-800 rounded">🔬 Metodologia</a>
                <a href="/modelagem" className="block py-2 px-4 hover:bg-blue-800 rounded">🤖 Modelagem</a>
                <a href="/resultados" className="block py-2 px-4 hover:bg-blue-800 rounded">📊 Resultados</a>
                <a href="/implementacao" className="block py-2 px-4 hover:bg-blue-800 rounded">🚀 Implementação</a>
                <a href="/responsabilidades" className="block py-2 px-4 hover:bg-blue-800 rounded">👥 Responsabilidades</a>
                <a href="/recomendacoes" className="block py-2 px-4 hover:bg-blue-800 rounded">💡 Recomendações</a>
                <a href="/dashboard" className="block py-2 px-4 hover:bg-blue-800 rounded">📈 Dashboard</a>
                <a href="/conclusao" className="block py-2 px-4 hover:bg-blue-800 rounded">✅ Conclusão</a>
              </nav>
            </div>
            
            {/* Conteúdo principal */}
            <main className="flex-1 p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}