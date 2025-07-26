'use client'

import { motion } from 'framer-motion'
import { Search, TrendingUp, Clock, MapPin, Users, AlertCircle, BarChart3, Target } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import ChartComponent from '@/components/ChartComponent'
import CodeBlock from '@/components/CodeBlock'
import MetricCard from '@/components/MetricCard'

export default function PadroesPage() {
  // Dados para gráficos de padrões
  const fraudPatternsByHour = {
    labels: ['00-02', '02-04', '04-06', '06-08', '08-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
    datasets: [
      {
        label: 'Fraudes Detectadas',
        data: [12, 8, 5, 3, 7, 15, 28, 35, 42, 38, 25, 18],
        backgroundColor: 'rgba(255, 194, 32, 0.6)',
        borderColor: '#ffc220',
        borderWidth: 2,
      },
      {
        label: 'Entregas Normais',
        data: [45, 32, 28, 35, 68, 125, 180, 220, 195, 165, 98, 67],
        backgroundColor: 'rgba(0, 76, 145, 0.6)',
        borderColor: '#004c91',
        borderWidth: 2,
      },
    ],
  }

  const fraudByRegion = {
    labels: ['Winter Park', 'Altamonte Springs', 'Orlando', 'Kissimmee', 'Sanford', 'Clermont'],
    datasets: [
      {
        data: [35, 28, 22, 18, 12, 8],
        backgroundColor: [
          '#ff4757',
          '#ff6b7a',
          '#ffc220',
          '#ffde00',
          '#004c91',
          '#0071ce'
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  }

  const driverBehaviorPattern = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Motoristas Suspeitos',
        data: [8, 12, 15, 18, 22, 28, 25],
        backgroundColor: 'rgba(255, 71, 87, 0.6)',
        borderColor: '#ff4757',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Comportamento Normal',
        data: [145, 167, 189, 201, 178, 156, 134],
        backgroundColor: 'rgba(81, 207, 102, 0.6)',
        borderColor: '#51cf66',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const patternAnalysisCode = `# Análise de Padrões Temporais de Fraude
import pandas as pd
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import seaborn as sns

# Carregar dados de pedidos
orders_df = pd.read_csv('orders.csv')
orders_df['date'] = pd.to_datetime(orders_df['date'])
orders_df['hour'] = orders_df['delivery_hour']

# Identificar fraudes (items_missing > 0)
orders_df['is_fraud'] = orders_df['items_missing'] > 0

# Análise por horário
hourly_fraud = orders_df.groupby('hour').agg({
    'is_fraud': ['sum', 'count'],
    'order_amount': 'mean'
}).round(2)

# Calcular taxa de fraude por hora
hourly_fraud['fraud_rate'] = (
    hourly_fraud[('is_fraud', 'sum')] / 
    hourly_fraud[('is_fraud', 'count')] * 100
)

print("Taxa de Fraude por Horário:")
print(hourly_fraud['fraud_rate'].sort_values(ascending=False))

# Análise por região
regional_fraud = orders_df.groupby('region').agg({
    'is_fraud': ['sum', 'count'],
    'order_amount': ['mean', 'sum']
}).round(2)

print("\\nFraudes por Região:")
print(regional_fraud)

# Padrões de motoristas suspeitos
driver_patterns = orders_df.groupby('driver_id').agg({
    'is_fraud': 'sum',
    'order_id': 'count',
    'order_amount': 'mean'
}).round(2)

driver_patterns['fraud_rate'] = (
    driver_patterns['is_fraud'] / 
    driver_patterns['order_id'] * 100
)

# Motoristas com alta taxa de fraude
suspicious_drivers = driver_patterns[
    driver_patterns['fraud_rate'] > 15
].sort_values('fraud_rate', ascending=False)

print("\\nMotoristas Suspeitos (>15% fraude):")
print(suspicious_drivers.head(10))`

  const clusteringCode = `# Clustering de Padrões de Comportamento
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# Preparar features para clustering
features = ['delivery_hour', 'order_amount', 'items_delivered', 
           'items_missing', 'region_encoded']

# Encoding de variáveis categóricas
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
orders_df['region_encoded'] = le.fit_transform(orders_df['region'])

# Selecionar features
X = orders_df[features].fillna(0)

# Normalizar dados
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Aplicar K-Means
kmeans = KMeans(n_clusters=4, random_state=42)
clusters = kmeans.fit_predict(X_scaled)

# Adicionar clusters ao dataframe
orders_df['cluster'] = clusters

# Analisar características dos clusters
cluster_analysis = orders_df.groupby('cluster').agg({
    'is_fraud': ['mean', 'sum'],
    'order_amount': 'mean',
    'delivery_hour': 'mean',
    'items_missing': 'mean'
}).round(3)

print("Análise dos Clusters:")
print(cluster_analysis)

# Visualizar clusters com PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

plt.figure(figsize=(10, 8))
scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], 
                     c=clusters, cmap='viridis', alpha=0.6)
plt.colorbar(scatter)
plt.title('Clusters de Comportamento de Entrega')
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.2%} variância)')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.2%} variância)')
plt.show()`

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Detecção de Padrões</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Identificação de padrões suspeitos e comportamentos anômalos nas entregas
        </p>
      </motion.div>

      {/* Métricas de Padrões */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Padrões Identificados"
          value="127"
          subtitle="Comportamentos suspeitos"
          icon={<Search />}
          color="blue"
        />
        <MetricCard
          title="Horário de Pico"
          value="16-18h"
          subtitle="Maior incidência"
          icon={<Clock />}
          color="yellow"
        />
        <MetricCard
          title="Região Crítica"
          value="Winter Park"
          subtitle="35% das fraudes"
          icon={<MapPin />}
          color="red"
        />
        <MetricCard
          title="Motoristas Suspeitos"
          value="23"
          subtitle="Alta taxa de fraude"
          icon={<Users />}
          color="orange"
        />
      </div>

      {/* Análise Temporal */}
      <AnimatedCard delay={0.2}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">📊 Padrões Temporais</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ChartComponent
              type="bar"
              data={fraudPatternsByHour}
              title="Distribuição de Fraudes por Horário"
              height={300}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-walmart-blue">Insights Temporais</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="font-medium">Pico de Fraudes: 16h-18h</p>
                  <p className="text-sm text-gray-600">42 casos detectados no horário de maior movimento</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="font-medium">Crescimento Vespertino</p>
                  <p className="text-sm text-gray-600">Aumento gradual das 12h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Período Seguro: 04h-08h</p>
                  <p className="text-sm text-gray-600">Menor incidência de fraudes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Análise Geográfica */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.3}>
          <ChartComponent
            type="doughnut"
            data={fraudByRegion}
            title="Distribuição de Fraudes por Região"
            height={350}
          />
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <h3 className="text-lg font-semibold text-walmart-blue mb-4">Análise Regional</h3>
          <div className="space-y-4">
            {[
              { region: 'Winter Park', percentage: 35, risk: 'Alto', color: 'bg-red-500' },
              { region: 'Altamonte Springs', percentage: 28, risk: 'Alto', color: 'bg-orange-500' },
              { region: 'Orlando', percentage: 22, risk: 'Médio', color: 'bg-yellow-500' },
              { region: 'Kissimmee', percentage: 18, risk: 'Médio', color: 'bg-blue-500' },
              { region: 'Sanford', percentage: 12, risk: 'Baixo', color: 'bg-green-500' },
              { region: 'Clermont', percentage: 8, risk: 'Baixo', color: 'bg-gray-500' },
            ].map((item, index) => (
              <div key={item.region} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <span className="font-medium">{item.region}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{item.percentage}%</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    item.risk === 'Alto' ? 'bg-red-100 text-red-800' :
                    item.risk === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.risk}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>

      {/* Padrões de Comportamento */}
      <AnimatedCard delay={0.5}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">👥 Padrões de Comportamento dos Motoristas</h2>
        <ChartComponent
          type="line"
          data={driverBehaviorPattern}
          title="Comportamento Suspeito vs Normal por Dia da Semana"
          height={350}
        />
      </AnimatedCard>

      {/* Código de Análise */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🔍 Análise de Padrões com Python</h2>
        <CodeBlock
          language="python"
          code={patternAnalysisCode}
          title="Detecção de Padrões Temporais e Regionais"
        />
      </AnimatedCard>

      {/* Clustering */}
      <AnimatedCard delay={0.7}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🎯 Clustering de Comportamentos</h2>
        <CodeBlock
          language="python"
          code={clusteringCode}
          title="Agrupamento de Padrões de Comportamento"
        />
      </AnimatedCard>

      {/* Principais Descobertas */}
      <AnimatedCard delay={0.8}>
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">🔍 Principais Descobertas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Padrões Temporais</h3>
              <ul className="space-y-2 text-sm">
                <li>• Pico de fraudes entre 16h-18h (horário de rush)</li>
                <li>• Sexta-feira é o dia com mais incidentes</li>
                <li>• Madrugada (00h-06h) tem menor incidência</li>
                <li>• Fins de semana mostram padrão diferenciado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Padrões Geográficos</h3>
              <ul className="space-y-2 text-sm">
                <li>• Winter Park concentra 35% das fraudes</li>
                <li>• Regiões urbanas têm maior incidência</li>
                <li>• Correlação com densidade populacional</li>
                <li>• Rotas específicas são mais vulneráveis</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}