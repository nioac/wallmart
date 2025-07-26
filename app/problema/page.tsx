'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Users, Truck, Package, TrendingUp } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import MetricCard from '@/components/MetricCard'

export default function ProblemaPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Definição do Problema</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Análise detalhada dos desafios enfrentados nas operações de entrega e 
          os impactos das fraudes no sistema logístico do Walmart
        </p>
      </motion.div>

      {/* Contexto do Problema */}
      <AnimatedCard>
        <div className="flex items-start space-x-4 mb-6">
          <AlertTriangle className="text-red-500 mt-1" size={24} />
          <div>
            <h2 className="text-2xl font-bold text-walmart-blue mb-4">Contexto Geral</h2>
            <p className="text-gray-700 mb-4">
              O Walmart, como uma das maiores redes de varejo do mundo, processa milhões de entregas 
              diariamente. Com o crescimento do e-commerce e serviços de entrega, surgem novos desafios 
              relacionados à integridade das operações logísticas.
            </p>
            <p className="text-gray-700 mb-4">
              As fraudes em entregas representam um problema significativo que afeta não apenas os 
              resultados financeiros da empresa, mas também a experiência e confiança dos clientes. 
              Identificar e prevenir essas fraudes tornou-se uma prioridade estratégica.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Tipos de Fraude */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedCard delay={0.2}>
          <div className="text-center">
            <Users className="mx-auto text-walmart-blue mb-4" size={48} />
            <h3 className="text-xl font-bold text-walmart-blue mb-3">Fraudes de Clientes</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Alegações falsas de itens não recebidos</li>
              <li>• Reclamações de produtos danificados</li>
              <li>• Solicitações de reembolso indevidas</li>
              <li>• Manipulação de evidências de entrega</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="text-center">
            <Truck className="mx-auto text-walmart-blue mb-4" size={48} />
            <h3 className="text-xl font-bold text-walmart-blue mb-3">Fraudes de Motoristas</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Roubo de produtos durante entrega</li>
              <li>• Falsificação de comprovantes</li>
              <li>• Entrega em endereços incorretos</li>
              <li>• Conluio com clientes fraudulentos</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <div className="text-center">
            <Package className="mx-auto text-walmart-blue mb-4" size={48} />
            <h3 className="text-xl font-bold text-walmart-blue mb-3">Fraudes Sistêmicas</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Falhas no controle de estoque</li>
              <li>• Problemas na cadeia de suprimentos</li>
              <li>• Vulnerabilidades no sistema de rastreamento</li>
              <li>• Lacunas nos processos de verificação</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>

      {/* Impactos Identificados */}
      <AnimatedCard delay={0.8}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Impactos Identificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Impactos Financeiros</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Perdas diretas por produtos não entregues</li>
              <li>• Custos de reprocessamento de pedidos</li>
              <li>• Despesas com investigações</li>
              <li>• Impacto na margem de lucro</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Impactos Operacionais</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Redução da eficiência logística</li>
              <li>• Sobrecarga no atendimento ao cliente</li>
              <li>• Necessidade de controles adicionais</li>
              <li>• Aumento do tempo de resolução</li>
            </ul>
          </div>
        </div>
      </AnimatedCard>

      {/* Estatísticas do Problema */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Pedidos com Itens Faltantes"
          value="1.250"
          subtitle="12.5% do total"
          icon={<Package />}
          color="red"
        />
        <MetricCard
          title="Perda Financeira Estimada"
          value="R$ 2.8M"
          subtitle="Anual"
          icon={<TrendingUp />}
          color="red"
        />
        <MetricCard
          title="Tempo Médio de Resolução"
          value="5.2 dias"
          subtitle="Por reclamação"
          icon={<AlertTriangle />}
          color="yellow"
        />
        <MetricCard
          title="Taxa de Recorrência"
          value="23%"
          subtitle="Clientes/motoristas"
          icon={<Users />}
          color="red"
        />
      </div>

      {/* Fluxo Problemático */}
      <AnimatedCard delay={1.0}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Fluxo Problemático Identificado</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-walmart-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="font-semibold">Pedido Processado</h4>
              <p className="text-sm text-gray-600">Sistema registra entrega</p>
            </div>
            <div className="text-walmart-blue">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="font-semibold">Entrega Realizada</h4>
              <p className="text-sm text-gray-600">Motorista confirma entrega</p>
            </div>
            <div className="text-walmart-blue">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="font-semibold">Reclamação</h4>
              <p className="text-sm text-gray-600">Cliente reporta problema</p>
            </div>
            <div className="text-walmart-blue">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                4
              </div>
              <h4 className="font-semibold">Investigação</h4>
              <p className="text-sm text-gray-600">Processo manual lento</p>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Necessidade de Solução */}
      <AnimatedCard delay={1.2}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Necessidade de uma Solução Inteligente</h2>
          <p className="text-lg mb-4">
            A complexidade e volume das operações exigem uma abordagem baseada em dados e 
            inteligência artificial para identificar padrões suspeitos e prevenir fraudes 
            de forma proativa.
          </p>
          <p className="text-lg">
            Este projeto propõe o desenvolvimento de um sistema de detecção de fraudes 
            utilizando técnicas avançadas de machine learning e análise de dados para 
            proteger a integridade das operações de entrega.
          </p>
        </div>
      </AnimatedCard>
    </div>
  )
}