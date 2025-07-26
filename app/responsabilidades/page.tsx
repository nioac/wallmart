'use client'

import { motion } from 'framer-motion'
import { Users, AlertTriangle, Scale, FileText, Target, Award, TrendingDown, Shield, UserCheck, Building, Truck, AlertCircle } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ChartComponent from '@/components/ChartComponent'
import MetricCard from '@/components/MetricCard'
import CodeBlock from '@/components/CodeBlock'

export default function ResponsabilidadesPage() {
  // Dados para gráficos de responsabilidades
  const responsibilityDistribution = {
    labels: ['Motoristas', 'Clientes', 'Sistema/Processo', 'Fornecedores', 'Outros'],
    datasets: [
      {
        data: [45, 30, 15, 8, 2],
        backgroundColor: [
          '#ff4757',
          '#ffa502',
          '#3742fa',
          '#2ed573',
          '#747d8c'
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  }

  const driverResponsibility = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Fraudes por Negligência',
        data: [23, 19, 25, 31, 28, 22],
        backgroundColor: 'rgba(255, 71, 87, 0.6)',
        borderColor: '#ff4757',
        borderWidth: 2,
      },
      {
        label: 'Fraudes Intencionais',
        data: [12, 15, 18, 22, 19, 16],
        backgroundColor: 'rgba(255, 165, 2, 0.6)',
        borderColor: '#ffa502',
        borderWidth: 2,
      },
    ],
  }

  const actionsTaken = {
    labels: ['Advertências', 'Suspensões', 'Demissões', 'Treinamentos', 'Monitoramento'],
    datasets: [
      {
        label: 'Ações Disciplinares',
        data: [45, 23, 12, 67, 89],
        backgroundColor: [
          '#ffa502',
          '#ff4757',
          '#2f3542',
          '#3742fa',
          '#2ed573'
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  }

  const responsibilityMatrix = [
    {
      category: 'Motoristas',
      percentage: 45,
      cases: 127,
      actions: [
        'Treinamento adicional em procedimentos',
        'Monitoramento intensivo por 30 dias',
        'Advertência formal registrada',
        'Suspensão temporária (casos graves)'
      ],
      prevention: [
        'Programa de conscientização',
        'Incentivos por performance',
        'Avaliação psicológica periódica',
        'Sistema de pontuação comportamental'
      ]
    },
    {
      category: 'Clientes',
      percentage: 30,
      cases: 85,
      actions: [
        'Investigação detalhada do histórico',
        'Bloqueio temporário da conta',
        'Exigência de documentação adicional',
        'Encaminhamento para autoridades'
      ],
      prevention: [
        'Verificação de identidade aprimorada',
        'Limite de pedidos para novos clientes',
        'Sistema de score de confiabilidade',
        'Validação de endereço obrigatória'
      ]
    },
    {
      category: 'Sistema/Processo',
      percentage: 15,
      cases: 42,
      actions: [
        'Correção de bugs identificados',
        'Atualização de procedimentos',
        'Melhoria na interface do sistema',
        'Implementação de novos controles'
      ],
      prevention: [
        'Testes automatizados mais rigorosos',
        'Revisão periódica de processos',
        'Feedback contínuo dos usuários',
        'Monitoramento de performance'
      ]
    },
    {
      category: 'Fornecedores',
      percentage: 8,
      cases: 23,
      actions: [
        'Revisão de contratos',
        'Auditoria de processos',
        'Penalidades contratuais',
        'Substituição de fornecedores'
      ],
      prevention: [
        'Due diligence mais rigorosa',
        'Cláusulas de compliance',
        'Monitoramento contínuo',
        'Diversificação de fornecedores'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Avaliação de Responsabilidades</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Análise detalhada das responsabilidades e ações corretivas para cada tipo de fraude
        </p>
      </motion.div>

      {/* Métricas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Casos Analisados"
          value="277"
          subtitle="Total de fraudes"
          icon={<FileText />}
          color="blue"
        />
        <MetricCard
          title="Ações Implementadas"
          value="156"
          subtitle="Medidas corretivas"
          icon={<Target />}
          color="green"
        />
        <MetricCard
          title="Taxa de Reincidência"
          value="12%"
          subtitle="Casos repetidos"
          icon={<TrendingDown />}
          color="red"
        />
        <MetricCard
          title="Eficácia das Ações"
          value="88%"
          subtitle="Sucesso das medidas"
          icon={<Award />}
          color="yellow"
        />
      </div>

      {/* Distribuição de Responsabilidades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.2}>
          <ChartComponent
            type="doughnut"
            data={responsibilityDistribution}
            title="Distribuição de Responsabilidades por Fraudes"
            height={350}
          />
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <h3 className="text-lg font-semibold text-walmart-blue mb-4">Resumo por Categoria</h3>
          <div className="space-y-4">
            {[
              { category: 'Motoristas', percentage: 45, cases: 127, color: 'bg-red-500' },
              { category: 'Clientes', percentage: 30, cases: 85, color: 'bg-orange-500' },
              { category: 'Sistema/Processo', percentage: 15, cases: 42, color: 'bg-blue-500' },
              { category: 'Fornecedores', percentage: 8, cases: 23, color: 'bg-green-500' },
              { category: 'Outros', percentage: 2, cases: 6, color: 'bg-gray-500' },
            ].map((item, index) => (
              <div key={item.category} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <span className="font-medium">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{item.percentage}%</div>
                  <div className="text-sm text-gray-600">{item.cases} casos</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>

      {/* Análise de Motoristas */}
      <AnimatedCard delay={0.4}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">👨‍💼 Análise Detalhada - Motoristas</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartComponent
            type="bar"
            data={driverResponsibility}
            title="Tipos de Fraude por Motoristas"
            height={300}
          />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-walmart-blue">Perfil dos Infratores</h3>
            <div className="space-y-3">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="font-semibold text-red-800">Alto Risco (23 motoristas)</h4>
                <p className="text-sm text-red-700">Múltiplas infrações, padrão sistemático</p>
                <p className="text-xs text-red-600 mt-1">Ação: Demissão imediata</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="font-semibold text-yellow-800">Médio Risco (45 motoristas)</h4>
                <p className="text-sm text-yellow-700">Infrações ocasionais, possível negligência</p>
                <p className="text-xs text-yellow-600 mt-1">Ação: Treinamento e monitoramento</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800">Baixo Risco (59 motoristas)</h4>
                <p className="text-sm text-blue-700">Infrações isoladas, erro humano</p>
                <p className="text-xs text-blue-600 mt-1">Ação: Advertência e orientação</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Ações Disciplinares */}
      <AnimatedCard delay={0.5}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">⚖️ Ações Disciplinares Implementadas</h2>
        <ChartComponent
          type="bar"
          data={actionsTaken}
          title="Distribuição de Ações Corretivas"
          height={350}
        />
      </AnimatedCard>

      {/* Matriz de Responsabilidades */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">📋 Matriz de Responsabilidades e Ações</h2>
        <div className="space-y-6">
          {responsibilityMatrix.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-walmart-blue flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  {item.category}
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-walmart-blue">{item.percentage}%</div>
                  <div className="text-sm text-gray-600">{item.cases} casos</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Ações Corretivas
                  </h4>
                  <ul className="space-y-2">
                    {item.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Medidas Preventivas
                  </h4>
                  <ul className="space-y-2">
                    {item.prevention.map((prevention, preventionIndex) => (
                      <li key={preventionIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                        <span className="text-sm text-gray-700">{prevention}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Resultados e Impacto */}
      <AnimatedCard delay={0.8}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">📈 Resultados das Ações Implementadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Redução de Fraudes</h3>
              <div className="text-3xl font-bold mb-2">67%</div>
              <p className="text-sm opacity-90">Diminuição após implementação das medidas</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Melhoria na Compliance</h3>
              <div className="text-3xl font-bold mb-2">94%</div>
              <p className="text-sm opacity-90">Motoristas em conformidade com procedimentos</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Satisfação do Cliente</h3>
              <div className="text-3xl font-bold mb-2">91%</div>
              <p className="text-sm opacity-90">Índice de satisfação com entregas</p>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}