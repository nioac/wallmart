export default function ImplementacaoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          🚀 Implementação
        </h1>
        <p className="text-xl text-gray-600">
          Estratégia completa para colocar o sistema de detecção de fraudes em produção
        </p>
      </div>

      {/* Status da Implementação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-green-100 border border-green-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Desenvolvimento</h3>
          <p className="text-3xl font-bold text-green-600">100%</p>
          <p className="text-sm text-green-700">✅ Concluído</p>
        </div>

        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Testes</h3>
          <p className="text-3xl font-bold text-blue-600">95%</p>
          <p className="text-sm text-blue-700">🔄 Em andamento</p>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Homologação</h3>
          <p className="text-3xl font-bold text-yellow-600">80%</p>
          <p className="text-sm text-yellow-700">⏳ Planejado</p>
        </div>

        <div className="bg-red-100 border border-red-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Produção</h3>
          <p className="text-3xl font-bold text-red-600">0%</p>
          <p className="text-sm text-red-700">📅 Agendado</p>
        </div>
      </div>

      {/* Arquitetura do Sistema */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🏗️ Arquitetura do Sistema</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">📥 Camada de Entrada</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span>API REST para receber pedidos</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span>Validação de dados de entrada</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span>Rate limiting e autenticação</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span>Logging de requisições</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">🧠 Camada de Processamento</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span>Pré-processamento de dados</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span>Execução do modelo ML</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span>Cálculo de score de risco</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span>Aplicação de regras de negócio</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">📤 Camada de Saída</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>Resposta da API</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>Alertas automáticos</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>Dashboard em tempo real</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>Relatórios e métricas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plano de Implementação */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Plano de Implementação</h2>
        <div className="space-y-6">
          {/* Fase 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Fase 1: Preparação (Semanas 1-2)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Infraestrutura</h4>
                <ul className="text-sm space-y-1">
                  <li>• Configurar ambiente de produção</li>
                  <li>• Instalar dependências e bibliotecas</li>
                  <li>• Configurar banco de dados</li>
                  <li>• Implementar backup automático</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Segurança</h4>
                <ul className="text-sm space-y-1">
                  <li>• Configurar SSL/TLS</li>
                  <li>• Implementar autenticação</li>
                  <li>• Configurar firewall</li>
                  <li>• Auditoria de segurança</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Fase 2: Deploy Inicial (Semanas 3-4)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Aplicação</h4>
                <ul className="text-sm space-y-1">
                  <li>• Deploy da API principal</li>
                  <li>• Configurar load balancer</li>
                  <li>• Implementar health checks</li>
                  <li>• Configurar logs centralizados</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Monitoramento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Configurar métricas de sistema</li>
                  <li>• Implementar alertas</li>
                  <li>• Dashboard de monitoramento</li>
                  <li>• Testes de carga</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Fase 3: Testes em Produção (Semanas 5-6)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Validação</h4>
                <ul className="text-sm space-y-1">
                  <li>• Testes com dados reais</li>
                  <li>• Validação de performance</li>
                  <li>• Teste de failover</li>
                  <li>• Validação de precisão</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Ajustes</h4>
                <ul className="text-sm space-y-1">
                  <li>• Otimização de performance</li>
                  <li>• Ajuste de thresholds</li>
                  <li>• Correção de bugs</li>
                  <li>• Documentação final</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fase 4 */}
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold text-red-800 mb-2">Fase 4: Go-Live (Semanas 7-8)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Lançamento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Rollout gradual (10% → 50% → 100%)</li>
                  <li>• Monitoramento intensivo</li>
                  <li>• Suporte 24/7</li>
                  <li>• Comunicação com stakeholders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Estabilização</h4>
                <ul className="text-sm space-y-1">
                  <li>• Análise de métricas</li>
                  <li>• Feedback dos usuários</li>
                  <li>• Ajustes finos</li>
                  <li>• Treinamento da equipe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Código de Deploy */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Scripts de Deploy</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre><code>{`# Script de Deploy - Sistema de Detecção de Fraudes Walmart
#!/bin/bash

# deploy.sh - Script automatizado de deploy

set -e  # Parar em caso de erro

echo "🚀 Iniciando deploy do sistema de detecção de fraudes..."

# Configurações
APP_NAME="walmart-fraud-detection"
VERSION=$(date +%Y%m%d_%H%M%S)
DOCKER_REGISTRY="registry.walmart.com"
ENVIRONMENT=${1:-staging}

# 1. Build da aplicação
echo "📦 Construindo aplicação..."
docker build -t $APP_NAME:$VERSION .
docker tag $APP_NAME:$VERSION $DOCKER_REGISTRY/$APP_NAME:$VERSION
docker tag $APP_NAME:$VERSION $DOCKER_REGISTRY/$APP_NAME:latest

# 2. Testes automatizados
echo "🧪 Executando testes..."
docker run --rm $APP_NAME:$VERSION python -m pytest tests/ -v

# 3. Push para registry
echo "📤 Enviando para registry..."
docker push $DOCKER_REGISTRY/$APP_NAME:$VERSION
docker push $DOCKER_REGISTRY/$APP_NAME:latest

# 4. Deploy no Kubernetes
echo "☸️ Fazendo deploy no Kubernetes..."
kubectl set image deployment/$APP_NAME-api \\
    $APP_NAME-api=$DOCKER_REGISTRY/$APP_NAME:$VERSION \\
    --namespace=$ENVIRONMENT

# 5. Aguardar rollout
echo "⏳ Aguardando rollout..."
kubectl rollout status deployment/$APP_NAME-api --namespace=$ENVIRONMENT

# 6. Health check
echo "🏥 Verificando saúde da aplicação..."
sleep 30
HEALTH_URL="https://$APP_NAME-$ENVIRONMENT.walmart.com/health"
if curl -f $HEALTH_URL; then
    echo "✅ Deploy realizado com sucesso!"
else
    echo "❌ Falha no health check. Fazendo rollback..."
    kubectl rollout undo deployment/$APP_NAME-api --namespace=$ENVIRONMENT
    exit 1
fi

# 7. Notificação
echo "📧 Enviando notificação..."
curl -X POST "https://hooks.slack.com/services/..." \\
    -H 'Content-type: application/json' \\
    --data "{\\"text\\":\\"✅ Deploy do $APP_NAME versão $VERSION realizado com sucesso em $ENVIRONMENT\\"}"

echo "🎉 Deploy concluído!"

# Dockerfile para a aplicação
cat > Dockerfile << 'EOF'
FROM python:3.9-slim

WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \\
    gcc \\
    && rm -rf /var/lib/apt/lists/*

# Copiar requirements e instalar dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código da aplicação
COPY . .

# Criar usuário não-root
RUN useradd --create-home --shell /bin/bash app \\
    && chown -R app:app /app
USER app

# Expor porta
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# Comando para iniciar a aplicação
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "app:app"]
EOF

# docker-compose.yml para desenvolvimento
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/frauddb
      - REDIS_URL=redis://redis:6379
      - MODEL_PATH=/app/models/fraud_model.pkl
    volumes:
      - ./models:/app/models
    depends_on:
      - db
      - redis

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=frauddb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"

  monitoring:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

volumes:
  postgres_data:
EOF

# Kubernetes deployment
cat > k8s-deployment.yaml << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: walmart-fraud-detection-api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: walmart-fraud-detection-api
  template:
    metadata:
      labels:
        app: walmart-fraud-detection-api
    spec:
      containers:
      - name: walmart-fraud-detection-api
        image: registry.walmart.com/walmart-fraud-detection:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: fraud-detection-secrets
              key: database-url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: walmart-fraud-detection-service
  namespace: production
spec:
  selector:
    app: walmart-fraud-detection-api
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer
EOF

echo "📁 Arquivos de deploy criados com sucesso!"
echo "Para fazer deploy: ./deploy.sh production"`}</code></pre>
        </div>
      </div>

      {/* Monitoramento e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Monitoramento</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Métricas de Sistema</h3>
              <p className="text-sm text-gray-600">CPU, memória, disco, rede</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Métricas de Aplicação</h3>
              <p className="text-sm text-gray-600">Latência, throughput, erros</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold">Métricas de Negócio</h3>
              <p className="text-sm text-gray-600">Taxa de detecção, falsos positivos</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Logs Centralizados</h3>
              <p className="text-sm text-gray-600">ELK Stack para análise de logs</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚨 Alertas</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Críticos</h3>
              <p className="text-sm text-gray-600">Sistema indisponível, erro de modelo</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold">Avisos</h3>
              <p className="text-sm text-gray-600">Alta latência, degradação de performance</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Informativos</h3>
              <p className="text-sm text-gray-600">Deploy realizado, backup concluído</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Canais</h3>
              <p className="text-sm text-gray-600">Slack, email, SMS, PagerDuty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist de Go-Live */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">✅ Checklist de Go-Live</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3">🔧 Técnico</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Testes automatizados passando</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Performance validada</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Backup configurado</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Monitoramento ativo</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">🛡️ Segurança</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Auditoria de segurança</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>SSL/TLS configurado</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Autenticação implementada</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Logs de auditoria</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">👥 Operacional</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Equipe treinada</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Documentação atualizada</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Plano de rollback</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✅</span>
                <span>Suporte 24/7 ativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}