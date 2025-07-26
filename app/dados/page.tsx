'use client'

import { motion } from 'framer-motion'
import { Database, FileText, Users, Truck, Package, Calendar } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import MetricCard from '@/components/MetricCard'
import CodeBlock from '@/components/CodeBlock'

export default function DadosPage() {
  const sqlQuery = `-- Consulta para extrair dados de pedidos com itens faltantes
SELECT 
    o.date,
    o.order_id,
    o.order_amount,
    o.region,
    o.items_delivered,
    o.items_missing,
    o.delivery_hour,
    o.driver_id,
    o.customer_id,
    d.driver_name,
    d.age as driver_age,
    d.trips as driver_trips,
    c.customer_name,
    c.age as customer_age,
    c.orders as customer_orders
FROM orders o
LEFT JOIN drivers_data d ON o.driver_id = d.driver_id
LEFT JOIN customers_data c ON o.customer_id = c.customer_id
WHERE o.items_missing > 0
ORDER BY o.date DESC;`

  const pythonCode = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Carregamento dos datasets
orders_df = pd.read_csv('orders.csv')
drivers_df = pd.read_csv('drivers_data.csv')
customers_df = pd.read_csv('customers_data.csv')
products_df = pd.read_csv('products_data.csv')
missing_items_df = pd.read_csv('missing_items_data.csv')

# Informações básicas dos datasets
print("Dimensões dos datasets:")
print(f"Pedidos: {orders_df.shape}")
print(f"Motoristas: {drivers_df.shape}")
print(f"Clientes: {customers_df.shape}")
print(f"Produtos: {products_df.shape}")
print(f"Itens Faltantes: {missing_items_df.shape}")

# Análise de valores ausentes
print("\\nValores ausentes por dataset:")
for name, df in [('Orders', orders_df), ('Drivers', drivers_df), 
                 ('Customers', customers_df), ('Products', products_df)]:
    missing = df.isnull().sum().sum()
    print(f"{name}: {missing} valores ausentes")`

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Dados Utilizados</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Análise detalhada dos datasets utilizados no projeto de detecção de fraudes, 
          incluindo estrutura, qualidade e processo de extração dos dados
        </p>
      </motion.div>

      {/* Visão Geral dos Datasets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Pedidos"
          value="10.000"
          subtitle="Registros únicos"
          icon={<Package />}
          color="blue"
        />
        <MetricCard
          title="Motoristas"
          value="1.247"
          subtitle="Perfis únicos"
          icon={<Truck />}
          color="yellow"
        />
        <MetricCard
          title="Clientes"
          value="1.200"
          subtitle="Perfis únicos"
          icon={<Users />}
          color="green"
        />
        <MetricCard
          title="Produtos"
          value="500"
          subtitle="Itens únicos"
          icon={<FileText />}
          color="blue"
        />
        <MetricCard
          title="Período"
          value="365 dias"
          subtitle="Ano de 2023"
          icon={<Calendar />}
          color="yellow"
        />
      </div>

      {/* Descrição dos Datasets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.2}>
          <div className="flex items-center space-x-3 mb-4">
            <Package className="text-walmart-blue" size={24} />
            <h2 className="text-2xl font-bold text-walmart-blue">Dataset de Pedidos</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Contém informações detalhadas sobre todos os pedidos processados, incluindo 
            dados de entrega, valores, regiões e status de itens faltantes.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Campos Principais:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>date:</strong> Data do pedido</li>
              <li>• <strong>order_id:</strong> Identificador único</li>
              <li>• <strong>order_amount:</strong> Valor total</li>
              <li>• <strong>region:</strong> Região de entrega</li>
              <li>• <strong>items_delivered:</strong> Itens entregues</li>
              <li>• <strong>items_missing:</strong> Itens faltantes</li>
              <li>• <strong>delivery_hour:</strong> Horário da entrega</li>
              <li>• <strong>driver_id:</strong> ID do motorista</li>
              <li>• <strong>customer_id:</strong> ID do cliente</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="flex items-center space-x-3 mb-4">
            <Truck className="text-walmart-blue" size={24} />
            <h2 className="text-2xl font-bold text-walmart-blue">Dataset de Motoristas</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Informações sobre os motoristas responsáveis pelas entregas, incluindo 
            dados demográficos e histórico de viagens.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Campos Principais:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>driver_id:</strong> Identificador único</li>
              <li>• <strong>driver_name:</strong> Nome do motorista</li>
              <li>• <strong>age:</strong> Idade</li>
              <li>• <strong>trips:</strong> Número total de viagens</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={0.6}>
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-walmart-blue" size={24} />
            <h2 className="text-2xl font-bold text-walmart-blue">Dataset de Clientes</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Perfis dos clientes que realizaram pedidos, com informações demográficas 
            e histórico de compras.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Campos Principais:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>customer_id:</strong> Identificador único</li>
              <li>• <strong>customer_name:</strong> Nome do cliente</li>
              <li>• <strong>age:</strong> Idade</li>
              <li>• <strong>orders:</strong> Número de pedidos</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.8}>
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-walmart-blue" size={24} />
            <h2 className="text-2xl font-bold text-walmart-blue">Datasets Complementares</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Dados adicionais sobre produtos e itens faltantes para análise 
            mais detalhada dos padrões de fraude.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Incluem:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Produtos:</strong> Catálogo de itens</li>
              <li>• <strong>Itens Faltantes:</strong> Detalhes específicos</li>
              <li>• <strong>Categorias:</strong> Classificação de produtos</li>
              <li>• <strong>Valores:</strong> Preços e custos</li>
            </ul>
          </div>
        </AnimatedCard>
      </div>

      {/* Processo de Extração */}
      <AnimatedCard delay={1.0}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Processo de Extração dos Dados</h2>
        <p className="text-gray-700 mb-6">
          Os dados foram extraídos do sistema de gestão de pedidos do Walmart utilizando 
          consultas SQL otimizadas para garantir a integridade e completude das informações.
        </p>
        <CodeBlock
          code={sqlQuery}
          language="sql"
          title="Consulta SQL - Extração de Dados de Fraude"
        />
      </AnimatedCard>

      {/* Análise Inicial dos Dados */}
      <AnimatedCard delay={1.2}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Análise Inicial dos Dados</h2>
        <p className="text-gray-700 mb-6">
          Após a extração, realizamos uma análise inicial para entender a estrutura, 
          qualidade e distribuição dos dados.
        </p>
        <CodeBlock
          code={pythonCode}
          language="python"
          title="Análise Exploratória Inicial - Python"
        />
      </AnimatedCard>

      {/* Qualidade dos Dados */}
      <AnimatedCard delay={1.4}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Qualidade dos Dados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
            <p className="text-gray-700">Completude dos Dados</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-700">Consistência</p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">0.2%</div>
            <p className="text-gray-700">Valores Ausentes</p>
          </div>
        </div>
      </AnimatedCard>

      {/* Distribuição Temporal */}
      <AnimatedCard delay={1.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">Distribuição Temporal dos Dados</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Período de Análise</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Início:</strong> 1º de Janeiro de 2023</li>
                <li>• <strong>Fim:</strong> 31 de Dezembro de 2023</li>
                <li>• <strong>Total:</strong> 365 dias de dados</li>
                <li>• <strong>Frequência:</strong> Dados diários</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Características Temporais</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Sazonalidade identificada</li>
                <li>• Picos em feriados e fins de semana</li>
                <li>• Variações por região</li>
                <li>• Padrões horários de entrega</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  )
}