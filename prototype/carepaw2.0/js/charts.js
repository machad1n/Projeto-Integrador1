// CarePaw Charts JavaScript using Chart.js - DADOS REAIS DO DASHBOARD

// Dataset exato do dashboard fornecido pelo usuário
const dataset = [
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'População Pet (Estimativa Geral)',Tipo:'Total',Metrica:'População total estimada',Valor:'150 a 160 Milhões',Fonte:'Abinpet (via Senado)'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Total',Metrica:'População total estimada em 2020',Valor:84000000,Fonte:'Comac/Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Cães',Metrica:'Quantidade em lares (Radar Pet 2020)',Valor:54000000,Fonte:'Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'População Pet (Lares)',Tipo:'Gatos',Metrica:'Quantidade em lares (Radar Pet 2020)',Valor:30000000,Fonte:'Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'População Pet Atual',Tipo:'Cães',Metrica:'Quantidade em lares',Valor:68000000,Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'População Pet Atual',Tipo:'Gatos',Metrica:'Quantidade em lares',Valor:34000000,Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'Crescimento Anual',Tipo:'Gatos',Metrica:'Taxa de crescimento anual',Valor:6,Unidade:'% ao ano',Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2023,Categoria:'Crescimento Anual',Tipo:'Cães',Metrica:'Taxa de crescimento anual',Valor:3.5,Unidade:'% ao ano',Fonte:'Abinpet'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Total',Metrica:'Projeção total 2030',Valor:101000000,Fonte:'Comac/Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Gatos',Metrica:'Projeção 2030',Valor:41600000,Fonte:'FGV / Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2030,Categoria:'Projeção Populacional',Tipo:'Cães',Metrica:'Projeção 2030',Valor:70900000,Fonte:'FGV / Radar Pet 2020'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Vulnerabilidade Pet',Tipo:'Cães e Gatos',Metrica:'Total em condições de vulnerabilidade',Valor:4800000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2020,Categoria:'Vulnerabilidade Pet',Tipo:'Total',Metrica:'Pico vulnerabilidade',Valor:8800000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (País)',Tipo:'Cães e Gatos',Metrica:'% animais em abandono',Valor:25,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Quantidade)',Tipo:'Cães e Gatos',Metrica:'Total abandonados',Valor:30200000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Ruas)',Tipo:'Cães',Metrica:'Cães nas ruas',Valor:20200000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Abandono (Ruas)',Tipo:'Gatos',Metrica:'Gatos nas ruas',Valor:10000000,Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Total)',Tipo:'Total',Metrica:'Total sob tutela de ONGs',Valor:201000,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2022,Categoria:'Tutela ONGs (Total)',Tipo:'Total',Metrica:'Total sob tutela (2022)',Valor:184960,Fonte:'Instituto Pet Brasil (IPB)'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Distribuição)',Tipo:'Gatos',Metrica:'% sob tutela (gatos)',Valor:92,Unidade:'%',Fonte:'IPB'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Tutela ONGs (Distribuição)',Tipo:'Cães',Metrica:'% sob tutela (cães)',Valor:8,Unidade:'%',Fonte:'IPB'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Adoção (Total)',Tipo:'Total',Metrica:'% pets adotados nos lares',Valor:80,Unidade:'%',Fonte:'GoldeN/Opinion Box (2025)'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Microchipagem',Tipo:'Cães',Metrica:'% microchipados',Valor:8,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Microchipagem',Tipo:'Gatos',Metrica:'% microchipados',Valor:10,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Castracao (Taxa)',Tipo:'Cães',Metrica:'% castrados',Valor:28,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Brasil',Ano:'Indefinido',Categoria:'Castracao (Taxa)',Tipo:'Gatos',Metrica:'% castrados',Valor:53,Unidade:'%',Fonte:'Mars Petcare'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Estrutural',Tipo:'Total',Metrica:"% de municípios sem órgão específico",Valor:45,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Estrutural',Tipo:'Total',Metrica:"% de municípios sem canil/gatil",Valor:76,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Carência Legislativa',Tipo:'Total',Metrica:"% sem legislação específica",Valor:62,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'Municípios Brasileiros (DPDA)',Ano:2023,Categoria:'Gestão de Dados',Tipo:'Total',Metrica:"% sem iniciativa de censo animal",Valor:67,Unidade:'%',Fonte:'Pesquisa DPDA/MMA 2023'},
    {Abrangencia:'São Paulo (SEMIL)',Ano:2024,Categoria:'Castracao (Serviços)',Tipo:'Cães e Gatos',Metrica:"% municípios que oferecem serviços permanentes",Valor:62.3,Unidade:'%',Fonte:'SEMIL 2024'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'SinPatinhas registros (acumulado)',Tipo:'Total',Metrica:'Registros no SinPatinhas',Valor:620000,Fonte:'MMA / GovBR 2025'},
    {Abrangencia:'Brasil',Ano:2024,Categoria:'Maus-tratos (RJ taxa 24h)',Tipo:'Total',Metrica:'Casos em 24h no RJ (média 2024)',Valor:2,Unidade:'casos/24h',Fonte:'ISP / G1'}
];

// Função para formatar números (igual ao dashboard original)
function numberFmt(v) { 
    if(v == null) return '—'; 
    if(typeof v === 'number') { 
        return v >= 1000000 ? (v/1000000).toFixed(1)+'M' : v >= 1000 ? (v/1000).toFixed(1)+'k' : v; 
    } 
    return v; 
}

// Função para agregar dados para KPIs (igual ao dashboard original)
function aggregateForKPIs(filtered) {
    // population estimate - prefer explicit row
    const popRow = filtered.find(r=> r.Categoria && r.Categoria.indexOf('População Pet (Estimativa Geral)')>=0 ) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('População Pet (Estimativa Geral)')>=0 );
    const popRaw = popRow ? popRow.Valor : null;
    const popTexto = typeof popRaw === 'string' ? popRaw : null;
    const pop = typeof popRaw === 'string' ? 160000000 : popRaw;
    const vulnRow = filtered.find(r=> r.Metrica && r.Metrica.indexOf('vulnerabilidade')>=0) || filtered.find(r=> r.Categoria && r.Categoria.indexOf('Vulnerabilidade Pet')>=0);
    const vulnerable = vulnRow? vulnRow.Valor : null;
    const abandoned = (filtered.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (Quantidade)')>=0) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('Abandono (Quantidade)')>=0)).Valor;
    const tutela = (filtered.find(r=> r.Categoria && r.Categoria.indexOf('Tutela ONGs (Total)')>=0) || dataset.find(r=> r.Categoria && r.Categoria.indexOf('Tutela ONGs (Total)')>=0)).Valor;
    const castrDogs = (dataset.find(r=> r.Metrica && r.Metrica.indexOf('% castrados')>=0 && r.Tipo==='Cães') || {}).Valor;
    const castrCats = (dataset.find(r=> r.Metrica && r.Metrica.indexOf('% castrados')>=0 && r.Tipo==='Gatos') || {}).Valor;
    const adoption = (dataset.find(r=> r.Categoria && r.Categoria.indexOf('Adoção (Total)')>=0) || {}).Valor;
    return {pop,popTexto,vulnerable,abandoned,tutela,castrDogs,castrCats,adoption};
}

// Chart configuration
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(42, 157, 143, 0.9)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#2a9d8f',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        },
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        }
    }
};

// Color palette
const colors = {
    primary: '#2a9d8f',
    secondary: '#264653',
    accent: '#e76f51',
    warning: '#e9c46a',
    light: '#e0f2f1',
    gradients: {
        primary: 'linear-gradient(135deg, #2a9d8f 0%, #1f7a73 100%)',
        secondary: 'linear-gradient(135deg, #264653 0%, #1b3b47 100%)',
        accent: 'linear-gradient(135deg, #e76f51 0%, #d65a3a 100%)'
    }
};

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Chart.js to load
    if (typeof Chart !== 'undefined') {
        initializeCharts();
    } else {
        // Retry after a short delay if Chart.js isn't loaded yet
        setTimeout(() => {
            if (typeof Chart !== 'undefined') {
                initializeCharts();
            } else {
                console.warn('Chart.js not loaded. Charts will not be displayed.');
                showChartError();
            }
        }, 1000);
    }
});

function initializeCharts() {
    // Remove loading indicators
    document.querySelectorAll('.chart-loading').forEach(loading => {
        loading.remove();
    });

    // Render KPIs and populate table first
    renderDashboard();

    // Initialize each chart using the same logic as the original dashboard
    createMainChart();
    createDistributionChart();
    createTrendsChart();
    createOngsChart();
    
    console.log('Charts initialized with REAL DASHBOARD DATA! 📊 Dataset contains', dataset.length, 'entries.');
}

// Render Dashboard (KPIs and Table) - igual ao dashboard original
function renderDashboard() {
    const filtered = dataset;
    const agg = aggregateForKPIs(filtered);
    
    // Populate KPIs
    const el_population = document.getElementById('k_population');
    const el_vulnerable = document.getElementById('k_vulnerable');
    const el_abandoned = document.getElementById('k_abandoned');
    const el_tutela = document.getElementById('k_tutela');
    const el_castration = document.getElementById('k_castration');
    const el_adoption = document.getElementById('k_adoption');
    
    if (el_population) el_population.textContent = agg.popTexto || numberFmt(agg.pop);
    if (el_vulnerable) el_vulnerable.textContent = numberFmt(agg.vulnerable);
    if (el_abandoned) el_abandoned.textContent = numberFmt(agg.abandoned);
    if (el_tutela) el_tutela.textContent = numberFmt(agg.tutela);
    if (el_castration) el_castration.textContent = (agg.castrDogs?agg.castrDogs+'%':'—') + ' / ' + (agg.castrCats?agg.castrCats+'%':'—');
    if (el_adoption) el_adoption.textContent = (agg.adoption? agg.adoption+'%':'—');

    // Populate Quick List (Indicators)
    const quick = document.getElementById('quickList');
    if (quick) {
        quick.innerHTML = `
            <div><strong>Microchip (C/G)(Mars Petcare):</strong>
                ${(dataset.find(d=> d.Metrica && d.Metrica.indexOf('% microchipados')>=0 && d.Tipo==='Cães') || {Valor:'—'}).Valor}% / ${(dataset.find(d=> d.Metrica && d.Metrica.indexOf('% microchipados')>=0 && d.Tipo==='Gatos') || {Valor:'—'}).Valor}%
            </div>
            <div><strong>Taxa abandono(Mars Petcare):</strong>
                ${(dataset.find(d=> d.Categoria && d.Categoria.indexOf('Abandono (País)')>=0) || {Valor:'—'}).Valor}%
            </div>
            <div><strong>Abandonados (Mars Petcare):</strong>
                ${numberFmt((dataset.find(d => d.Categoria && d.Categoria.indexOf('Abandono (Quantidade)')>=0) || {Valor:0}).Valor)}
            </div>
        `;
    }

    // Populate Table
    const tbody = document.querySelector('#tbl tbody');
    if (tbody) {
        tbody.innerHTML = '';
        filtered.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${r.Abrangencia}</td><td>${r.Ano}</td><td>${r.Categoria}</td><td>${r.Tipo}</td><td>${r.Metrica}</td><td>${r.Valor}</td><td>${r.Fonte||''}</td>`;
            tbody.appendChild(tr);
        });
    }

    // KPI map text
    const kpimap = document.getElementById('kpimap');
    if (kpimap) {
        kpimap.textContent = 'KPIs utilizadas: População total; Taxas de crescimento; Proporção de vulneráveis; Taxa de abandono; Total sob tutela; Castração; Adoção; Penalidades legais; Programas governamentais (SinPatinhas, ProPatinhas).';
    }
}

// Main Chart (Bar) - População estimada vs Vulneráveis vs Abandonados
function createMainChart() {
    const ctx = document.getElementById('chartMain');
    if (!ctx) return;

    const filtered = dataset;
    const agg = aggregateForKPIs(filtered);
    
    const labels = ['População estimada','Vulneráveis','Abandonados'];
    const values = [agg.pop || 0, agg.vulnerable || 0, agg.abandoned || 0];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade',
                data: values,
                backgroundColor: ['#0f62fe','#f59e0b','#ef4444'],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                legend: {
                    display: false
                },
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${numberFmt(context.parsed.y)}`;
                        }
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    ticks: {
                        ...chartConfig.scales.y.ticks,
                        callback: function(value) {
                            return numberFmt(value);
                        }
                    }
                }
            }
        }
    });
}

// Distribution Chart (Doughnut) - Cães vs Gatos
function createDistributionChart() {
    const ctx = document.getElementById('chartDistribution');
    if (!ctx) return;

    const dogs = (dataset.find(r=> r.Tipo==='Cães' && r.Categoria && r.Categoria.indexOf('População Pet Atual')>=0) || {}).Valor || 0;
    const cats = (dataset.find(r=> r.Tipo==='Gatos' && r.Categoria && r.Categoria.indexOf('População Pet Atual')>=0) || {}).Valor || 0;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cães','Gatos'],
            datasets: [{
                data: [dogs, cats], 
                backgroundColor: ['#0f62fe','#ef476f'],
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverBorderWidth: 3,
                hoverBorderColor: '#ffffff'
            }]
        },
        options: {
            ...chartConfig,
            cutout: '60%',
            plugins: {
                ...chartConfig.plugins,
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${numberFmt(value)} (${percentage}%)`;
                        }
                    }
                }
            },
            scales: {} // Remove scales for doughnut chart
        }
    });
}

// Trends Chart (Line) - Evolução populacional e vulnerabilidade
function createTrendsChart() {
    const ctx = document.getElementById('chartTrends');
    if (!ctx) return;

    const years = Array.from(new Set(dataset.filter(d=> d.Ano && d.Ano!=='Indefinido').map(d=>d.Ano))).sort();
    const popSeries = years.map(y=>{ 
        const r=dataset.find(d=> d.Ano===y && d.Metrica && d.Metrica.indexOf('População total estimada em 2020')===-1 && (d.Categoria && (d.Categoria.indexOf('População Pet (Lares)')>=0 || d.Categoria.indexOf('População Pet Atual')>=0)) ); 
        if(!r) return null; 
        return r.Valor; 
    });
    const vulnSeries = years.map(y=>{ 
        const r=dataset.find(d=> d.Ano===y && d.Categoria && d.Categoria.indexOf('Vulnerabilidade Pet')>=0); 
        return r? r.Valor : null; 
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years.map(String),
            datasets: [
                {
                    label: 'População (amostral)',
                    data: popSeries,
                    borderColor: '#2a9d8f',
                    backgroundColor: '#2a9d8f20',
                    fill: false,
                    tension: 0.3,
                    borderWidth: 3,
                    pointBackgroundColor: '#2a9d8f',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Vulneráveis',
                    data: vulnSeries,
                    borderColor: '#e76f51',
                    backgroundColor: '#e76f5120',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 3,
                    pointBackgroundColor: '#e76f51',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${numberFmt(context.parsed.y)}`;
                        }
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    ticks: {
                        ...chartConfig.scales.y.ticks,
                        callback: function(value) {
                            return numberFmt(value);
                        }
                    }
                }
            }
        }
    });
}

// ONGs Chart (Horizontal Bar) - Mantendo o original do CarePaw
function createOngsChart() {
    const ctx = document.getElementById('ongsChart');
    if (!ctx) return;

    // Dados fictícios para ONGs por estado (mantendo o original do CarePaw)
    const ongsData = {
        labels: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'GO', 'DF', 'ES'],
        data: [450, 320, 280, 220, 180, 150, 140, 120, 95, 85],
        colors: ['#2a9d8f', '#264653', '#e76f51', '#e9c46a', '#81c784', '#64b5f6', '#ba68c8', '#ff8a65', '#a5d6a7', '#ffb74d']
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ongsData.labels,
            datasets: [{
                label: 'Número de ONGs',
                data: ongsData.data,
                backgroundColor: ongsData.colors,
                borderColor: ongsData.colors,
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            ...chartConfig,
            indexAxis: 'y',
            plugins: {
                ...chartConfig.plugins,
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `ONGs: ${context.parsed.x}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Error handling for charts
function showChartError() {
    document.querySelectorAll('.chart-container canvas').forEach(canvas => {
        const container = canvas.parentElement;
        const error = document.createElement('div');
        error.className = 'chart-error';
        error.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <p>Erro ao carregar gráfico</p>
            <small>Verifique sua conexão com a internet</small>
        `;
        error.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 300px;
            color: #6c757d;
            text-align: center;
        `;
        error.querySelector('i').style.cssText = `
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #e76f51;
        `;
        error.querySelector('p').style.cssText = `
            margin: 0 0 0.5rem 0;
            font-weight: 500;
        `;
        error.querySelector('small').style.cssText = `
            margin: 0;
            font-size: 0.8rem;
        `;
        
        canvas.style.display = 'none';
        container.appendChild(error);
    });
}

// Chart animation on scroll
function animateChartsOnScroll() {
    const chartsSection = document.querySelector('.charts-section');
    if (!chartsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.chart-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(container);
    });
}

// Initialize chart animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateChartsOnScroll, 500);
});

// Responsive chart handling
function handleChartResize() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
}

window.addEventListener('resize', debounce(handleChartResize, 300));

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export chart data and real dataset for potential API integration
window.CarePawCharts = {
    dataset: dataset,
    aggregateForKPIs: aggregateForKPIs,
    numberFmt: numberFmt,
    config: chartConfig,
    colors: colors,
    updateChart: function(chartId, newData) {
        const chart = Chart.getChart(chartId);
        if (chart) {
            chart.data = newData;
            chart.update();
        }
    }
};

console.log('Charts module loaded with REAL DASHBOARD DATA successfully! 📈 Dataset contains', dataset.length, 'entries from official sources.');
