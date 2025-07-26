'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ChartComponent from '@/components/ChartComponent'
import CodeBlock from '@/components/CodeBlock'

export default function EDAPage() {
  // Dados para os gráficos
  const fraudesPorRegiao = {
    labels: ['Winter Park', 'Altamonte Springs', 'Kissimmee', 'Orlando', 'Sanford', 'Clermont', 'Apopka'],
    datasets: [
      {
        label: 'Itens Faltantes',
        data: [245, 198, 167, 156, 143, 132, 109],
        backgroundColor: [
          '#004c91',
          '#0071ce',
          '#ffc220',
          '#ffde00',
          '#5a5a5a',
          '#f7f7f7',
          '#004c91'
        ],
        borderColor: '#004c91',
        borderWidth: 1,
      },
    ],
  }

  const fraudesPorHorario = {
    labels: ['00-03', '03-06', '06-09', '09-12', '12-15', '15-18', '18-21', '21-24'],
    datasets: [
      {
        label: 'Número de Fraudes',
        data: [89, 45, 67, 123, 156, 189, 234, 167],
        backgroundColor: 'rgba(0, 76, 145, 0.6)',
        borderColor: '#004c91',
        borderWidth: 2,
        fill: true,
      },
    ],
  }

  const distribuicaoValores = {
    labels: ['$0-50', '$50-100', '$100-200', '$200-300', '$300-400', '$400-500', '$500+'],
    datasets: [
      {
        label: 'Pedidos com Fraude',
        data: [156, 234, 345, 289, 198, 167, 123],
        backgroundColor: '#ffc220',
        borderColor: '#004c91',
        borderWidth: 1,
      },
      {
        label: 'Pedidos Normais',
        data: [1234, 2345, 2890, 2456, 1890, 1234, 890],
        backgroundColor: '#004c91',
        borderColor: '#ffc220',
        borderWidth: 1,
      },
    ],
  }

  const correlacaoData = {
    labels: ['Idade Motorista', 'Número de Viagens', 'Valor Pedido', 'Itens Entregues', 'Horário Entrega'],
    datasets: [
      {
        label: 'Correlação com Fraudes',
        data: [0.23, -0.45, 0.67, -0.34, 0.56],
        backgroundColor: (ctx: any) => {
          const value = ctx.parsed.y
          return value > 0 ? '#ffc220' : '#004c91'
        },
        borderColor: '#004c91',
        borderWidth: 1,
      },
    ],
  }

  const pythonCode = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Configuração do estilo dos gráficos
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# Análise de distribuição de fraudes por região
fraud_by_region = orders_df[orders_df['items_missing'] > 0].groupby('region').size()
plt.figure(figsize=(12, 6))
fraud_by_region.plot(kind='bar', color='#004c91')
plt.title('Distribuição de Fraudes por Região')
plt.xlabel('Região')
plt.ylabel('Número de Fraudes')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Análise temporal - fraudes por horário
orders_df['hour'] = pd.to_datetime(orders_df['delivery_hour']).dt.hour
fraud_by_hour = orders_df[orders_df['items_missing'] > 0].groupby('hour').size()
plt.figure(figsize=(12, 6))
fraud_by_hour.plot(kind='line', marker='o', color='#ffc220', linewidth=3)
plt.title('Padrão Temporal de Fraudes por Horário')
plt.xlabel('Hora do Dia')
plt.ylabel('Número de Fraudes')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# Análise de correlação
correlation_matrix = orders_df[['items_missing', 'order_amount', 'items_delivered']].corr()
plt.figure(figsize=(8, 6))
sns.heatmap(correlation_matrix, annot=True, cmap='RdYlBu', center=0)
plt.title('Matriz de Correlação - Variáveis de Fraude')
plt.tight_layout()
plt.show()`

  const statisticsCode = `# Estatísticas descritivas dos dados
print("=== ESTATÍSTICAS DESCRITIVAS ===")
print("\\nPedidos com itens faltantes:")
fraud_orders = orders_df[orders_df['items_missing'] > 0]
print(f"Total: {len(fraud_orders)} ({len(fraud_orders)/len(orders_df)*100:.2f}%)")

print("\\nDistribuição de itens faltantes:")
print(fraud_orders['items_missing'].describe())

print("\\nValor médio dos pedidos com fraude:")
print(f"Média: ${fraud_orders['order_amount'].mean():.2f}")
print(f"Mediana: ${fraud_orders['order_amount'].median():.2f}")

print("\\nTop 5 regiões com mais fraudes:")
top_regions = fraud_orders['region'].value_counts().head()
print(top_regions)

print("\\nMotoristas com mais fraudes:")
top_drivers = fraud_orders['driver_id'].value_counts().head()
print(top_drivers)`

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Análise Exploratória de Dados</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descoberta de padrões, tendências e insights através de visualizações 
          interativas e análise estatística dos dados de fraude
        </p>
      </motion.div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <AnimatedCard>
          <div className="text-center">
            <BarChart3 className="mx-auto text-walmart-blue mb-3" size={32} />
            <h3 className="text-2xl font-bold text-walmart-blue">1.250</h3>
            <p className="text-gray-600">Pedidos com Fraude</p>
            <p className="text-sm text-gray-500">12.5% do total</p>
          </div>
        </AnimatedCard>
        <AnimatedCard delay={0.1}>
          <div className="text-center">
            <TrendingUp className="mx-auto text-green-500 mb-3" size={32} />
            <h3 className="text-2xl font-bold text-green-500">$312.45</h3>
            <p className="text-gray-600">Valor Médio</p>
            <p className="text-sm text-gray-500">Pedidos com fraude</p>
          </div>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <div className="text-center">
            <PieChart className="mx-auto text-yellow-500 mb-3" size={32} />
            <h3 className="text-2xl font-bold text-yellow-500">2.1</h3>
            <p className="text-gray-600">Itens Faltantes</p>
            <p className="text-sm text-gray-500">Média por pedido</p>
          </div>
        </AnimatedCard>
        <AnimatedCard delay={0.3}>
          <div className="text-center">
            <Activity className="mx-auto text-red-500 mb-3" size={32} />
            <h3 className="text-2xl font-bold text-red-500">18:00</h3>
            <p className="text-gray-600">Pico de Fraudes</p>
            <p className="text-sm text-gray-500">Horário crítico</p>
          </div>
        </AnimatedCard>
      </div>

      {/* Gráficos de Distribuição */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.4}>
          <ChartComponent
            type="bar"
            data={fraudesPorRegiao}
            title="Distribuição de Fraudes por Região"
            height={350}
          />
        </AnimatedCard>
        <AnimatedCard delay={0.5}>
          <ChartComponent
            type="line"
            data={fraudesPorHorario}
            title="Padrão Temporal de Fraudes por Horário"
            height={350}
          />
        </AnimatedCard>
      </div>

      {/* Análise de Valores */}
      <AnimatedCard delay={0.6}>
        <ChartComponent
          type="bar"
          data={distribuicaoValores}
          title="Distribuição de Valores - Pedidos com e sem Fraude"
          height={400}
        />
      </AnimatedCard>

      {/* Código Python para EDA */}
      <AnimatedCard delay={0.7}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Código de Análise Exploratória</h2>
        <p className="text-gray-700 mb-6">
          Utilizamos Python com pandas, matplotlib e seaborn para realizar a análise 
          exploratória dos dados e gerar as visualizações.
        </p>
        <CodeBlock
          code={pythonCode}
          language="python"
          title="Análise Exploratória - Visualizações"
        />
      </AnimatedCard>

      {/* Análise de Correlação */}
      <AnimatedCard delay={0.8}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Análise de Correlação</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ChartComponent
              type="bar"
              data={correlacaoData}
              title="Correlação das Variáveis com Fraudes"
              height={300}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Principais Descobertas:</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-walmart-yellow rounded-full mt-1"></div>
                <p className="text-gray-700">
                  <strong>Valor do Pedido (0.67):</strong> Correlação positiva forte - pedidos de maior valor têm mais fraudes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-walmart-blue rounded-full mt-1"></div>
                <p className="text-gray-700">
                  <strong>Número de Viagens (-0.45):</strong> Motoristas experientes têm menos fraudes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-walmart-yellow rounded-full mt-1"></div>
                <p className="text-gray-700">
                  <strong>Horário de Entrega (0.56):</strong> Entregas noturnas apresentam mais riscos
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-walmart-blue rounded-full mt-1"></div>
                <p className="text-gray-700">
                  <strong>Itens Entregues (-0.34):</strong> Pedidos menores têm proporcionalmente mais fraudes
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Estatísticas Descritivas */}
      <AnimatedCard delay={0.9}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Estatísticas Descritivas</h2>
        <CodeBlock
          code={statisticsCode}
          language="python"
          title="Análise Estatística Detalhada"
        />
      </AnimatedCard>

      {/* Insights Principais */}
      <AnimatedCard delay={1.0}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Principais Insights da EDA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Padrões Temporais</h3>
              <ul className="space-y-2">
                <li>• Pico de fraudes entre 18h-21h</li>
                <li>• Fins de semana apresentam mais casos</li>
                <li>• Sazonalidade em feriados</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Padrões Geográficos</h3>
              <ul className="space-y-2">
                <li>• Winter Park lidera em fraudes</li>
                <li>• Regiões urbanas mais afetadas</li>
                <li>• Correlação com densidade populacional</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Padrões Comportamentais</h3>
              <ul className="space-y-2">
                <li>• Motoristas novos mais propensos</li>
                <li>• Clientes recorrentes suspeitos</li>
                <li>• Produtos de alto valor mais visados</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Padrões Financeiros</h3>
              <ul className="space-y-2">
                <li>• Pedidos acima de $300 mais arriscados</li>
                <li>• Correlação com método de pagamento</li>
                <li>• Impacto na margem de lucro</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}