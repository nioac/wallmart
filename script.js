// Sistema de Navegação
function showSection(sectionId, clickedElement = null) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section && section.classList) {
            section.classList.add('hidden');
        }
    });
    
    // Remover classe ativa de todos os links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link && link.classList) {
            link.classList.remove('sidebar-active');
        }
    });
    
    // Mostrar a seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection && targetSection.classList) {
        targetSection.classList.remove('hidden');
    }
    
    // Adicionar classe ativa ao link clicado
    if (clickedElement && clickedElement.classList) {
        clickedElement.classList.add('sidebar-active');
    } else {
        // Se não foi passado elemento, procurar pelo link correspondente
        const activeLink = document.querySelector(`[onclick*="${sectionId}"]`);
        if (activeLink && activeLink.classList) {
            activeLink.classList.add('sidebar-active');
        }
    }
    
    // Inicializar gráficos se necessário
    if (sectionId === 'eda') {
        setTimeout(initializeEDACharts, 100);
    } else if (sectionId === 'dashboard') {
        setTimeout(initializeDashboard, 100);
    }
}

// Inicializar gráficos da EDA
function initializeEDACharts() {
    // Gráfico de Distribuição de Fraudes
    const fraudCtx = document.getElementById('fraudChart');
    if (fraudCtx && !fraudCtx.chart) {
        fraudCtx.chart = new Chart(fraudCtx, {
            type: 'doughnut',
            data: {
                labels: ['Entregas Normais', 'Fraudes Detectadas'],
                datasets: [{
                    data: [97.7, 2.3],
                    backgroundColor: ['#10B981', '#EF4444'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Gráfico de Fraudes por Horário
    const timeCtx = document.getElementById('timeChart');
    if (timeCtx && !timeCtx.chart) {
        timeCtx.chart = new Chart(timeCtx, {
            type: 'line',
            data: {
                labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
                datasets: [{
                    label: 'Fraudes por Horário',
                    data: [15, 8, 5, 12, 18, 25],
                    borderColor: '#EF4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Inicializar Dashboard
function initializeDashboard() {
    // Gráfico em tempo real
    const realTimeCtx = document.getElementById('realTimeChart');
    if (realTimeCtx && !realTimeCtx.chart) {
        realTimeCtx.chart = new Chart(realTimeCtx, {
            type: 'line',
            data: {
                labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
                datasets: [{
                    label: 'Fraudes Detectadas',
                    data: [2, 1, 4, 3, 2, 5],
                    borderColor: '#EF4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1000
                }
            }
        });
    }
    
    // Gráfico por região
    const regionCtx = document.getElementById('regionChart');
    if (regionCtx && !regionCtx.chart) {
        regionCtx.chart = new Chart(regionCtx, {
            type: 'bar',
            data: {
                labels: ['Norte', 'Sul', 'Leste', 'Oeste', 'Centro'],
                datasets: [{
                    label: 'Fraudes por Região',
                    data: [8, 12, 6, 15, 9],
                    backgroundColor: [
                        '#3B82F6',
                        '#10B981',
                        '#F59E0B',
                        '#EF4444',
                        '#8B5CF6'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Iniciar atualizações em tempo real
    startRealTimeUpdates();
}

// Atualizações em tempo real do dashboard
function startRealTimeUpdates() {
    setInterval(() => {
        // Atualizar métricas
        updateMetrics();
        
        // Atualizar gráficos
        updateCharts();
    }, 5000); // Atualiza a cada 5 segundos
}

function updateMetrics() {
    // Simular dados em tempo real
    const fraudsElement = document.getElementById('fraudsDetected');
    const ordersElement = document.getElementById('totalOrders');
    const responseTimeElement = document.getElementById('responseTime');
    const driversElement = document.getElementById('activeDrivers');
    
    if (fraudsElement) {
        const currentFrauds = parseInt(fraudsElement.textContent);
        const newFrauds = Math.max(0, currentFrauds + Math.floor(Math.random() * 3) - 1);
        fraudsElement.textContent = newFrauds;
    }
    
    if (ordersElement) {
        const currentOrders = parseInt(ordersElement.textContent.replace(',', ''));
        const newOrders = currentOrders + Math.floor(Math.random() * 20) + 5;
        ordersElement.textContent = newOrders.toLocaleString();
    }
    
    if (responseTimeElement) {
        const newResponseTime = Math.floor(Math.random() * 30) + 35;
        responseTimeElement.textContent = newResponseTime + 'ms';
    }
    
    if (driversElement) {
        const currentDrivers = parseInt(driversElement.textContent);
        const newDrivers = Math.max(100, currentDrivers + Math.floor(Math.random() * 10) - 5);
        driversElement.textContent = newDrivers;
    }
}

function updateCharts() {
    const realTimeChart = document.getElementById('realTimeChart');
    if (realTimeChart && realTimeChart.chart) {
        const chart = realTimeChart.chart;
        const newData = Math.floor(Math.random() * 6) + 1;
        
        // Adicionar novo ponto
        chart.data.labels.push(new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'}));
        chart.data.datasets[0].data.push(newData);
        
        // Manter apenas os últimos 6 pontos
        if (chart.data.labels.length > 6) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }
        
        chart.update('none');
    }
}

// Animações de entrada
function animateOnScroll() {
    const cards = document.querySelectorAll('.card-hover');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar a seção home por padrão
    showSection('home');
    
    // Inicializar animações
    animateOnScroll();
    
    // Adicionar efeitos de hover nos cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});

// Função para exportar relatórios (placeholder)
function exportReport(format) {
    alert(`Exportando relatório em formato ${format}...`);
}

// Função para filtrar dados (placeholder)
function filterData(criteria) {
    console.log(`Filtrando dados por: ${criteria}`);
}

// Função para configurações do sistema (placeholder)
function openSettings() {
    alert('Abrindo configurações do sistema...');
}