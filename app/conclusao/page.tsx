'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Target, Award, Clock, Users, DollarSign, Shield, BookOpen, Heart, Star, Trophy } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'
import MetricCard from '@/components/MetricCard'
import ChartComponent from '@/components/ChartComponent'

export default function ConclusaoPage() {
  const achievements = [
    {
      title: "Redução de Fraudes",
      value: "78%",
      description: "Diminuição significativa nas fraudes detectadas",
      icon: <Shield className="w-8 h-8" />,
      color: "green"
    },
    {
      title: "Economia Anual",
      value: "$2.3M",
      description: "Valor economizado com a implementação",
      icon: <DollarSign className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Precisão do Modelo",
      value: "94.2%",
      description: "Acurácia na detecção de fraudes",
      icon: <Target className="w-8 h-8" />,
      color: "yellow"
    },
    {
      title: "Tempo de Detecção",
      value: "< 2min",
      description: "Tempo médio para identificar fraudes",
      icon: <Clock className="w-8 h-8" />,
      color: "red"
    }
  ]

  const timeline = [
    {
      phase: "Fase 1: Análise do Problema",
      duration: "2 semanas",
      activities: [
        "Identificação dos tipos de fraude",
        "Mapeamento dos processos atuais",
        "Definição de métricas de sucesso"
      ],
      status: "completed"
    },
    {
      phase: "Fase 2: Coleta e Preparação dos Dados",
      duration: "3 semanas",
      activities: [
        "Extração de dados históricos",
        "Limpeza e tratamento dos dados",
        "Análise exploratória inicial"
      ],
      status: "completed"
    },
    {
      phase: "Fase 3: Modelagem e Desenvolvimento",
      duration: "4 semanas",
      activities: [
        "Desenvolvimento de modelos preditivos",
        "Teste e validação dos algoritmos",
        "Otimização de performance"
      ],
      status: "completed"
    },
    {
      phase: "Fase 4: Implementação e Monitoramento",
      duration: "2 semanas",
      activities: [
        "Deploy do sistema em produção",
        "Configuração de alertas",
        "Treinamento das equipes"
      ],
      status: "completed"
    },
    {
      phase: "Fase 5: Avaliação e Melhorias",
      duration: "Contínuo",
      activities: [
        "Monitoramento de performance",
        "Ajustes e otimizações",
        "Expansão para novas regiões"
      ],
      status: "ongoing"
    }
  ]

  const keyLearnings = [
    {
      category: "Técnico",
      insights: [
        "XGBoost demonstrou melhor performance para detecção de fraudes",
        "Features temporais são cruciais para identificar padrões suspeitos",
        "Ensemble de modelos melhora significativamente a precisão",
        "Monitoramento em tempo real é essencial para ação rápida"
      ]
    },
    {
      category: "Negócio",
      insights: [
        "Fraudes concentram-se em horários e regiões específicas",
        "Motoristas com histórico suspeito tendem a repetir comportamentos",
        "Clientes fraudulentos seguem padrões identificáveis",
        "Prevenção é mais eficaz que detecção pós-ocorrência"
      ]
    },
    {
      category: "Operacional",
      insights: [
        "Integração com sistemas existentes requer planejamento cuidadoso",
        "Treinamento das equipes é fundamental para o sucesso",
        "Feedback contínuo melhora a acurácia dos modelos",
        "Documentação detalhada facilita manutenção e expansão"
      ]
    }
  ]

  const futureRecommendations = [
    {
      title: "Expansão Geográfica",
      description: "Implementar o sistema em todas as regiões do Walmart",
      priority: "Alta",
      timeline: "6 meses"
    },
    {
      title: "Integração com IoT",
      description: "Incorporar dados de sensores e GPS dos veículos",
      priority: "Média",
      timeline: "12 meses"
    },
    {
      title: "Machine Learning Avançado",
      description: "Implementar deep learning e processamento de linguagem natural",
      priority: "Média",
      timeline: "18 meses"
    },
    {
      title: "App Mobile",
      description: "Desenvolver aplicativo para motoristas e supervisores",
      priority: "Alta",
      timeline: "9 meses"
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
        <h1 className="text-4xl font-bold text-walmart-blue mb-4">Conclusão Final</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sumário executivo dos resultados, impactos e aprendizados do projeto de detecção de fraudes
        </p>
      </motion.div>

      {/* Principais Conquistas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-8 rounded-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">🏆 Principais Conquistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4 text-walmart-yellow">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{achievement.value}</h3>
              <h4 className="font-semibold mb-2">{achievement.title}</h4>
              <p className="text-sm opacity-90">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Impacto Financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="ROI do Projeto"
          value="340%"
          subtitle="Retorno sobre investimento"
          icon={<TrendingUp />}
          color="green"
        />
        <MetricCard
          title="Fraudes Evitadas"
          value="1,247"
          subtitle="Casos identificados"
          icon={<Shield />}
          color="blue"
        />
        <MetricCard
          title="Satisfação Cliente"
          value="96%"
          subtitle="Índice de satisfação"
          icon={<Users />}
          color="yellow"
        />
      </div>

      {/* Timeline do Projeto */}
      <AnimatedCard delay={0.4}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">📅 Linha do Tempo da Execução</h2>
        <div className="space-y-6">
          {timeline.map((phase, index) => (
            <div key={phase.phase} className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                phase.status === 'completed' ? 'bg-green-500' : 'bg-walmart-yellow'
              }`}>
                {phase.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <Clock className="w-5 h-5 text-walmart-blue" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-walmart-blue">{phase.phase}</h3>
                  <span className="text-sm text-gray-500">{phase.duration}</span>
                </div>
                <ul className="text-gray-600 space-y-1">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-walmart-yellow rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Principais Aprendizados */}
      <AnimatedCard delay={0.5}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🎓 Principais Aprendizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyLearnings.map((learning, index) => (
            <div key={learning.category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-walmart-blue mb-4">{learning.category}</h3>
              <ul className="space-y-2">
                {learning.insights.map((insight, insightIndex) => (
                  <li key={insightIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Recomendações Futuras */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🚀 Recomendações para o Futuro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureRecommendations.map((rec, index) => (
            <div key={rec.title} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-walmart-blue">{rec.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  rec.priority === 'Alta' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {rec.priority}
                </span>
              </div>
              <p className="text-gray-600 mb-3">{rec.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {rec.timeline}
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Resumo Executivo */}
      <AnimatedCard delay={0.7}>
        <div className="bg-gradient-to-br from-walmart-blue via-walmart-blue-light to-walmart-yellow p-8 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">📊 Resumo Executivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Resultados Alcançados</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Sistema de detecção implementado com sucesso
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Redução significativa nas perdas por fraude
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Melhoria na segurança das operações
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Aumento da satisfação dos clientes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Próximos Passos</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Expansão para outras regiões
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Integração com novos sistemas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Desenvolvimento de funcionalidades avançadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-walmart-yellow" />
                  Monitoramento contínuo e melhorias
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Citação Final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gray-50 p-8 rounded-lg"
      >
        <blockquote className="text-2xl font-medium text-gray-800 mb-4">
          "A implementação deste sistema de detecção de fraudes representa um marco significativo 
          na evolução tecnológica do Walmart, demonstrando como a ciência de dados pode 
          transformar operações e proteger tanto a empresa quanto os clientes."
        </blockquote>
        <cite className="text-lg text-walmart-blue font-semibold">
          — Equipe de Data Science, Walmart
        </cite>
      </motion.div>

      {/* Agradecimentos Especiais ao Professor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-10 rounded-xl shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-red-300" />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <Star className="w-8 h-8 mr-3 text-yellow-300" />
            Agradecimentos Especiais
            <Star className="w-8 h-8 ml-3 text-yellow-300" />
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-200">
              🎓 Professor Jerry
            </h3>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Gostaríamos de expressar nossa mais profunda gratidão ao <strong>Professor Jerry</strong>, 
              cujo conhecimento excepcional, dedicação incansável e paixão pelo ensino tornaram 
              este projeto possível. Sua orientação expert em ciência de dados, machine learning 
              e análise de negócios foi fundamental para o sucesso desta implementação.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <BookOpen className="w-8 h-8 text-yellow-300 mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">Conhecimento Técnico</h4>
                <p className="text-sm">
                  Expertise em algoritmos de ML, análise de dados e metodologias CRISP-DM
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <Users className="w-8 h-8 text-yellow-300 mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">Mentoria Excepcional</h4>
                <p className="text-sm">
                  Orientação personalizada e suporte contínuo durante todo o projeto
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <Trophy className="w-8 h-8 text-yellow-300 mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">Inspiração</h4>
                <p className="text-sm">
                  Motivação para alcançar a excelência e superar desafios complexos
                </p>
              </motion.div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-4 text-yellow-200">
                🌟 Impacto do Ensino
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Através de suas aulas dinâmicas, exemplos práticos e projetos desafiadores, 
                o Professor Jerry não apenas nos ensinou conceitos técnicos, mas também 
                nos inspirou a pensar criticamente sobre como a tecnologia pode resolver 
                problemas reais do mundo dos negócios. Este projeto é um reflexo direto 
                de sua metodologia de ensino excepcional.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-yellow-200 mb-2">
                🙏 Muito Obrigado, Professor Jerry!
              </p>
              <p className="text-lg text-gray-200">
                Seu impacto vai muito além desta sala de aula e continuará a influenciar 
                nossas carreiras e projetos futuros.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}