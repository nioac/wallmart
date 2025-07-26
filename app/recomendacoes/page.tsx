'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, Users, Smartphone, Camera, Clock, Target, TrendingUp, DollarSign, Calendar, Star } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import MetricCard from '@/components/MetricCard'
import CodeBlock from '@/components/CodeBlock'
import ChartComponent from '@/components/ChartComponent'

export default function RecomendacoesPage() {
  const preventionStrategies = [
    {
      category: "Tecnológicas",
      icon: <Smartphone className="w-8 h-8" />,
      color: "blue",
      recommendations: [
        {
          title: "Sistema de Rastreamento GPS",
          description: "Monitoramento em tempo real das rotas de entrega",
          priority: "Alta",
          timeline: "3 meses",
          cost: "$$",
          impact: "Alto"
        },
        {
          title: "App Mobile para Motoristas",
          description: "Aplicativo com check-ins obrigatórios e fotos de entrega",
          priority: "Alta",
          timeline: "6 meses",
          cost: "$$$",
          impact: "Alto"
        },
        {
          title: "Biometria para Autenticação",
          description: "Identificação biométrica para acesso aos veículos",
          priority: "Média",
          timeline: "9 meses",
          cost: "$$$$",
          impact: "Médio"
        },
        {
          title: "IoT nos Veículos",
          description: "Sensores para monitorar abertura de compartimentos",
          priority: "Média",
          timeline: "12 meses",
          cost: "$$$",
          impact: "Alto"
        }
      ]
    },
    {
      category: "Processuais",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "green",
      recommendations: [
        {
          title: "Verificação Dupla",
          description: "Dois funcionários para conferência de itens valiosos",
          priority: "Alta",
          timeline: "1 mês",
          cost: "$",
          impact: "Alto"
        },
        {
          title: "Auditoria Aleatória",
          description: "Inspeções surpresa em 10% das entregas",
          priority: "Alta",
          timeline: "2 meses",
          cost: "$$",
          impact: "Alto"
        },
        {
          title: "Protocolo de Entrega Segura",
          description: "Procedimentos padronizados para itens de alto valor",
          priority: "Média",
          timeline: "1 mês",
          cost: "$",
          impact: "Médio"
        },
        {
          title: "Sistema de Pontuação",
          description: "Score de confiabilidade para motoristas e clientes",
          priority: "Média",
          timeline: "4 meses",
          cost: "$$",
          impact: "Alto"
        }
      ]
    },
    {
      category: "Humanas",
      icon: <Users className="w-8 h-8" />,
      color: "yellow",
      recommendations: [
        {
          title: "Treinamento Intensivo",
          description: "Programa de 40h sobre prevenção de fraudes",
          priority: "Alta",
          timeline: "2 meses",
          cost: "$$",
          impact: "Alto"
        },
        {
          title: "Programa de Incentivos",
          description: "Bonificação por entregas sem incidentes",
          priority: "Média",
          timeline: "3 meses",
          cost: "$$$",
          impact: "Médio"
        },
        {
          title: "Avaliação Psicológica",
          description: "Teste psicológico para novos motoristas",
          priority: "Baixa",
          timeline: "6 meses",
          cost: "$$",
          impact: "Médio"
        },
        {
          title: "Canal de Denúncias",
          description: "Sistema anônimo para reportar irregularidades",
          priority: "Alta",
          timeline: "1 mês",
          cost: "$",
          impact: "Alto"
        }
      ]
    }
  ]

  const implementationPlan = [
    {
      phase: "Fase 1 - Imediata (0-3 meses)",
      priority: "Crítica",
      items: [
        "Implementar verificação dupla para itens valiosos",
        "Criar canal de denúncias anônimo",
        "Iniciar programa de treinamento intensivo",
        "Estabelecer protocolo de entrega segura"
      ],
      budget: "$50,000",
      expectedReduction: "30%"
    },
    {
      phase: "Fase 2 - Curto Prazo (3-6 meses)",
      priority: "Alta",
      items: [
        "Desenvolver app mobile para motoristas",
        "Implementar sistema de rastreamento GPS",
        "Iniciar auditorias aleatórias",
        "Criar sistema de pontuação de confiabilidade"
      ],
      budget: "$200,000",
      expectedReduction: "50%"
    },
    {
      phase: "Fase 3 - Médio Prazo (6-12 meses)",
      priority: "Média",
      items: [
        "Instalar sensores IoT nos veículos",
        "Implementar programa de incentivos",
        "Adicionar biometria para autenticação",
        "Expandir para todas as regiões"
      ],
      budget: "$500,000",
      expectedReduction: "70%"
    }
  ]

  const preventionCode = `# Sistema de Prevenção de Fraudes
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import warnings

class FraudPreventionSystem:
    def __init__(self):
        self.risk_thresholds = {
            'driver_fraud_rate': 0.15,  # 15%
            'customer_fraud_rate': 0.10,  # 10%
            'high_value_threshold': 500,  # $500
            'suspicious_time_window': 2  # 2 horas
        }
        
    def assess_driver_risk(self, driver_id, historical_data):
        """Avalia o risco de um motorista específico"""
        driver_data = historical_data[
            historical_data['driver_id'] == driver_id
        ]
        
        if len(driver_data) < 10:  # Poucos dados
            return 'MEDIUM', 'Dados insuficientes'
        
        fraud_rate = driver_data['is_fraud'].mean()
        total_deliveries = len(driver_data)
        avg_delivery_time = driver_data['delivery_time'].mean()
        
        risk_factors = []
        
        if fraud_rate > self.risk_thresholds['driver_fraud_rate']:
            risk_factors.append(f'Alta taxa de fraude: {fraud_rate:.2%}')
        
        if avg_delivery_time > 120:  # > 2 horas
            risk_factors.append('Tempo de entrega acima da média')
        
        # Determinar nível de risco
        if len(risk_factors) >= 2:
            return 'HIGH', risk_factors
        elif len(risk_factors) == 1:
            return 'MEDIUM', risk_factors
        else:
            return 'LOW', ['Perfil normal']
    
    def real_time_monitoring(self, delivery_data):
        """Monitoramento em tempo real de entregas"""
        alerts = []
        
        # Verificar valor alto
        if delivery_data['order_amount'] > self.risk_thresholds['high_value_threshold']:
            alerts.append({
                'type': 'HIGH_VALUE',
                'message': f'Pedido de alto valor: ${delivery_data["order_amount"]}',
                'action': 'Verificação dupla obrigatória'
            })
        
        # Verificar horário suspeito
        delivery_hour = delivery_data['delivery_hour']
        if delivery_hour < 6 or delivery_hour > 22:
            alerts.append({
                'type': 'SUSPICIOUS_TIME',
                'message': f'Entrega em horário atípico: {delivery_hour}h',
                'action': 'Supervisão adicional'
            })
        
        # Verificar histórico do cliente
        customer_risk = self.assess_customer_risk(
            delivery_data['customer_id']
        )
        if customer_risk == 'HIGH':
            alerts.append({
                'type': 'HIGH_RISK_CUSTOMER',
                'message': 'Cliente com histórico de fraudes',
                'action': 'Documentação fotográfica obrigatória'
            })
        
        return alerts
    
    def generate_prevention_recommendations(self, analysis_results):
        """Gera recomendações baseadas na análise"""
        recommendations = []
        
        high_risk_drivers = analysis_results['high_risk_drivers']
        fraud_patterns = analysis_results['patterns']
        
        if len(high_risk_drivers) > 10:
            recommendations.append({
                'category': 'URGENT',
                'action': 'Treinamento emergencial para motoristas',
                'timeline': '1 semana',
                'priority': 'ALTA'
            })
        
        if fraud_patterns['peak_hour_frauds'] > 20:
            recommendations.append({
                'category': 'OPERATIONAL',
                'action': 'Aumentar supervisão no horário de pico',
                'timeline': '2 semanas',
                'priority': 'MÉDIA'
            })
        
        return recommendations

# Exemplo de uso
prevention_system = FraudPreventionSystem()

# Simular dados de entrega em tempo real
delivery = {
    'order_id': 'ORD123456',
    'driver_id': 'WDID10234',
    'customer_id': 'WCID5678',
    'order_amount': 750,
    'delivery_hour': 23,
    'region': 'Winter Park'
}

# Monitorar em tempo real
alerts = prevention_system.real_time_monitoring(delivery)
for alert in alerts:
    print(f"ALERTA: {alert['message']} - {alert['action']}")
`

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800 border-red-200'
      case 'Média': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Baixa': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCostIndicator = (cost: string) => {
    return cost.length // $ = 1, $$ = 2, etc.
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Recomendações Preventivas</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estratégias abrangentes para prevenção de fraudes e melhoria da segurança nas entregas
        </p>
      </motion.div>

      {/* Métricas de Impacto */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Redução Esperada"
          value="70%"
          subtitle="Nas fraudes"
          icon={<Target />}
          color="green"
        />
        <MetricCard
          title="ROI Projetado"
          value="450%"
          subtitle="Em 12 meses"
          icon={<CheckCircle />}
          color="blue"
        />
        <MetricCard
          title="Tempo de Implementação"
          value="12 meses"
          subtitle="Cronograma total"
          icon={<Clock />}
          color="yellow"
        />
        <MetricCard
          title="Investimento Total"
          value="$750K"
          subtitle="Orçamento necessário"
          icon={<Shield />}
          color="red"
        />
      </div>

      {/* Estratégias de Prevenção */}
      <div className="space-y-8">
        {preventionStrategies.map((strategy, strategyIndex) => (
          <AnimatedCard key={strategy.category} delay={0.2 + strategyIndex * 0.1}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-walmart-blue mb-2 flex items-center">
                <div className={`text-walmart-${strategy.color} mr-3`}>
                  {strategy.icon}
                </div>
                Recomendações {strategy.category}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategy.recommendations.map((rec, recIndex) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + strategyIndex * 0.1 + recIndex * 0.05 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-walmart-blue">{rec.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rec.priority)}`}>
                      {rec.priority}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{rec.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-500">Timeline:</span>
                      <div className="text-walmart-blue">{rec.timeline}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-500">Custo:</span>
                      <div className="text-walmart-blue">
                        {'$'.repeat(getCostIndicator(rec.cost))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-500">Impacto:</span>
                      <div className={`font-medium ${
                        rec.impact === 'Alto' ? 'text-green-600' : 
                        rec.impact === 'Médio' ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {rec.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Plano de Implementação */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">📅 Plano de Implementação</h2>
        <div className="space-y-6">
          {implementationPlan.map((phase, index) => (
            <div key={phase.phase} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-walmart-blue">{phase.phase}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{phase.budget}</div>
                  <div className="text-sm text-gray-600">Redução: {phase.expectedReduction}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Ações Principais:</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    phase.priority === 'Crítica' ? 'bg-red-100 text-red-800' :
                    phase.priority === 'Alta' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    Prioridade: {phase.priority}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Sistema de Prevenção */}
      <AnimatedCard delay={0.7}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🛡️ Sistema de Prevenção Automatizado</h2>
        <CodeBlock
          language="python"
          code={preventionCode}
          title="Implementação do Sistema de Prevenção em Tempo Real"
        />
      </AnimatedCard>

      {/* Benefícios Esperados */}
      <AnimatedCard delay={0.8}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">🎯 Benefícios Esperados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
              <Shield className="w-8 h-8 mx-auto mb-3 text-walmart-yellow" />
              <h3 className="font-semibold mb-2">Segurança</h3>
              <p className="text-sm opacity-90">Redução de 70% nas fraudes</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-walmart-yellow" />
              <h3 className="font-semibold mb-2">Confiança</h3>
              <p className="text-sm opacity-90">Maior satisfação dos clientes</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-walmart-yellow" />
              <h3 className="font-semibold mb-2">Eficiência</h3>
              <p className="text-sm opacity-90">Processos mais ágeis</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-walmart-yellow" />
              <h3 className="font-semibold mb-2">Compliance</h3>
              <p className="text-sm opacity-90">Conformidade total</p>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}