'use client'

import { motion } from 'framer-motion'
import { Heart, Star, BookOpen, Users, Award, MessageCircle, Lightbulb, Target } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

export default function ConsideracoesFinaisPage() {
  const courseHighlights = [
    {
      title: "Metodologia Prática",
      description: "Abordagem hands-on que conecta teoria com aplicações reais",
      icon: <Target className="w-6 h-6" />,
      rating: 5
    },
    {
      title: "Projetos Desafiadores",
      description: "Casos de uso complexos que simulam problemas do mundo real",
      icon: <Award className="w-6 h-6" />,
      rating: 5
    },
    {
      title: "Suporte Excepcional",
      description: "Disponibilidade e qualidade no esclarecimento de dúvidas",
      icon: <MessageCircle className="w-6 h-6" />,
      rating: 5
    },
    {
      title: "Conteúdo Atualizado",
      description: "Ferramentas e técnicas alinhadas com o mercado atual",
      icon: <BookOpen className="w-6 h-6" />,
      rating: 5
    }
  ]

  const personalLearnings = [
    {
      category: "Técnicas",
      items: [
        "Domínio avançado de algoritmos de Machine Learning",
        "Técnicas de feature engineering e seleção de variáveis",
        "Implementação de pipelines de dados robustos",
        "Otimização de modelos para produção"
      ]
    },
    {
      category: "Ferramentas",
      items: [
        "Proficiência em Python para Data Science",
        "Uso avançado de bibliotecas como scikit-learn, pandas e numpy",
        "Visualização de dados com matplotlib, seaborn e plotly",
        "Desenvolvimento web com React e frameworks modernos"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Comunicação eficaz de insights técnicos",
        "Pensamento analítico e resolução de problemas",
        "Trabalho colaborativo em projetos de dados",
        "Gestão de tempo e priorização de tarefas"
      ]
    }
  ]

  const futureRecommendations = [
    {
      title: "Expandir Conteúdo de Deep Learning",
      description: "Incluir mais módulos sobre redes neurais profundas, CNNs e RNNs",
      priority: "Alta",
      impact: "Preparar estudantes para tendências futuras"
    },
    {
      title: "Projetos com Dados Reais",
      description: "Parcerias com empresas para projetos com datasets reais",
      priority: "Média",
      impact: "Aumentar experiência prática dos alunos"
    },
    {
      title: "Módulo de MLOps",
      description: "Ensinar deploy, monitoramento e manutenção de modelos",
      priority: "Alta",
      impact: "Preparar para demandas do mercado"
    },
    {
      title: "Certificações Complementares",
      description: "Orientação para certificações AWS, Google Cloud, Azure",
      priority: "Média",
      impact: "Aumentar empregabilidade dos estudantes"
    }
  ]

  const testimonialQuotes = [
    {
      text: "Professor Jerry transformou minha visão sobre Data Science. Sua paixão pelo ensino é contagiante!",
      author: "Estudante Anônimo"
    },
    {
      text: "As aulas práticas e projetos reais fizeram toda a diferença na minha formação profissional.",
      author: "Ex-aluno"
    },
    {
      text: "Metodologia excepcional que combina rigor técnico com aplicabilidade prática.",
      author: "Colega de Turma"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header com Agradecimento */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-gradient-to-r from-walmart-blue to-walmart-blue-light text-white p-12 rounded-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mb-6"
        >
          <Heart className="w-16 h-16 mx-auto text-walmart-yellow" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Considerações Finais ao Professor Jerry</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Um agradecimento especial pela jornada transformadora em Data Science e Machine Learning
        </p>
      </motion.div>

      {/* Carta de Agradecimento */}
      <AnimatedCard delay={0.2}>
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-walmart-blue">
          <h2 className="text-2xl font-bold text-walmart-blue mb-6">📝 Carta de Agradecimento</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              <strong>Caro Professor Jerry,</strong>
            </p>
            <p className="mb-4">
              É com imensa gratidão que escrevo estas considerações finais, refletindo sobre a jornada 
              extraordinária que vivenciamos ao longo deste curso de Data Science. Sua dedicação, 
              paixão pelo ensino e expertise técnica transformaram não apenas nosso conhecimento, 
              mas nossa visão sobre o potencial transformador dos dados.
            </p>
            <p className="mb-4">
              Este projeto de detecção de fraudes no Walmart representa muito mais que um exercício 
              acadêmico - é a materialização de tudo que aprendemos sobre como a ciência de dados 
              pode resolver problemas reais e gerar valor tangível para organizações e sociedade.
            </p>
            <p className="mb-4">
              Sua metodologia única, que combina rigor técnico com aplicabilidade prática, nos 
              preparou não apenas para sermos profissionais competentes, mas para sermos agentes 
              de transformação em nossas futuras carreiras.
            </p>
            <p>
              <strong>Com admiração e gratidão,<br />
              Sua turma de Data Science</strong>
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Avaliação do Curso */}
      <AnimatedCard delay={0.3}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">⭐ Avaliação do Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-walmart-blue mr-3">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-walmart-blue">{highlight.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{highlight.description}</p>
              <div className="flex items-center">
                {[...Array(highlight.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-walmart-yellow fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-500">({highlight.rating}/5)</span>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Aprendizados Pessoais */}
      <AnimatedCard delay={0.4}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🎓 Principais Aprendizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalLearnings.map((learning, index) => (
            <div key={learning.category} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-walmart-blue mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                {learning.category}
              </h3>
              <ul className="space-y-2">
                {learning.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-walmart-yellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Depoimentos da Turma */}
      <AnimatedCard delay={0.5}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">💬 Depoimentos da Turma</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white border-l-4 border-walmart-yellow p-6 rounded-r-lg shadow-md"
            >
              <blockquote className="text-gray-700 italic mb-4">
                "{quote.text}"
              </blockquote>
              <cite className="text-walmart-blue font-semibold">— {quote.author}</cite>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Recomendações para Futuras Turmas */}
      <AnimatedCard delay={0.6}>
        <h2 className="text-2xl font-bold text-walmart-blue mb-6">🚀 Recomendações para Futuras Turmas</h2>
        <div className="space-y-4">
          {futureRecommendations.map((rec, index) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-walmart-blue flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-walmart-yellow" />
                  {rec.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  rec.priority === 'Alta' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {rec.priority}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{rec.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Impacto:</strong> {rec.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Estatísticas do Impacto do Curso */}
      <AnimatedCard delay={0.7}>
        <div className="bg-gradient-to-r from-walmart-blue via-walmart-blue-light to-walmart-yellow text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">📊 Impacto do Curso em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Satisfação com o Curso</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Projetos Práticos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Horas de Conteúdo</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-90">Conhecimento Adquirido</div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Mensagem Final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gray-50 p-8 rounded-lg border-2 border-walmart-yellow"
      >
        <Users className="w-12 h-12 mx-auto text-walmart-blue mb-4" />
        <h3 className="text-2xl font-bold text-walmart-blue mb-4">Uma Jornada Transformadora</h3>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          Professor Jerry, sua dedicação e paixão pelo ensino criaram uma experiência educacional 
          única que nos acompanhará por toda nossa carreira profissional. Obrigado por acreditar 
          em nosso potencial e nos guiar nesta jornada extraordinária pela ciência de dados.
        </p>
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <Star className="w-8 h-8 text-walmart-yellow fill-current" />
            </motion.div>
          ))}
        </div>
        <p className="text-walmart-blue font-semibold mt-4">
          ⭐⭐⭐⭐⭐ Avaliação Máxima!
        </p>
      </motion.div>
    </div>
  )
}