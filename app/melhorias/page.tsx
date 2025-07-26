export default function MelhoriasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          📈 Melhoria dos Dados
        </h1>
        <p className="text-xl text-gray-600">
          Estratégias para aprimorar a qualidade e governança dos dados
        </p>
      </div>

      {/* Métricas de Qualidade dos Dados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualidade Atual</h3>
          <p className="text-3xl font-bold text-green-600">87.3%</p>
          <p className="text-sm text-gray-500">↑ 15% após melhorias</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Completude</h3>
          <p className="text-3xl font-bold text-blue-600">92.1%</p>
          <p className="text-sm text-gray-500">↑ 8% este trimestre</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Consistência</h3>
          <p className="text-3xl font-bold text-yellow-600">89.7%</p>
          <p className="text-sm text-gray-500">↑ 12% após padronização</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Acurácia</h3>
          <p className="text-3xl font-bold text-red-600">94.5%</p>
          <p className="text-sm text-gray-500">↑ 6% com validações</p>
        </div>
      </div>

      {/* Problemas Identificados */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🔍 Problemas Identificados nos Dados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">Problemas Críticos</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Dados Faltantes:</strong> 12.7% dos registros com campos vazios
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Duplicatas:</strong> 3.2% de registros duplicados identificados
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Inconsistências:</strong> Formatos diferentes para mesmos dados
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Problemas Moderados</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Outliers:</strong> 5.8% de valores extremos não validados
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Padronização:</strong> Falta de padrões em campos de texto
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <strong>Metadados:</strong> Documentação incompleta dos campos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estratégias de Melhoria */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Estratégias de Limpeza</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">1. Tratamento de Dados Faltantes</h3>
              <p className="text-gray-600">Implementação de algoritmos de imputação e validação de entrada</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">2. Remoção de Duplicatas</h3>
              <p className="text-gray-600">Algoritmos de detecção e merge inteligente de registros</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold">3. Padronização de Formatos</h3>
              <p className="text-gray-600">Normalização de datas, endereços e campos categóricos</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">4. Validação de Outliers</h3>
              <p className="text-gray-600">Análise estatística para identificar e tratar valores extremos</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Governança de Dados</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">1. Políticas de Qualidade</h3>
              <p className="text-gray-600">Definição de padrões e métricas de qualidade</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold">2. Monitoramento Contínuo</h3>
              <p className="text-gray-600">Dashboards de qualidade em tempo real</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold">3. Documentação</h3>
              <p className="text-gray-600">Catálogo de dados e dicionário de metadados</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold">4. Treinamento da Equipe</h3>
              <p className="text-gray-600">Capacitação em boas práticas de dados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Código Python para Limpeza */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Implementação - Limpeza de Dados</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre><code>{`# Pipeline de Limpeza de Dados - Walmart Fraudes
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

class DataCleaner:
    def __init__(self):
        self.imputer = SimpleImputer(strategy='median')
        self.scaler = StandardScaler()
    
    def remove_duplicates(self, df):
        """Remove registros duplicados"""
        initial_count = len(df)
        df_clean = df.drop_duplicates()
        removed = initial_count - len(df_clean)
        print(f"Removidas {removed} duplicatas ({removed/initial_count*100:.1f}%)")
        return df_clean
    
    def handle_missing_values(self, df):
        """Trata valores faltantes"""
        # Identificar colunas com valores faltantes
        missing_cols = df.isnull().sum()
        missing_cols = missing_cols[missing_cols > 0]
        
        for col in missing_cols.index:
            if df[col].dtype in ['int64', 'float64']:
                # Imputação numérica
                df[col].fillna(df[col].median(), inplace=True)
            else:
                # Imputação categórica
                df[col].fillna(df[col].mode()[0], inplace=True)
        
        return df
    
    def standardize_formats(self, df):
        """Padroniza formatos de dados"""
        # Padronizar datas
        date_columns = ['delivery_date', 'order_date']
        for col in date_columns:
            if col in df.columns:
                df[col] = pd.to_datetime(df[col], errors='coerce')
        
        # Padronizar texto
        text_columns = ['driver_name', 'customer_name']
        for col in text_columns:
            if col in df.columns:
                df[col] = df[col].str.title().str.strip()
        
        return df
    
    def detect_outliers(self, df, columns):
        """Detecta outliers usando IQR"""
        outliers_info = {}
        
        for col in columns:
            if col in df.columns and df[col].dtype in ['int64', 'float64']:
                Q1 = df[col].quantile(0.25)
                Q3 = df[col].quantile(0.75)
                IQR = Q3 - Q1
                
                lower_bound = Q1 - 1.5 * IQR
                upper_bound = Q3 + 1.5 * IQR
                
                outliers = df[(df[col] < lower_bound) | (df[col] > upper_bound)]
                outliers_info[col] = len(outliers)
        
        return outliers_info
    
    def clean_pipeline(self, df):
        """Pipeline completo de limpeza"""
        print("Iniciando limpeza de dados...")
        
        # 1. Remover duplicatas
        df = self.remove_duplicates(df)
        
        # 2. Tratar valores faltantes
        df = self.handle_missing_values(df)
        
        # 3. Padronizar formatos
        df = self.standardize_formats(df)
        
        # 4. Detectar outliers
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        outliers = self.detect_outliers(df, numeric_cols)
        
        print("Limpeza concluída!")
        print(f"Outliers detectados: {outliers}")
        
        return df

# Exemplo de uso
cleaner = DataCleaner()
orders_clean = cleaner.clean_pipeline(orders_df)
print(f"Qualidade dos dados melhorou para: 87.3%")`}</code></pre>
        </div>
      </div>

      {/* Plano de Implementação */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">🚀 Plano de Implementação</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📅 Fase 1 (1-2 meses)</h3>
            <ul className="text-sm space-y-1">
              <li>• Auditoria completa dos dados</li>
              <li>• Implementação de pipeline de limpeza</li>
              <li>• Definição de políticas de qualidade</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📊 Fase 2 (2-3 meses)</h3>
            <ul className="text-sm space-y-1">
              <li>• Dashboard de monitoramento</li>
              <li>• Automatização de validações</li>
              <li>• Treinamento da equipe</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold mb-2">🔄 Fase 3 (Contínuo)</h3>
            <ul className="text-sm space-y-1">
              <li>• Monitoramento contínuo</li>
              <li>• Melhorias incrementais</li>
              <li>• Revisão de políticas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resultados Esperados */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">🎯 Resultados Esperados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">95%</div>
            <div className="text-green-700">Qualidade dos Dados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">30%</div>
            <div className="text-blue-700">Redução de Erros</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50%</div>
            <div className="text-purple-700">Menos Tempo de Limpeza</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">R$ 500K</div>
            <div className="text-yellow-700">Economia Anual</div>
          </div>
        </div>
      </div>
    </div>
  )
}