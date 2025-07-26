'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Definição do Problema', href: '/problema' },
  { name: 'Dados Utilizados', href: '/dados' },
  { name: 'Análise Exploratória (EDA)', href: '/eda' },
  { name: 'Detecção de Padrões', href: '/padroes' },
  { name: 'Modelagem Preditiva', href: '/modelagem' },
  { name: 'Avaliação de Responsabilidades', href: '/responsabilidades' },
  { name: 'Recomendações Preventivas', href: '/recomendacoes' },
  { name: 'Melhoria dos Dados', href: '/melhorias' },
  { name: 'Dashboard de Monitoramento', href: '/dashboard' },
  { name: 'Conclusão Final', href: '/conclusao' },
  { name: 'Considerações Finais', href: '/consideracoes' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-blue-800 text-white shadow-lg z-50">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-blue-800 font-bold text-xl">W</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Walmart</h1>
            <p className="text-sm text-blue-200">Detecção de Fraudes</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-yellow-400 text-blue-800 font-medium' 
                    : 'hover:bg-blue-700 text-blue-100'
                }`}
              >
                <span className="text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}