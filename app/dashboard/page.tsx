'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Monitor, AlertTriangle, TrendingUp, Users, Package, Clock, Filter } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ChartComponent from '@/components/ChartComponent'
import MetricCard from '@/components/MetricCard'

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('24h')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [realTimeData, setRealTimeData] = useState({
    fraudsDetected: 23,
    totalOrders: 1847,
    avgResponseTime: 45,
    activeDrivers: 156
  })

  // Simular dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        fraudsDetected: prev.fraudsDetected + Math.floor(Math.random() * 3),
        totalOrders: prev.totalOrders + Math.floor(Math.random() * 10),
        avgResponseTime: 40 + Math.floor(Math.random() * 20),
        activeDrivers: 150 + Math.floor(Math.random() * 20)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Dados para gráficos em tempo real
  const fraudsOverTime = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: 'Fraudes Detectadas',
        data: [2, 1, 4, 8, 12, 18, 15],
        backgroundColor: 'rgba(255, 194, 32, 0.2)',
        borderColor: '#ffc220',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Threshold de Alerta',
        data: [10, 10, 10, 10, 10, 10, 10],
        backgroundColor: 'transparent',
        borderColor: '#ff4757',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
      },
    ],
  }

  const regionDistribution = {
    labels: ['Winter Park', 'Altamonte Springs', 'Orlando', 'Kissimmee', 'Sanford', 'Clermont'],
    datasets: [
      {
        data: [28, 22, 18, 15, 12, 5],
        backgroundColor: [
          '#004c91',
          '#0071ce',
          '#ffc220',
          '#ffde00',
          '#5a5a5a',
          '#f7f7f7'
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  }

  const driverRiskScore = {
    labels: ['Baixo Risco', 'Médio Risco', 'Alto Risco', 'Crítico'],
    datasets: [
      {
        label: 'Número de Motoristas',
        data: [892, 234, 89, 32],
        backgroundColor: ['#51cf66', '#ffc220', '#ff8c42', '#ff4757'],
        borderColor: '#004c91',
        borderWidth: 1,
      },
    ],
  }

  const alertsData = [
    { id: 1, type: 'high', message: 'Motorista WDID10234 - 3 fraudes nas últimas 2h', time: '2 min atrás' },
    { id: 2, type: 'medium', message: 'Região Winter Park - Aumento de 25% em fraudes', time: '15 min atrás' },
    { id: 3, type: 'low', message: 'Cliente WCID5678 - Padrão suspeito detectado', time: '32 min atrás' },
    { id: 4, type: 'high', message: 'Produto categoria eletrônicos - Pico de fraudes', time: '45 min atrás' },
  ]

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'high': return 'bg-red-100 border-red-500 text-red-700'
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-700'
      case 'low': return 'bg-blue-100 border-blue-500 text-blue-700'
      default: return 'bg-gray-100 border-gray-500 text-gray-700'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-walmart-blue mb-2">Dashboard de Monitoramento</h1>
          <p className="text-xl text-gray-600">
            Monitoramento em tempo real do sistema de detecção de fraudes
          </p>
        </div>
        <div className="flex space-x-4">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue"
          >
            <option value="1h">Última Hora</option>
            <option value="24h">Últimas 24h</option>
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
          </select>
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue"
          >
            <option value="all">Todas as Regiões</option>
            <option value="winter-park">Winter Park</option>
            <option value="altamonte">Altamonte Springs</option>
            <option value="orlando">Orlando</option>
          </select>
        </div>
      </motion.div>

      {/* KPIs em Tempo Real */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          key={realTimeData.fraudsDetected}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          <MetricCard
            title="Fraudes Detectadas"
            value={realTimeData.fraudsDetected}
            subtitle="Últimas 24h"
            icon={<AlertTriangle />}
            color="red"
          />
        </motion.div>
        <MetricCard
          title="Total de Pedidos"
          value={realTimeData.totalOrders.toLocaleString()}
          subtitle="Últimas 24h"
          icon={<Package />}
          color="blue"
        />
        <MetricCard
          title="Tempo de Resposta"
          value={`${realTimeData.avgResponseTime}ms`}
          subtitle="Média atual"
          icon={<Clock />}
          color="green"
        />
        <MetricCard
          title="Motoristas Ativos"
          value={realTimeData.activeDrivers}
          subtitle="Agora"
          icon={<Users />}
          color="yellow"
        />
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.2}>
          <ChartComponent
            type="line"
            data={fraudsOverTime}
            title="Fraudes Detectadas ao Longo do Dia"
            height={350}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Número de Fraudes'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'top' as const,
                }
              }
            }}
          />
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <ChartComponent
            type="doughnut"
            data={regionDistribution}
            title="Distribuição de Fraudes por Região"
            height={350}
          />
        </AnimatedCard>
      </div>

      {/* Análise de Risco e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.4}>
          <ChartComponent
            type="bar"
            data={driverRiskScore}
            title="Classificação de Risco dos Motoristas"
            height={350}
          />
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <div className="h-[350px] overflow-y-auto">
            <h3 className="text-lg font-bold text-walmart-blue mb-4 flex items-center">
              <AlertTriangle className="mr-2" size={20} />
              Alertas Recentes
            </h3>
            <div className="space-y-3">
              {alertsData.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 border-l-4 rounded-r-lg ${getAlertColor(alert.type)}`}
                >
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm opacity-75 mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Tabela de Monitoramento Detalhado */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Monitoramento Detalhado</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-walmart-blue text-white">
                <th className="px-4 py-3 text-left">Motorista</th>
                <th className="px-4 py-3 text-left">Região</th>
                <th className="px-4 py-3 text-left">Entregas Hoje</th>
                <th className="px-4 py-3 text-left">Fraudes</th>
                <th className="px-4 py-3 text-left">Score de Risco</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'WDID10234', region: 'Winter Park', deliveries: 23, frauds: 3, risk: 85, status: 'Crítico' },
                { id: 'WDID10567', region: 'Orlando', deliveries: 18, frauds: 1, risk: 45, status: 'Médio' },
                { id: 'WDID10890', region: 'Sanford', deliveries: 31, frauds: 0, risk: 15, status: 'Baixo' },
                { id: 'WDID10123', region: 'Kissimmee', deliveries: 27, frauds: 2, risk: 65, status: 'Alto' },
                { id: 'WDID10456', region: 'Clermont', deliveries: 19, frauds: 0, risk: 20, status: 'Baixo' },
              ].map((driver, index) => (
                <tr key={driver.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium">{driver.id}</td>
                  <td className="px-4 py-3">{driver.region}</td>
                  <td className="px-4 py-3">{driver.deliveries}</td>
                  <td className="px-4 py-3">{driver.frauds}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            driver.risk >= 70 ? 'bg-red-500' : 
                            driver.risk >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${driver.risk}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{driver.risk}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      driver.status === 'Crítico' ? 'bg-red-100 text-red-800' :
                      driver.status === 'Alto' ? 'bg-orange-100 text-orange-800' :
                      driver.status === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {driver.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>

      {/* Ações Recomendadas */}
      <AnimatedCard delay={0.7}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Ações Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Imediatas</h3>
              <ul className="text-sm space-y-1">
                <li>• Investigar motorista WDID10234</li>
                <li>• Revisar entregas em Winter Park</li>
                <li>• Ativar protocolo de segurança</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Curto Prazo</h3>
              <ul className="text-sm space-y-1">
                <li>• Retreinar modelo com novos dados</li>
                <li>• Ajustar thresholds de alerta</li>
                <li>• Implementar verificação adicional</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Longo Prazo</h3>
              <ul className="text-sm space-y-1">
                <li>• Expandir sistema para outras regiões</li>
                <li>• Integrar dados de GPS</li>
                <li>• Desenvolver app mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}